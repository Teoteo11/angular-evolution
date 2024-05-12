import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos = signal<Todo[]>([
    { id: 1, title: 'Todo 1', completed: true },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: true },
  ])

  totalCompleted = computed(() => this.todos().filter(t => t.completed).length)
  totalTodos = computed(() => this.todos().filter(t => !t.completed).length)

  addTodo(input: HTMLInputElement) {
    const newTodo: Todo = {
      id: Date.now(),
      title: input.value,
      completed: false
    }
    
    this.todos.update(todos => [...todos, newTodo])
    input.value = '';
  }

  removeTodo(todoToRemove: Todo) {
    this.todos.update(
      todos => todos.filter(todo => todo.id !== todoToRemove.id)
    )
  }

  toggleTodo(todoToToggle: Todo) {
    this.todos.update(todos => {
      return todos.map(
        t => t.id === todoToToggle.id ? {...t, completed: !t.completed} : t
      )
    })
  }
}
