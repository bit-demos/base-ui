import React from 'react';
import { render } from '@testing-library/react';
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryButtonDisabled,
  PrimaryButtonDisabled,
  WhiteButton,
  WhiteButtonDisabled,
  ButtonAsLink
} from './button.composition';

it('should render a button with the class of primary and contain some text', () => {
  const { getByRole } = render(<PrimaryButton />);
  const rendered = getByRole('button');
  expect(rendered).toHaveClass('primary');
  expect(rendered).toHaveTextContent('Primary');
});

it('should render a disabled button with the class of primary and contain some text', () => {
  const { getByRole } = render(<PrimaryButtonDisabled />);
  const rendered = getByRole('button');
  expect(rendered).toHaveClass('primary');
  expect(rendered).toBeDisabled();
  expect(rendered).toHaveTextContent('Primary');
});

it('should render a button with the class of secondary and contain some text', () => {
  const { getByRole } = render(<SecondaryButton />);
  const rendered = getByRole('button');
  expect(rendered).toHaveClass('secondary');
  expect(rendered).toHaveTextContent('Secondary');
});

it('should render a disabled button with the class of secondary and contain some text', () => {
  const { getByRole } = render(<SecondaryButtonDisabled />);
  const rendered = getByRole('button');
  expect(rendered).toHaveClass('secondary');
  expect(rendered).toBeDisabled();
  expect(rendered).toHaveTextContent('Secondary');
});

it('should render a button with the class of white and contain some text', () => {
  const { getByRole } = render(<WhiteButton />);
  const rendered = getByRole('button');
  expect(rendered).toHaveClass('white');
  expect(rendered).toHaveTextContent('White');
});

it('should render a disabled button with the class of white and contain some text', () => {
  const { getByRole } = render(<WhiteButtonDisabled />);
  const rendered = getByRole('button');
  expect(rendered).toHaveClass('white');
  expect(rendered).toBeDisabled();
  expect(rendered).toHaveTextContent('White');
});

it('should render a button as a Link, checks for <a> tag, href attribute and primary class and that it contains some text', () => {
  const { getByText } = render(<ButtonAsLink />);
  const rendered = getByText('Link');
  expect(rendered).toHaveClass('primary');
  expect(rendered).toContainHTML('a');
  expect(rendered).toContainHTML('href');
  expect(rendered).toHaveTextContent('Link');
});