import React from 'react';
import classNames from 'classnames';
import styles from './figma-embed.module.scss';

export type FigmaEmbedProps = {
  /**
   * src for figma embed. Click on Share button in Figma and click on 'Get embed code' and then copy the value of the src attribute from the iframe.
   */
  src: string;
  /**
   * add lazy loading
   */
  loading?: 'lazy' | 'eager';
  /**
   * width of iframe
   */
  width?: string;
  /**
   * height of iframe
   */
  height?: string;
  /**
   * allow figma embed to open in full screen
   */
  allowFullScreen?: boolean;
} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export function FigmaEmbed({ className, ...rest }: FigmaEmbedProps) {
  return <iframe className={classNames(styles.iframe, className)} {...rest} />;
}

FigmaEmbed.defaultProps = {
  allowFullScreen: true,
  loading: 'lazy',
  width: '100%',
  height: '600px'
};
