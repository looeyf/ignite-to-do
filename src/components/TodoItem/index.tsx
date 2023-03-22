import { Trash } from 'phosphor-react';

import styles from './styles.module.scss';

export interface Todo {
  id: string;
  done: boolean;
  description: string;
}

interface Props {
  todo: Todo;
  onDeleteTodo: () => void;
  onToggleDone: () => void;
}

export function TodoItem({ todo, onDeleteTodo, onToggleDone }: Props) {
  return (
    <div className={styles.todoItem}>
      <label htmlFor={todo.id} className={styles.customCheckbox}>
        <input
          type='checkbox'
          checked={todo.done}
          onChange={onToggleDone}
          name={todo.id}
          id={todo.id}
        />
      </label>

      <p className={styles.todoText}>{todo.description}</p>

      <button className={styles.removeTodo} title='Excluir tarefa' onClick={onDeleteTodo}>
        <Trash size={22} />
      </button>
    </div>
  );
}
