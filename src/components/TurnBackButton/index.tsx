import { useNavigate } from 'react-router-dom';
import Back from "../../assets/images/back-button.png";
import styles from './TurnBackButton.module.css';

export default function TurnBackButton() {
  const navigate = useNavigate();
  return (
    <button className={styles.turnBackButton} onClick={() => navigate('/')}>
      <img className={styles.icon} src={Back} alt="Back" />
    </button>
  );
}
