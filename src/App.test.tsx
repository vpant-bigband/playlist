import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { Theme } from './theme';
import SuccessResponseMock from './__mocks__/app/SuccessResponse.mock';
import { intersectionMockInstance } from 'react-intersection-observer/test-utils';
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

jest.mock('./useApp.hooks', () => jest.fn());

const mockUseApp = useApp as jest.Mock;

describe('App test suite', () => {

  beforeEach(() => {
    //@ts-ignore
    fetch.resetMocks();
  });
  it('should match snapshot', () => {
    mockUseApp.mockImplementationOnce(() => [SuccessResponseMock, false, onScrollEndHandler ]);
    const { container } = renderSetup();
    expect(container).toMatchSnapshot();
  });
  it('should have video card list', () => {
    mockUseApp.mockImplementationOnce(() => [SuccessResponseMock, false, onScrollEndHandler ]);
    const { getByTestId, getAllByTestId } = renderSetup();
    const scrollableListView = getByTestId('scrollable-list-view');
    expect(scrollableListView).toBeInTheDocument();
    const videoCards = getAllByTestId('video-card-wrapper');
    expect(videoCards).toBeDefined();
    expect(videoCards).toHaveLength(SuccessResponseMock.items.length);
  });
  it('should call on scroll end handler', () => {
    mockUseApp.mockImplementationOnce(() => [SuccessResponseMock, false, onScrollEndHandler ]);
    const { getByTestId } = renderSetup();
    const loadMoreElement = getByTestId('load-more-element');
    expect(loadMoreElement).toBeInTheDocument();
    fireEvent.scroll(loadMoreElement);
    waitFor(() => {
      expect(onScrollEndHandler).toHaveBeenCalled();
    });
  });
});
