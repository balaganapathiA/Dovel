// store/taskStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Task, TaskStore } from '@/types/task.types';

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      isLoading: false,
      error: null,
      clearError: () => set({ error: null }),
      addTask: (title, description, priority = 'medium', dueDate, category) => {
        try {
          set({ isLoading: true, error: null });
          const newTask = {
            id: Date.now().toString(),
            title,
            description,
            priority, 
            dueDate,
            category,
            completed: false,
          };
          set((state) => ({
            tasks: [...state.tasks, newTask],
            isLoading: false,
          }));
        } catch (err) {
          set({ error: "Failed to add task", isLoading: false });
        }
      },
      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
          isLoading: true,
        }));
        setTimeout(() => set({ isLoading: false }), 300);
      },
      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
          isLoading: true,
        }));
        setTimeout(() => set({ isLoading: false }), 300);
      },
      editTask: (id, updates) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updates } : task
          ),
          isLoading: true,
        }));
        setTimeout(() => set({ isLoading: false }), 500);
      },
      searchTasks: (query) => {
        const searchTerm = query.toLowerCase();
        return get().tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchTerm) ||
            (task.description && task.description.toLowerCase().includes(searchTerm)) ||
            (task.category && task.category.toLowerCase().includes(searchTerm))
        );
      },
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);