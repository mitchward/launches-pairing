import styles from './styles.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Dataset = ({ title, children }: Props) => {
  return (
    <div className={styles.dataset} data-testid="dataset">
      <div className={styles.title} data-testid="dataset-title">
        {title}
      </div>
      <div className={styles.content} data-testid="dataset-content">
        {children}
      </div>
    </div>
  );
};
