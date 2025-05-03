// hooks/useTaskFilters.ts
import { useMemo, useState } from 'react';
import { FilterType, Priority, Task } from '@/types/task.types';

export const useTaskFilters = (tasks: Task[]) => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');

  const filteredTasks = useMemo(() => {
    let result = [...tasks];
    
    // Apply status filter
    if (filter === 'completed') {
      result = result.filter((task) => task.completed);
    } else if (filter === 'active') {
      result = result.filter((task) => !task.completed);
    }

    // Apply priority filter
    if (priorityFilter !== 'all') {
      result = result.filter((task) => task.priority === priorityFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (task) =>
          task.title.toLowerCase().includes(query) ||
          (task.description && task.description.toLowerCase().includes(query)) ||
          (task.category && task.category.toLowerCase().includes(query))
      );
    }

    return result;
  }, [tasks, filter, priorityFilter, searchQuery]);

  return {
    filteredTasks,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    priorityFilter,
    setPriorityFilter,
  };
};
