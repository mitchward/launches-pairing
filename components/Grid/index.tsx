import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export const Grid = ({ children }: Props) => {
  return <div className={styles.grid}>{children}</div>;
};
