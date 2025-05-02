'use client'
import { useState } from 'react';
import { useTaskStore } from '@/store/taskStore';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function TaskInput() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask, isLoading } = useTaskStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Title Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="task-title" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Task Title
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          required
          disabled={isLoading}
        />
      </div>

      {/* Description Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="task-description" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Description <span className="text-xs text-gray-400">(optional)</span>
        </label>
        <input
          id="task-description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add details about the task..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          disabled={isLoading}
        />
      </div>

      {/* Submit Button */}
      {/* // Add these to your existing button className: */}
<button
  type="submit"
  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold bg-primary text-black hover:bg-primary/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform hover:-translate-y-0.5 active:translate-y-0"
  disabled={isLoading || !title.trim()}
>
        {isLoading ? (
          <>
            <LoadingSpinner small />
            <span>Deleting Task...</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span>Add Task</span>
          </>
        )}
      </button>
    </form>
  );
}
