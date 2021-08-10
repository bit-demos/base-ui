import React from 'react';
import { render } from '@testing-library/react';
import { BasicImg } from './img.composition';

it('should contain an alt tag', () => {
  const { getByAltText } = render(<BasicImg />);
  const rendered = getByAltText('Nike Air');
  expect(rendered).toBeTruthy();
});
