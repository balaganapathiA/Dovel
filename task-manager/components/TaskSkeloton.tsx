export default function TaskSkeleton() {
    return (
      <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-sm animate-pulse">
        <div className="flex items-start gap-4">
          <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex-grow space-y-2">
            <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    );
  }