import React, { useRef, useEffect, useState } from 'react';

import { ScrollableListViewWrapper, RowItemWrapper } from './ScrollableListView.styes';
import { IScrollableListView } from './ScrollableListView.inteface';

const ScrollableListView: React.FunctionComponent<IScrollableListView> = ({
  onScrollEndHandler,
  testId = 'scrollable-list-view',
  hasMore = true,
  children,
}) => {
  const loader = useRef(onScrollEndHandler);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && loader.current) {
          loader.current();
        }
      },
      { threshold: 0.25 },
    ),
  );

  useEffect(() => {
    loader.current = onScrollEndHandler;
  }, [onScrollEndHandler]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  if (!children) {
    return null;
  }
  return (
    <ScrollableListViewWrapper data-testid={testId}>
      {React.Children.map(children, (child, rowIndex: number) => {
        return <RowItem key={rowIndex}>{child}</RowItem>;
      })}
      {hasMore && <li data-testid="load-more-element" ref={setElement} />}
    </ScrollableListViewWrapper>
  );
};

const RowItem: React.FunctionComponent<{
  children: React.ReactChild | string | null | any;
}> = ({ children }) => {
  //@ts-ignore
  const [inView, setInView] = useState<boolean>( window.isIntesecting || false);
  const [height, setHeight] = useState<number>(0);
  const [element, setElement] = useState<HTMLElement | null>(null);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.50 },
    ),
  );
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
      // @ts-ignore
      const childHeight = currentElement.firstChild ? currentElement.firstChild.clientHeight : 0;
      if (childHeight > 0) {
        setHeight((prevHeight) => (prevHeight !== childHeight ? childHeight : prevHeight));
      }
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);
  return (
    <RowItemWrapper height={height} ref={setElement}>
      {inView && children}
    </RowItemWrapper>
  );
};

export default ScrollableListView;
