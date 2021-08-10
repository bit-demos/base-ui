import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryButton } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<PrimaryButton />);
  const rendered = getByText('hello from Primary Button');
  expect(rendered).toBeTruthy();
});
