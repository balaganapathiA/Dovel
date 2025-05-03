// components/features/PriorityBadge.tsx
import { Priority } from '@/types/task.types';

type PriorityBadgeProps = {
  priority: Priority;
};

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const priorityClasses = {
    high: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
    low: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full ${priorityClasses[priority]}`}>
      {priority}
    </span>
  );
};