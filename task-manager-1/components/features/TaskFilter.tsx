// components/features/TaskFilter.tsx
'use client';
import { Button } from '../ui/Button';
import { FilterType, Priority } from '@/types/task.types';

type TaskFilterProps = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  priorityFilter: Priority | 'all';
  setPriorityFilter: (priority: Priority | 'all') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const TaskFilter = ({
  filter,
  setFilter,
  priorityFilter,
  setPriorityFilter,
  searchQuery,
  setSearchQuery,
}: TaskFilterProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-4">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
      </div>

      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {(['all', 'active', 'completed'] as FilterType[]).map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`flex-1 py-3 px-4 text-sm font-medium capitalize text-center transition-colors ${
              filter === filterType
                ? 'text-primary border-b-2 border-primary font-semibold'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {filterType}
          </button>
        ))}
      </div>

      <div className="p-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button
            variant={priorityFilter === 'all' ? 'primary' : 'secondary'}
            onClick={() => setPriorityFilter('all')}
            className="text-xs px-3 py-1 whitespace-nowrap"
          >
            All Priorities
          </Button>
          <Button
            variant={priorityFilter === 'high' ? 'primary' : 'secondary'}
            onClick={() => setPriorityFilter('high')}
            className="text-xs px-3 py-1 whitespace-nowrap"
          >
            High
          </Button>
          <Button
            variant={priorityFilter === 'medium' ? 'primary' : 'secondary'}
            onClick={() => setPriorityFilter('medium')}
            className="text-xs px-3 py-1 whitespace-nowrap"
          >
            Medium
          </Button>
          <Button
            variant={priorityFilter === 'low' ? 'primary' : 'secondary'}
            onClick={() => setPriorityFilter('low')}
            className="text-xs px-3 py-1 whitespace-nowrap"
          >
            Low
          </Button>
        </div>
      </div>
    </div>
  );
};