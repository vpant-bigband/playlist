import BusinessException from './BusinessExecption';
import { useState, useCallback, useEffect, useRef } from 'react';
import { VideoCardListProps } from './components/VideoCardList/VideoCardList';


const MAX_RESULT = 10;

const INIT_DATA = { pageInfo: { resultsPerPage: 0, totalResults: 0 } };


const getVideosByKeyword = async (keyword: string, pageToken: string = '') => {
  return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULT}&q=${keyword}&key=AIzaSyBtf2pvT-t7B0Og6PNRFhDLJLzFJ6dYbFw&type=video&pageToken=${pageToken}`)
    .then(async (res: Response) => { 
      if (res.status >= 400) {
        const data = await res.json();
        const { error: { message, status } = { message: 'Something went wrong', status: '' }} = data;
        throw new BusinessException(message, status);  
      }
      return res.json();
    });
}
const useApp = (keyword: string): [VideoCardListProps, boolean, () => void, BusinessException | undefined] => {
  const errorInfo = useRef<BusinessException>();
  const [pageToken, setPageToken] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const searchText = useRef<string>();
  const [videoListData, setVideoListData] = useState<VideoCardListProps>(INIT_DATA);

  const onScrollEndHandler = useCallback(() => {
    const { nextPageToken } = videoListData;
    console.log('nextPageToken ', nextPageToken, isLoading);
    if (nextPageToken && !isLoading) {
      setPageToken(nextPageToken);
    }
  }, [setPageToken, videoListData, isLoading]);

  

  useEffect(() => {
    if (keyword) {
      setLoading(true);
      getVideosByKeyword(keyword, pageToken).then((resp: VideoCardListProps) => {
        errorInfo.current = undefined;
        setVideoListData((prevVideoList: VideoCardListProps) => { 
          const { items: oldItems = [], } = prevVideoList;
        const { items: newItems = []} = resp;
        const isNewKeyword = searchText.current !== keyword;
        const newState = isNewKeyword ? resp : { ...resp, items: [...oldItems, ...newItems] };
          return newState;
        });
        searchText.current = keyword;
      }).catch((error: BusinessException) => { 
        console.log('error ', error);
        errorInfo.current = error;
      }).finally(() => setLoading(false));
    }
  }, [keyword, setLoading, setVideoListData, pageToken]);

  return [videoListData, isLoading, onScrollEndHandler, errorInfo.current];
}

export default useApp;