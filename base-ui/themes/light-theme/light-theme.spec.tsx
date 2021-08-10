import React from 'react';
import { render } from '@testing-library/react';
import { BasicLightTheme } from './light-theme.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLightTheme/>);
  const rendered = getByText('primary');
  expect(rendered).toBeTruthy();
});

