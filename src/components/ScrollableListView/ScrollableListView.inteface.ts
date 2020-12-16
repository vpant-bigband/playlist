export type eventType = 'window' | 'base';

export interface IScrollableListView {
  children?: React.ReactChildren | any[] | React.ReactNode;
  onScrollEndHandler?: () => void;
  renderRow?: (item: any, index: number) => React.ReactElement | React.ReactElement[] | any[] | null | string;
  offset?: number;
  data?: any[];
  testId?: string;
  loader?: React.ReactElement | React.ReactElement[] | any[] | null | string;
  attachEvent?: string;
  hasMore?: boolean;
}
