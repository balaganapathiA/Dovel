// components/features/TaskInput.tsx
'use client';
import { useState } from 'react';
import { useTaskStore } from '@/store/taskStore';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const TaskInput = () => {
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
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        id="task-title"
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        required
        disabled={isLoading}
      />

      <Input
        id="task-description"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add details about the task..."
        disabled={isLoading}
      />

      <Button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3"
        disabled={isLoading || !title.trim()}
      >
        {isLoading ? (
          <>
            <LoadingSpinner small={true} />
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
      </Button>
    </form>
  );
};
