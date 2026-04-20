import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-4">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
    </div>
  );
};

export default SkeletonLoader;
