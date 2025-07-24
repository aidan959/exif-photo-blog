'use client';

import { Music } from './index';
import { clsx } from 'clsx/lite';

export default function ImageMusicCover({
  music,
  priority = false,
  className,
}: {
  music: Music
  priority?: boolean
  className?: string
}) {
  // For now, we'll create a placeholder cover with gradient and music info
  return (
    <div
      className={clsx(
        'w-full h-full flex items-center justify-center',
        'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600',
        'text-white transition-transform duration-300',
        className,
      )}
    >
      <div className="text-center p-4">
        <div className="w-12 h-12 mx-auto mb-3 opacity-80">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <h3 className="font-semibold text-sm leading-tight truncate">
          {music.title}
        </h3>
        {music.artist && (
          <p className="text-xs opacity-90 mt-1 truncate">
            {music.artist}
          </p>
        )}
      </div>
    </div>
  );
}
