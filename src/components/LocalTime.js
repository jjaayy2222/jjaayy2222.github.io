'use client';

import { useState, useEffect } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    // Set initial time
    setTime(new Date());

    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) {
    return null; // Avoid hydration mismatch by rendering nothing initially
  }

  // Format Date: "Dec 1, 2025"
  const dateString = time.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Format Time: "5:44:02 PM"
  const timeString = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  // Get Timezone/Location guess (Browser default)
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // Format timezone to look nicer if possible, or just use a static text if preferred.
  // The reference said "Local time in Kediri, Indonesia". 
  // For "User's standard", we can say "Local time in [TimeZone]" or just "Your Local Time".
  // Let's try to get a friendly city name if possible, but standard JS API gives "Asia/Seoul".
  const locationString = `Local time in ${timeZone.replace('_', ' ')}`;

  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex flex-wrap items-baseline gap-3 mb-2">
        <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {dateString}
        </span>
        <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          -
        </span>
        <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {timeString}
        </span>
      </div>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        {locationString}
      </p>
    </div>
  );
}
