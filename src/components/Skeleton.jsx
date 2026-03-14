import React from "react";

/**
 * Skeleton loading placeholder.
 * Usage: <Skeleton className="h-52 w-full rounded-xl" />
 */
const Skeleton = ({ className = "", circle = false }) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-gray-700 ${
      circle ? "rounded-full" : "rounded-lg"
    } ${className}`}
    aria-hidden="true"
  />
);

/** Pre-built card skeleton for product/blog cards */
export const CardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
    <Skeleton className="h-52 w-full rounded-none" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-14" />
      </div>
    </div>
  </div>
);

/** Blog post list skeleton */
export const BlogCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
    <Skeleton className="h-52 w-full rounded-none" />
    <div className="p-6 space-y-3">
      <div className="flex gap-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-4/5" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Skeleton circle className="h-7 w-7" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  </div>
);

export default Skeleton;
