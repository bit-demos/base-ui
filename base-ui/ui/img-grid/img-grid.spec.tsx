import React from 'react';
import { render } from '@testing-library/react';
import { BasicImgGrid } from './img-grid.composition';

it('should render a list of products', () => {});

it('should render a list of products', () => {
  const { getByAltText } = render(<BasicImgGrid />);
  const rendered = getByAltText(
    'Pair of Nike Air trainers in pink, yellow and purple'
  );
  expect(rendered).toBeTruthy();
});
