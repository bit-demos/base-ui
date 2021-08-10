import React from 'react';
import { render } from '@testing-library/react';
import { BasicTitle } from './title.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTitle />);
  const rendered = getByText('hello from Title');
  expect(rendered).toBeTruthy();
});
