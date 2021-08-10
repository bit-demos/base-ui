import React from 'react';
import classNames from 'classnames';
import {
  Link as BaseLink,
  LinkProps as BaseLinkProps
} from '@teambit/ui.react-router.link';
import { button } from '@learn-bit-react/base-ui.styles.button';

import styles from './link.module.scss';

export type LinkProps = {
  /**
   * applies the button class to the component
   */
  buttonClass?: boolean;
  /**
   * applies the variation of button if buttonClass is applied
   */
  variation?: 'primary' | 'secondary';
} & BaseLinkProps;

export function Link({
  children,
  buttonClass,
  className,
  variation,
  ...rest
}: LinkProps) {
  return (
    <BaseLink
      className={classNames(className, styles.link, buttonClass ? button : '')}
      data-variation={variation}
      {...rest}>
      {children}
    </BaseLink>
  );
}
