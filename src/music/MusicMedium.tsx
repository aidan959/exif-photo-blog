'use client';

import { Music } from './index';
import { clsx } from 'clsx/lite';
import Link from 'next/link';
import { generateMusicUrl } from './index';
import { ReactNode } from 'react';
import ImageMusicCover from './ImageMusicCover';

export default function MusicMedium({
  music,
  selected,
  priority,
  className,
  onVisible,
  children,
}: {
  music: Music
  selected?: boolean
  priority?: boolean
  className?: string
  onVisible?: () => void
  children?: ReactNode
}) {
  return (
    <Link
      href={generateMusicUrl(music)}
      className={clsx(
        'group relative overflow-hidden rounded-md',
        'transition-transform duration-300 hover:scale-[1.02]',
        selected && 'ring-2 ring-blue-500',
        className,
      )}
      onMouseEnter={onVisible}
    >
      <div className="relative aspect-square">
        <ImageMusicCover
          music={music}
          priority={priority}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay with music info */}
        <div className={clsx(
          'absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
        )}>
          <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
            <h3 className="font-semibold text-sm truncate">
              {music.title}
            </h3>
            {music.artist && (
              <p className="text-xs text-white/80 truncate">
                {music.artist}
              </p>
            )}
            {music.durationFormatted && (
              <p className="text-xs text-white/60 mt-1">
                {music.durationFormatted}
              </p>
            )}
          </div>
        </div>

        {/* Play button overlay */}
        <div className={clsx(
          'absolute inset-0 flex items-center justify-center',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
        )}>
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-5 h-5 text-black ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      
      {children}
    </Link>
  );
}
