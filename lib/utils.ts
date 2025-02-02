/**
 * Utility function for dynamically merging Tailwind CSS class names.
 * 
 * This function combines `clsx` (for conditional class names) with `tailwind-merge`
 * (to intelligently merge conflicting Tailwind classes). It helps simplify writing
 * dynamic class names in React components.
 *
 * Example usage:
 * ```tsx
 * <button className={cn("px-4 py-2", isActive && "bg-blue-500", isDisabled && "opacity-50")} />
 * ```
 *
 * - `clsx` ensures falsey values (e.g., `false`, `null`, `undefined`) are ignored.
 * - `twMerge` prevents conflicting Tailwind classes (e.g., `bg-red-500` overriding `bg-blue-500`).
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names dynamically while resolving Tailwind CSS conflicts.
 *
 * @param inputs - List of class values to merge.
 * @returns A string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}