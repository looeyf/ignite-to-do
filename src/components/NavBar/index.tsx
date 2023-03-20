import TodoLogo from '../../assets/todo-logo.svg';

import styles from './styles.module.scss';

export function NavBar() {
  return (
    <header className={styles.navbar}>
      <img src={TodoLogo} alt='Ignite ToDo logo' />
    </header>
  );
}
