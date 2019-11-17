import React from 'react';
import styles from './index.css';
import {Skeleton} from 'antd';

export default function() {
  return (
    <div className={styles.normal}>
        <h3>申请表单</h3>
        <Skeleton />
        <Skeleton />
        <Skeleton />
    </div>
  );
}
