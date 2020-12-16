import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import VideoCardList from './components/VideoCardList/VideoCardList';
import Loader from './components/Loader/Loader';
import useApp from './useApp.hooks';
import { ErrorBoundary } from './components/ErrorBoundary';

const App: React.FunctionComponent = () => {
  const [keyword, setKeyword] = useState<string>('');
  const onSearchIconClick = useCallback((searchText) => setKeyword(searchText), []);  
  const [videoCardListData, isLoading, onScrollEndHandler, errorInfo] = useApp(keyword);
  // console.log('videoCardListData ', videoCardListData);
  return (
    <>
      <Header onSearchIconClick={onSearchIconClick}/>
      <main>
        <ErrorBoundary>
          { !errorInfo &&
            (
            <>
              <VideoCardList onScrollEndHandler={onScrollEndHandler} data={videoCardListData} />
              {isLoading && <Loader />}
            </>
            )
          } 
          {
            errorInfo && errorInfo.message
          }
        </ErrorBoundary>
      </main>
    </>
  );
}

export default App;
