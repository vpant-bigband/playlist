import React from 'react';
import { render } from '@testing-library/react';
import VideoCard from '../VideoCard';
import VideoCardMock from '../__mocks__/VideoCard.mock';
import { Theme } from '../../../theme';


const renderSetup = () => render(<Theme><VideoCard {...VideoCardMock} /></Theme>);
describe('VideoCard Component test suite', () => {
  it('should match snapshot', () => {
      const { container } = renderSetup();
      expect(container).toMatchSnapshot();
  });

  it('should render image', () => {
    const { getByTestId } = renderSetup();
    const image = getByTestId('video-card-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', VideoCardMock.thumbnails.high.url);
  });
  it('should render with title', () => {
    const { getByTestId } = renderSetup();
    const title = getByTestId('video-card-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(VideoCardMock.title);
  });
  it('should render with description', () => {
    const { getByTestId } = renderSetup();
    const title = getByTestId('video-card-description');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(VideoCardMock.description);
  });

  it('should render with channel title', () => {
    const { getByTestId } = renderSetup();
    const title = getByTestId('video-card-channel-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(VideoCardMock.channelTitle);
  });
});