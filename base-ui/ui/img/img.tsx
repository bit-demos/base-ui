import React from 'react';
import classNames from 'classnames';
// import styles from './img.module.scss';

export type ImgProps = {
  /**
   * image src
   */
  src: string;
  /**
   * image alternative text
   */
  alt: string;
  /**
   * lazy load image
   */
  loading?: 'lazy' | 'eager';
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Img({ alt, src, loading, className }: ImgProps) {
  return (
    <img
      className={classNames(className)}
      alt={alt}
      src={src}
      loading={loading}
    />
  );
}
