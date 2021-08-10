import React from 'react';
import classNames from 'classnames';
import { button } from '@learn-bit-react/base-ui.styles.button';

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  buttonText?: string;
  /**
   * sets the primary color of the button
   */
  variation?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  buttonText,
  variation = 'primary',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(button, className)}
      data-variation={variation}
      {...rest}>
      {buttonText}
    </button>
  );
}
