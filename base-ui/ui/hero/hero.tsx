import React from 'react';
import classNames from 'classnames';
import styles from './hero.module.scss';

export type HeroProps = {
  /**
   * background to add a background image or color using CSS
   */
  background?: string;
} & React.HTMLAttributes<HTMLElement>;

export function Hero({ className, children, background = 'none' }: HeroProps) {
  return (
    <div
      className={classNames(styles.hero, className)}
      style={{ background: background }}>
      {children}
    </div>
  );
}