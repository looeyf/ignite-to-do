import { PlusCircle } from 'phosphor-react';
import { NavBar } from './components/NavBar';

import styles from './App.module.scss';

export function App() {
  return (
    <>
      <NavBar />

      <main className={styles.container}>
        <form className={styles.todoForm}>
          <input type='text' placeholder='Adicione uma nova tarefa' />

          <button type='submit'>
            Criar <PlusCircle size={16} weight='bold' />
          </button>
        </form>
      </main>
    </>
  );
}
