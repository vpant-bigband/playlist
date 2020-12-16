import React from 'react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { render } from '@testing-library/react';
import ScrollableListView from '../';
import data from '../__mocks/mockListData';


jest.clearAllMocks();

const observe = jest.fn();
const unobserve = jest.fn();

// @ts-ignore
window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

const renderRow = ({ id, name }: { id: string; name: string }) => {
  return (
    <li style={{ height: 150 }} key={id}>
      {name}
    </li>
  );
};

describe('ScrollableListView test suite', () => {
  beforeEach(() => {
    mockAllIsIntersecting(true);
  });
  it('should be match snapshot', () => {
    const { container } = render(<ScrollableListView>{data[0].map(renderRow)}</ScrollableListView>);
    expect(container).toMatchSnapshot();
  });
  it('should invoke window.IntersectionObserver method', () => {
    render(<ScrollableListView>{data[0].map(renderRow)}</ScrollableListView>);
    expect(window.IntersectionObserver).toHaveBeenCalled();
  });
  it('should invoke onScrollEndHandler when scroll the end', async () => {
    const onScrollEndHandlerSpy = jest.fn();
    const observeFn = jest.fn((elementNode: any) => {
      onScrollEndHandlerSpy(elementNode);
    });
    // @ts-ignore
    window.IntersectionObserver = jest.fn(() => ({
      observe: observeFn,
      unobserve,
    }));
    const { findByTestId } = render(
      <ScrollableListView onScrollEndHandler={onScrollEndHandlerSpy}>{[renderRow(data[0][0])]}</ScrollableListView>,
    );
    const element = await findByTestId('scrollable-list-view');
    expect(element).toBeDefined();
    const loadMore = await findByTestId('load-more-element');
    expect(loadMore).toBeInTheDocument();
    expect(observeFn).toHaveBeenCalled();
  });
});
