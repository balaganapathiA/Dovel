import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
};

type TaskStore = {
  tasks: Task[];
  addTask: (title: string, description?: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, title: string, description?: string) => void;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      isLoading: false,
      error: null,
      clearError: () => set({ error: null }),
      addTask: (title, description) => {
        try {
          set({ isLoading: true, error: null });
          const newTask = {
            id: Date.now().toString(),
            title,
            description,
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
      editTask: (id, title, description) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, title, description } : task
          ),
          isLoading: true,
        }));
        setTimeout(() => set({ isLoading: false }), 500);
      },
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);