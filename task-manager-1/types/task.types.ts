// types/task.types.ts
export type Priority = 'low' | 'medium' | 'high';
export type FilterType = 'all' | 'completed' | 'active';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  dueDate?: string;
  category?: string;
}

export interface TaskStore {
  tasks: Task[];
  addTask: (title: string, description?: string, priority?: Priority, dueDate?: string, category?: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, updates: Partial<Omit<Task, 'id'>>) => void;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
  searchTasks: (query: string) => Task[];
}