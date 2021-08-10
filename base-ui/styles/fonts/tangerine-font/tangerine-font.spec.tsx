import React from 'react';
import { render } from '@testing-library/react';
import { BasicTangerineFont } from './tangerine-font.composition';

it('should render with the Tangerine font', () => {
  const { getByText } = render(<BasicTangerineFont />);
  const rendered = getByText('Text in Tangerine Font');
  expect(rendered).toBeTruthy();
});
