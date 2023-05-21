import styles from './Spinner.module.css';

const Spinner = ({ loading }: { loading: boolean }) =>
  loading ? (
    <div className={styles.spinnerContainer} data-testid="spinner-container">
      <div className="spinner"  data-testid="spinner" />
    </div>
  ) : null;

export default Spinner;
