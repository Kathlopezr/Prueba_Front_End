import React from "react";

import styles from "./Container.module.scss";

interface IContainer {
  children: React.ReactNode;
  gap?: string;
  width?: string;
  height?: string;
  justifyContent?: string;
}

const Container = ({ children, gap, width, height, justifyContent="auto" }: IContainer) => {
  return (
    <div className={styles.container} style={{ gap, width, height, justifyContent }}>
      {children}
    </div>
  );
};

export default Container;
