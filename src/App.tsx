import { useState, useMemo, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';

import { NavBar } from './components/NavBar';
import { EmptyState } from './components/EmptyState';
import { TodoItem } from './components/TodoItem';
import type { Todo } from './components/TodoItem';

import styles from './App.module.scss';

export function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState('');

  const doneTodoCount = useMemo(() => {
    return todoList.reduce((acc, todo) => {
      if (todo.done) acc += 1;

      return acc;
    }, 0);
  }, [todoList]);

  const handleCreateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoInput) return;

    const newTodoList = [
      {
        id: uuidv4(),
        description: todoInput,
        done: false,
      },
      ...todoList,
    ];

    setTodoList(newTodoList);
    setTodoInput('');
  };

  const handleToggleTodoAsDone = (id: string) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });

    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (id: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <>
      <NavBar />

      <main className={styles.container}>
        <form className={styles.todoForm} onSubmit={handleCreateTodo}>
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            required
          />

          <button type='submit' disabled={!todoInput}>
            Criar <PlusCircle size={16} weight='bold' />
          </button>
        </form>

        <section className={styles.todoContent}>
          <header>
            <p className={styles.createdTodos}>
              Tarefas Criadas <span>{todoList.length}</span>
            </p>
            <p className={styles.completedTodos}>
              Concluídas{' '}
              <span>{!todoList.length ? 0 : `${doneTodoCount} de ${todoList.length}`}</span>
            </p>
          </header>

          <div className={styles.todoListWrapper}>
            {todoList.length ? (
              todoList.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggleDone={() => handleToggleTodoAsDone(todo.id)}
                  onDeleteTodo={() => handleDeleteTodo(todo.id)}
                />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </section>
      </main>
    </>
  );
}
