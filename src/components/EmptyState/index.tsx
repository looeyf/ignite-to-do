import styles from './styles.module.scss';

import Clipboard from '../../assets/clipboard.svg';

export function EmptyState() {
  return (
    <div className={styles.todoContentEmptyState}>
      <img src={Clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie Tarefas e organize seus itens a fazer</p>
    </div>
  );
}
