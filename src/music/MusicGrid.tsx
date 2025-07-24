'use client';

import { Music } from './index';
import MusicMedium from './MusicMedium';
import { clsx } from 'clsx/lite';
import AnimateItems from '@/components/AnimateItems';
import { useAppState } from '@/app/AppState';
import { ReactNode } from 'react';
import { GRID_GAP_CLASSNAME } from '@/components';

export default function MusicGrid({
  music,
  selectedMusic,
  prioritizeInitialItems,
  animate = true,
  canStart,
  animateOnFirstLoadOnly,
  staggerOnFirstLoadOnly = true,
  additionalTile,
  small,
  onLastMusicVisible,
  onAnimationComplete,
}: {
  music: Music[]
  selectedMusic?: Music
  prioritizeInitialItems?: boolean
  animate?: boolean
  canStart?: boolean
  animateOnFirstLoadOnly?: boolean
  staggerOnFirstLoadOnly?: boolean
  additionalTile?: ReactNode
  small?: boolean
  onLastMusicVisible?: () => void
  onAnimationComplete?: () => void
}) {
  const { isGridHighDensity } = useAppState();

  return (
    <AnimateItems
      className={clsx(
        'grid',
        GRID_GAP_CLASSNAME,
        small
          ? 'grid-cols-3 xs:grid-cols-6'
          : isGridHighDensity
            ? 'grid-cols-3 xs:grid-cols-5 lg:grid-cols-7'
            : 'grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5',
        'items-center',
      )}
      type={animate === false ? 'none' : undefined}
      canStart={canStart}
      duration={0.7}
      staggerDelay={0.04}
      distanceOffset={40}
      animateOnFirstLoadOnly={animateOnFirstLoadOnly}
      staggerOnFirstLoadOnly={staggerOnFirstLoadOnly}
      onAnimationComplete={onAnimationComplete}
      items={music.map((track, index) =>
        <div
          key={track.id}
          className={clsx(
            'flex relative overflow-hidden',
            'group',
          )}
          style={{
            aspectRatio: 1, // Square for music covers
          }}
        >
          <MusicMedium
            className="flex w-full h-full"
            music={track}
            selected={track.id === selectedMusic?.id}
            priority={prioritizeInitialItems ? index < 6 : undefined}
            onVisible={index === music.length - 1
              ? onLastMusicVisible
              : undefined}
          />
        </div>
      )}
    />
  );
}
