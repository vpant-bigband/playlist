import React, { useMemo } from 'react';
import { VideoCardProps, Image } from './VideoCard.interface';
import { VideoCardWrapper, VideoCardImage, VideoCardContent, VideoCardTitle, VideoCardDescription, Text } from './VideoCard.styles';
import theme from '../../theme/theme.constant';
import useBreakpoints from '../utils/useBreakpoints.hooks';

const VideoCard: React.FunctionComponent<VideoCardProps> = ({ title, thumbnails, description, channelTitle}) => {
  const device = useBreakpoints();
  const [{ height, url, width }, resolution] = useMemo(() => {
    const { isMobile, isPad1 } = device;
    let thumbnail = [thumbnails.high, 'high'];
    if (isMobile) {
      thumbnail = [thumbnails.default, 'low'];
    } 
    if (isPad1) {
      thumbnail = [thumbnails.medium, 'medium'];
    }
    return thumbnail;
  }, [thumbnails, device]) as [Image, string];

  return (
    <VideoCardWrapper data-testid='video-card-wrapper'>
      <VideoCardImage data-testid='video-card-image' src={url} resolution={resolution} height={height} width={width} />
      <VideoCardContent>
        <VideoCardTitle data-testid='video-card-title' pb={[0, 20]} fontSize={[1, 2, 4]} dangerouslySetInnerHTML={{ __html: title }} />
        <Text display={['none', 'none', 'flex']} data-testid='video-card-channel-title' paddingBottom="10px" color={theme.colors.blue} fontSize={[1,2]}>{channelTitle}</Text>
        <VideoCardDescription display={['none', 'none', 'flex']} data-testid='video-card-description' fontSize={[1, 2, 3]}>
          {description}
        </VideoCardDescription>
      </VideoCardContent>
    </VideoCardWrapper>
  );
}

export default VideoCard;