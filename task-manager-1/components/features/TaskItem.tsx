// components/features/TaskItem.tsx
'use client';
import { useState } from 'react';
import { Priority, Task } from '@/types/task.types';
import { useTaskStore } from '@/store/taskStore';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { TaskForm } from './TaskForm';
import { format } from 'date-fns';
import { PriorityBadge } from './PriorityBadge';

type TaskItemProps = {
  task: Task;
};

export const TaskItem = ({ task }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { toggleTask, deleteTask, isLoading } = useTaskStore();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <>
      <div
        className={`group relative p-5 rounded-2xl transition-all duration-200 border ${
          task.completed
            ? 'bg-gray-100 dark:bg-gray-700/40 border-gray-200 dark:border-gray-600'
            : 'bg-white dark:bg-gray-800 shadow-sm hover:shadow-md border-transparent'
        } hover:-translate-y-0.5`}
      >
        <div className="flex items-start gap-4">
          {/* Checkbox */}
          <button
            onClick={() => toggleTask(task.id)}
            className={`flex-shrink-0 mt-1 h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              task.completed
                ? 'bg-primary border-primary text-white'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary'
            }`}
            disabled={isLoading}
            aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {task.completed && (
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Task Content */}
          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <PriorityBadge priority={task.priority} />
              {task.category && (
                <span className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  {task.category}
                </span>
              )}
            </div>
            <h3
              className={`font-medium text-base break-words ${
                task.completed
                  ? 'line-through text-gray-500 dark:text-gray-400'
                  : 'text-gray-800 dark:text-gray-100'
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p
                className={`text-sm break-words mt-1 ${
                  task.completed
                    ? 'line-through text-gray-400 dark:text-gray-500'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {task.description}
              </p>
            )}
            {task.dueDate && (
              <p
                className={`text-xs mt-2 ${
                  new Date(task.dueDate) < new Date() && !task.completed
                    ? 'text-red-500 dark:text-red-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Due: {format(new Date(task.dueDate), 'MMM dd, yyyy')}
              </p>
            )}
          </div>

          {/* Edit/Delete Buttons */}
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              disabled={isLoading}
              aria-label="Edit task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={handleDelete}
              className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              disabled={isLoading}
              aria-label="Delete task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal is now outside the main component div */}
      <Modal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        title="Edit Task"
      >
        <TaskForm
          initialValues={{
            title: task.title,
            description: task.description,
            priority: task.priority,
            dueDate: task.dueDate,
            category: task.category,
          }}
          onSubmit={(values) => {
            useTaskStore.getState().editTask(task.id, values);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
          isLoading={isLoading}
        />
      </Modal>
    </>
  );
};