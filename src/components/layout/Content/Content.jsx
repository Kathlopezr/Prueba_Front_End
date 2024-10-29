import styles from "./Content.module.scss";

const ContentCol = ({ children, gap, width = "auto", height = "auto", justifyContent = "center" }) => {
  return (
    <div 
      className={styles.contentCol} 
      style={{ gap, width, height, justifyContent }}
    >
      {children}
    </div>
  );
};

const ContentRow = ({ children, gap, justifyContent, width = "auto", height = "auto" }) => {
  return (
    <div
      className={styles.contentRow}
      style={{ gap, justifyContent, width, height }}
    >
      {children}
    </div>
  );
};

export { ContentCol, ContentRow };
