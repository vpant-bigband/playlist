export interface Image {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: Image;
  medium: Image;
  high: Image;
}

export interface VideoCardProps {
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  publishedAt: string;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}