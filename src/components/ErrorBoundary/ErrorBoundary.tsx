// Inspired by React implementation itself: https://codepen.io/gaearon/pen/wqvxGa?editors=0010
import React from 'react';

interface IState {
  error: {} | any;
  errorInfo: {} | any;
}

interface IProps {
  children: React.Component | any;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  state: IState = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    console.log('error', error);
    if (error) {
      return (
        <div data-testid="error-boundary-wrapper">
          <h2 data-testid="error-boundary-title">Oops! something went wrong. Please try again later.</h2>
          <details data-testid="error-boundary-details" style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
          </details>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
