'use client';
import React from 'react';

/** Single timeline event */
export interface TimelineItem {
  name: string;
  description: string;
  date: string;
  dateTime: string;
}

/** Props for Timeline component */
interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items = [] }: TimelineProps) {
  return (
    <div className="py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl grid grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="relative flex items-center text-sm leading-6 font-semibold text-truistpurple-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 h-1 w-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 top-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg leading-8 font-semibold tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}