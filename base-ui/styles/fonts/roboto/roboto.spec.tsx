import React from 'react';
import { render } from '@testing-library/react';
import { RobotoFont } from './roboto.composition';

it('should render with the Roboto font', () => {
  const { getByText } = render(<RobotoFont />);
  const rendered = getByText('Text in Roboto Font');
  expect(rendered).toBeTruthy();
});
