import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './BaseLayout.module.css'

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  
  return (
    <div
      className={styles.BaseLayoutRoot}
      style={{
        flex: 1,
        height: '100%',
      }}
    >
      {children || <Outlet />}
    </div>
  );
};


export default BaseLayout;
