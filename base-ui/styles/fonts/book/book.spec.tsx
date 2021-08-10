import React from 'react';
import { render } from '@testing-library/react';
import {
  Normal,
  Bold,
  Bolder,
  Italic,
  BoldAndItalic,
  BolderAndItalic
} from './book.composition';

it('renders the Normal font', () => {
  const { getByTestId } = render(<Normal />);
  const normal = getByTestId('normal');
  expect(normal).toBeTruthy();
});

it('renders the Bold font', () => {
  const { getByTestId } = render(<Bold />);
  const bold = getByTestId('bold');
  expect(bold).toBeTruthy();
});

it('renders the Bolder font', () => {
  const { getByTestId } = render(<Bolder />);
  const bolder = getByTestId('bolder');
  expect(bolder).toBeTruthy();
});

it('renders the Italic font', () => {
  const { getByTestId } = render(<Italic />);
  const italic = getByTestId('italic');
  expect(italic).toBeTruthy();
});

it('renders the Bold And Italic font', () => {
  const { getByTestId } = render(<BoldAndItalic />);
  const boldAndItalic = getByTestId('bold-and-italic');
  expect(boldAndItalic).toBeTruthy();
});

it('renders the Bolder And Italic font', () => {
  const { getByTestId } = render(<BolderAndItalic />);
  const bolderAndItalic = getByTestId('bolder-and-italic');
  expect(bolderAndItalic).toBeTruthy();
});
