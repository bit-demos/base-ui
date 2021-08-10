import React from 'react';
import { render } from '@testing-library/react';
import { BasicLayout } from './layout.composition';

it('should render with content inside', () => {
  const { getByText } = render(<BasicLayout />);
  const rendered = getByText('Header');
  expect(rendered).toBeTruthy();
});
