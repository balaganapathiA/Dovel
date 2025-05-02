'use client'
import { useMemo, useState } from 'react';
import { useTaskStore } from '@/store/taskStore';
import TaskInput from '@/components/TaskInput';
import TaskItem from '@/components/TaskItem';
import LoadingSpinner from '@/components/LoadingSpinner';
import TaskSkeleton from '@/components/TaskSkeloton';

type FilterType = 'all' | 'completed' | 'active';

export default function Home() {
  const { tasks, isLoading, error, clearError } = useTaskStore();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'active') return !task.completed;
      return true;
    });
  }, [tasks, filter]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md mx-auto space-y-6">
    {/* Header */}
    <div className="text-center mb-8 animate-fade-in">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary dark:text-white mb-2">
        Task Manager
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Organize your work efficiently
      </p>
    </div>

    {/* Sticky Task Input */}
    <div className="sticky top-6 z-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6 transition-all duration-300 hover:shadow-xl">
      <TaskInput />
    </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-4 rounded-lg mb-4 flex justify-between items-center shadow">
            <span className="text-sm font-medium">{error}</span>
            <button 
              onClick={clearError}
              className="text-xl font-bold hover:text-red-900 dark:hover:text-red-100 transition"
            >
              ✕
            </button>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-4">
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

          {/* Task List */}
          <div className="p-4">
          {isLoading ? (
  <div className="space-y-3">
    {[...Array(3)].map((_, i) => (
      <TaskSkeleton key={i} />
    ))}
  </div>
            ) : filteredTasks.length === 0 ? (
              <div className="text-center py-8 animate-fade-in">
  <div className="text-6xl mb-4 opacity-60">📝</div>
  <p className="text-gray-600 dark:text-gray-300 font-medium">
    {filter === 'all' ? 'No tasks yet' : 
     filter === 'active' ? 'All tasks completed!' : 'No completed tasks'}
  </p>
  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
    {filter === 'all' ? 'Get started by adding your first task above.' : 
     filter === 'active' ? 'Great job! You can relax now.' : 'Complete some tasks to see them here.'}
  </p>
</div>
            ) : (
              <div className="space-y-3">
                {filteredTasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
