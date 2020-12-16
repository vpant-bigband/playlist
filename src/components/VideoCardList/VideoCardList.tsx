import React, { useCallback, useState } from 'react';
import { VideoCardProps } from '../VideoCard/VideoCard.interface';
import ScrollableListView from '../ScrollableListView';
import { VideoCard } from '../VideoCard';


interface VideoItemProps {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: VideoCardProps;
};

export interface VideoCardListProps {
  nextPageToken?: string,
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items?: VideoItemProps[];
}


const VideoCardList: React.FunctionComponent<{ data : VideoCardListProps; onScrollEndHandler: () => void; }> = ({ data, onScrollEndHandler }) => {
  return (
    <ScrollableListView onScrollEndHandler={onScrollEndHandler}>
      {data.items?.map((videoData: VideoItemProps) => {
        return <VideoCard key={videoData.id.videoId} {...videoData.snippet} />;
      })}
    </ScrollableListView>
  );
}

export default VideoCardList;