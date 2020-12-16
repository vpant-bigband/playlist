import { renderHook, act } from '@testing-library/react-hooks';
import useApp from './useApp.hooks';
import VideoCardListMock from './components/VideoCardList/__mocks__/VideoCardList.mock';
import ErrorResponse from './__mocks__/app/ErrorResponse.mock';
describe('use app hooks test suite', () => {
  beforeEach(() => {
    //@ts-ignore
    fetch.resetMocks();
  });
  it('should return result with init data ', () => {
    const { result } = renderHook(() => useApp('music'));
    const [ { pageInfo }] = result.current;
    expect(pageInfo).toEqual({ resultsPerPage: 0, totalResults: 0 });
  });

  it('should return result with mock', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify(VideoCardListMock));
    const { result, waitForValueToChange } = renderHook(() => useApp('music'));
    await waitForValueToChange(() => {
      return result.current[0];
    });
    const [videoListData] = result.current;
    expect(videoListData).toEqual(VideoCardListMock);
  });

  it('should get error detail when error is thrown by api', async () => {
    //@ts-ignore
    fetch.mockReject(ErrorResponse);
    const { result, waitForValueToChange } = renderHook(() => useApp('music'));
    await waitForValueToChange(() => {
      return result.current[3];
    });
    const errorInfo = result.current[3];
    expect(errorInfo).toBeDefined();
    expect(errorInfo).toBe(ErrorResponse);
  });

  it('should trigger api call when scroll end handler callback is called', async () => {
    // @ts-ignore
    fetch.mockResponse(JSON.stringify({ ...VideoCardListMock, nextPageToken: 'CDwQAA'}));
    const { result, waitForValueToChange } = renderHook(() => useApp('music'));
    await waitForValueToChange(() => {
      return result.current[0];
    });
    const onScrollEndHandler = result.current[2]
    act(() => {
      onScrollEndHandler();
    });
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=music&key=AIzaSyBtf2pvT-t7B0Og6PNRFhDLJLzFJ6dYbFw&type=video&pageToken=CDwQAA`);
  });
});