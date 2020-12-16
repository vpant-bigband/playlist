import styled from '@emotion/styled';

export const ScrollableListViewWrapper = styled.ul`
  display: block;
  overflow: auto;
  flex: auto;
  width: 100%;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export const RowItemWrapper = styled.div<{ height: number }>`
  min-height: ${(props) => (props.height > 0 ? props.height : 100)}px;
`;
