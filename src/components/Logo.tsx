import { CloudIcon } from '@heroicons/react/24/solid';

export function Logo() {
  return (
    <span className="flex items-center text-xl font-bold">
      <CloudIcon className="h-6 w-6 inline-block mr-2" aria-hidden="true" />
      Truist Cloud
    </span>
  );
}