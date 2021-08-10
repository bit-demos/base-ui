import React from 'react';
import classNames from 'classnames';
import styles from './title.module.scss';

export type TitleProps = {
  /**
   * a title to be rendered in the component.
   */
  title: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Title({ title, className }: TitleProps) {
  return <h5 className={classNames(styles.title, className)}>{title}</h5>;
}
