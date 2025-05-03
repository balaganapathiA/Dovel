// components/features/TaskList.tsx
'use client';
import { Task } from '@/types/task.types';
import { TaskItem } from './TaskItem';
import { TaskSkeleton } from './TaskSkeloton';

type TaskListProps = {
  tasks: Task[];
  isLoading: boolean;
  filter: 'all' | 'completed' | 'active';
};

export const TaskList = ({ tasks, isLoading, filter }: TaskListProps) => {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <TaskSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="text-6xl mb-4 opacity-60">📝</div>
        <p className="text-gray-600 dark:text-gray-300 font-medium">
          {filter === 'all'
            ? 'No tasks yet'
            : filter === 'active'
            ? 'All tasks completed!'
            : 'No completed tasks'}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
          {filter === 'all'
            ? 'Get started by adding your first task above.'
            : filter === 'active'
            ? 'Great job! You can relax now.'
            : 'Complete some tasks to see them here.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};