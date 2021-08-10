import React from 'react';
import classNames from 'classnames';
import styles from './figma-embed.module.scss';

export type FigmaEmbedProps = {
  /**
   * src for figma embed. Click on Share button in Figma and click on 'Get embed code' and then copy the value of the src attribute from the iframe.
   */
  iframeSrc: string;
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
} & React.HTMLAttributes<HTMLIFrameElement>;

export function FigmaEmbed({
  iframeSrc,
  loading = 'lazy',
  width = '100%',
  height = '600',
  className
}: FigmaEmbedProps) {
  return (
    <iframe
      className={classNames(styles.iframe, className)}
      width={width}
      height={height}
      src={iframeSrc}
      loading={loading}></iframe>
  );
}
