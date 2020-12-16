import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Theme } from './theme';
import SuccessResponseMock from './__mocks__/app/SuccessResponse.mock';
import VideoCardListMock from './components/VideoCardList/__mocks__/VideoCardList.mock';
import { intersectionMockInstance } from 'react-intersection-observer/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import useApp from './useApp.hooks';


const mockIntersectionObserver = jest.fn();

mockIntersectionObserver.mockReturnValue({
  observe: intersectionMockInstance,
  unobserve: intersectionMockInstance,
  disconnect: intersectionMockInstance,
});

window.IntersectionObserver = mockIntersectionObserver;

// @ts-ignore
window.isIntesecting = true
const renderSetup = () => render(<Theme><App /></Theme>);

const onScrollEndHandler = jest.fn();

// jest.mock('./useApp.hooks', () => {
//   return jest.fn(() => [SuccessResponseMock, false, onScrollEndHandler]);
// });
describe('App test suite', () => {

  beforeEach(() => {
     // @ts-ignore
     fetch.mockResponse(JSON.stringify(VideoCardListMock));
  });
  it('should match snapshot', () => {
    const { container } = renderSetup();
    expect(container).toMatchSnapshot();
  });

  it('should ', async () => {
    const { result, waitForValueToChange } = renderHook(() => useApp('music'));
    await waitForValueToChange(() => {
      return result.current[0];
    })
    const { debug } = renderSetup();
    console.log(debug());
  });
});
