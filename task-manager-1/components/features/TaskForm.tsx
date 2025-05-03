// components/features/TaskForm.tsx
'use client';
import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Priority } from '@/types/task.types';
import { useTaskStore } from '@/store/taskStore';

type TaskFormProps = {
  initialValues?: {
    title?: string;
    description?: string;
    priority?: Priority;
    dueDate?: string;
    category?: string;
  };
  onSubmit: (values: {
    title: string;
    description?: string;
    priority: Priority;
    dueDate?: string;
    category?: string;
  }) => void;
  onCancel?: () => void;
  isLoading?: boolean;
};

export const TaskForm = ({
  initialValues = {},
  onSubmit,
  onCancel,
  isLoading = false,
}: TaskFormProps) => {
  const [title, setTitle] = useState(initialValues.title || '');
  const [description, setDescription] = useState(initialValues.description || '');
  const [priority, setPriority] = useState<Priority>(initialValues.priority || 'medium');
  const [dueDate, setDueDate] = useState(initialValues.dueDate || '');
  const [category, setCategory] = useState(initialValues.category || '');
  const [error, setError] = useState('');
  
  // Reset form when initialValues change or the modal opens/closes
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    setError('');
    onSubmit({ 
      title: title.trim(), 
      description: description.trim() || undefined, 
      priority, 
      dueDate: dueDate || undefined, 
      category: category.trim() || undefined 
    });
  };

  // Handle input changes with proper validation
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value.trim()) {
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-3 rounded-lg">
          {error}
        </div>
      )}

      <Input
        label="Task Title"
        value={title}
        onChange={handleTitleChange}
        placeholder="What needs to be done?"
        required
        disabled={isLoading}
        autoFocus
      />

      <Input
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add details about the task..."
        disabled={isLoading}
      />

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          disabled={isLoading}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <Input
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        disabled={isLoading}
      />

      <Input
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Work, Personal, etc."
        disabled={isLoading}
      />

      <div className="flex justify-end gap-2 pt-2">
        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isLoading || !title.trim()}>
          {isLoading ? 'Saving...' : 'Save Task'}
        </Button>
      </div>
    </form>
  );
};