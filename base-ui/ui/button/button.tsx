import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  /**
   * content of the button
   */
  children: string;
  /**
   * sets the button as primary
   */
  primary?: boolean;
  /**
   * sets the button as secondary
   */
  secondary?: boolean;
  /**
   * sets the button as white
   */
  white?: boolean;
  /**
   * uses any element instead of button such as an <a> tag for links
   */
  as?: E;
};

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let buttonClassName = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) buttonClassName += key + ' ';
  }
  return buttonClassName.trim();
};

export function Button<E extends React.ElementType = typeof defaultElement>({
  children,
  primary = false,
  secondary = false,
  white = false,
  as,
  className,
  ...rest
}: ButtonProps<E>) {
  const buttonClassName = createClassNames({ primary, secondary, white });
  const TagName = as || defaultElement;

  return (
    <TagName
      {...rest}
      className={classNames(styles.button, styles[buttonClassName], className)}
    >
      {children}
    </TagName>
  );
}