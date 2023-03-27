import styles from './styles.module.css';

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const Card = ({ title, children }: Props) => {
  return (
    <article className={styles.card} data-testid="card">
      <header className={styles.title} data-testid="card-title">
        {title}
      </header>
      <main className={styles.content} data-testid="card-content">
        {children}
      </main>
    </article>
  );
};
