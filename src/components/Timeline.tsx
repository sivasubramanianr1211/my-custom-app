import React from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="flex flex-col">
      {events.map((event, index) => (
        <div key={index} className="flex relative">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            {index !== events.length - 1 && (
              <div className="flex-1 bg-gray-300 w-[20%] mx-auto"></div>
            )}
          </div>
          <div className="ml-4 my-[10px]">
            <div className="text-lg font-semibold">{event.title}</div>
            <div className="text-gray-500">{event.date}</div>
            <div className="text-gray-600">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
