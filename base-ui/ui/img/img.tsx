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
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Img({ alt, src, className }: ImgProps) {
  return <img className={classNames(className)} alt={alt} src={src} />;
}
