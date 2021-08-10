import React from 'react';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import classNames from 'classnames';
import { Product } from '@learn-bit-react/ecommerce.entity.product';
import styles from './img-grid.module.scss';

export type ImgGridProps = {
  /**
   * a list of products
   */
  list: Product[];
} & React.HTMLAttributes<HTMLDivElement>;

export function ImgGrid({ list, className }: ImgGridProps) {
  return (
    <>
      {list.length > 0 ? (
        <div className={classNames(styles.grid, className)}>
          {list.map((product) => (
            <Img
              key={product.title}
              {...product}
              className={classNames(styles.img, className)}
            />
          ))}
        </div>
      ) : (
        'No images to display'
      )}
    </>
  );
}
