// pages/index.tsx
'use client';
import { useState } from 'react';
import { useTaskStore } from '@/store/taskStore';
import { useTaskFilters } from '@/hooks/useTaskFilters';
import { TaskInput } from '@/components/features/TaskInput';
import { TaskList } from '@/components/features/TaskList';
import { TaskFilter } from '@/components/features/TaskFilter';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { TaskForm } from '@/components/features/TaskForm';

export default function Home() {
  const { tasks, isLoading, error, clearError, addTask } = useTaskStore();
  const {
    filteredTasks,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    priorityFilter,
    setPriorityFilter,
  } = useTaskFilters(tasks);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Calculate task statistics
  const taskStats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    active: tasks.filter((t) => !t.completed).length,
  };

  const handleAdvancedTaskSubmit = (values) => {
    addTask(
      values.title,
      values.description,
      values.priority,
      values.dueDate,
      values.category
    );
    setIsAddModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary dark:text-white mb-2">
            Task Manager
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {taskStats.total} tasks ({taskStats.completed} completed, {taskStats.active} active)
          </p>
        </div>

        {/* Task Input */}
        <div className="sticky top-6 z-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6 transition-all duration-300 hover:shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Add New Task</h2>
            <Button
              onClick={() => setIsAddModalOpen(true)}
              className="text-xs px-3 py-1 bg-blue-600 text-white hover:bg-blue-700"
            >
              Advanced
            </Button>
          </div>
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

        {/* Task Filter */}
        <TaskFilter
          filter={filter}
          setFilter={setFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Task List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <TaskList tasks={filteredTasks} isLoading={isLoading} filter={filter} />
        </div>
      </div>

      {/* Add Task Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Task"
      >
        <TaskForm
          onSubmit={handleAdvancedTaskSubmit}
          onCancel={() => setIsAddModalOpen(false)}
          isLoading={isLoading}
        />
      </Modal>
    </main>
  );
}