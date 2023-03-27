import styles from './styles.module.css';
import classNames from 'classnames';

type Props = {
  success: boolean;
};

export const Status = ({ success }: Props) => {
  return (
    <div className={classNames(styles.status, { [styles.success]: success })}>{success ? 'Success' : 'Failure'}</div>
  );
};
