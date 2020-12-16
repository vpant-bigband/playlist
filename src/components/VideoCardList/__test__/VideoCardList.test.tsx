import React from 'react';
import VideoCardList from '../VideoCardList';
import { Theme } from '../../../theme';
import VideoCardListMocks from '../__mocks__/VideoCardList.mock';
import { render } from '@testing-library/react';
import { mockAllIsIntersecting, intersectionMockInstance } from 'react-intersection-observer/test-utils';

const mockIntersectionObserver = jest.fn();

mockIntersectionObserver.mockReturnValue({
  observe: intersectionMockInstance,
  unobserve: intersectionMockInstance,
  disconnect: intersectionMockInstance,
});

window.IntersectionObserver = mockIntersectionObserver;

// @ts-ignore
window.isIntesecting = true

const renderSetup = () => render(<Theme><VideoCardList data={VideoCardListMocks}/></Theme>);
describe('VideoCardList component test suite', () => {
  beforeEach(() => {
    mockAllIsIntersecting(true);
  });
  it('should match snapshot', () => {
    const { container } = renderSetup();
    expect(container).toMatchSnapshot();
  });
  it('should render with video card component', async () => {
    // global.scrollTo(0, 100);
    const { getAllByTestId, findByTestId } = renderSetup();
    const scrollableListView = await findByTestId('scrollable-list-view');
    const videoCards = getAllByTestId('video-card-wrapper');
    expect(videoCards).toBeDefined();
  });
});