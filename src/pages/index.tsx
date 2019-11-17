import React from 'react';
import styles from './index.css';
import {Skeleton, Carousel} from 'antd';
export default function() {
    return (
        <div className={styles.normal}>
            <Carousel autoplay={true}>
                <div className={styles['slide1']}>
                    <h3>1</h3>
                </div>
                <div className={styles['slide2']}>
                    <h3>2</h3>
                </div>
                <div className={styles['slide3']}>
                    <h3>3</h3>
                </div>
                <div className={styles['slide4']}>
                    <h3>4</h3>
                </div>
            </Carousel>
            <h3>文章列表</h3>
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
  );
}
