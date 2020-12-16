import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { render } from '@testing-library/react';

describe('ErrorBoundary test suite', () => {
  it('should render with no errors', () => {
    const { findByTestId } = render(
      <ErrorBoundary>
        <h1 data-testid="no-error">no errors</h1>
      </ErrorBoundary>
    );
    expect(findByTestId('no-error')).toBeDefined();
  });

  it('should display something went wrong message with proper state', () => {
    const ProblemChild = () => {
      throw new Error('Error thrown from problem child');
    };
    const { getByTestId } = render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    const wrapper = getByTestId('error-boundary-wrapper');
    expect(wrapper).toBeDefined();
    expect(getByTestId('error-boundary-title')).toHaveTextContent('Oops! something went wrong. Please try again later.');
    expect(getByTestId('error-boundary-details')).toHaveTextContent('Error: Error thrown from problem child');
  });
});
