import { formatDate } from '@/utility/date';
import { capitalize, parameterize } from '@/utility/string';
import camelcaseKeys from 'camelcase-keys';
import type { Metadata } from 'next';

// INFINITE SCROLL: MUSIC GRID
export const INFINITE_SCROLL_MUSIC_INITIAL = 12;
export const INFINITE_SCROLL_MUSIC_MULTIPLE = 24;

export const DEFAULT_MUSIC_ASPECT_RATIO = 1; // Square for album art

export const ACCEPTED_MUSIC_FILE_TYPES = [
  'audio/mpeg',
  'audio/wav',
  'audio/mp3',
  'audio/flac',
  'audio/m4a',
];

// Database types
export interface MusicDb {
  id: string
  title: string
  artist?: string
  album?: string
  genre?: string
  duration?: number // in seconds
  bpm?: number
  key?: string
  releaseYear?: number
  description?: string
  url: string
  blurData?: string
  tags: string[]
  hidden?: boolean
  createdAt: Date
  updatedAt: Date
  takenAt?: Date // When the track was recorded/produced
  sortPriority?: number
}

export interface MusicDbInsert extends Omit<MusicDb, 'id' | 'createdAt' | 'updatedAt'> {}

// Parsed response
export interface Music extends MusicDb {
  durationFormatted?: string
  takenAtFormatted?: string
  releaseYearFormatted?: string
}

export const parseMusicFromDb = (musicDbRaw: MusicDb): Music => {
  const musicDb = camelcaseKeys(
    musicDbRaw as unknown as Record<string, unknown>,
  ) as unknown as MusicDb;
  
  return {
    ...musicDb,
    tags: musicDb.tags ?? [],
    durationFormatted: musicDb.duration 
      ? formatDuration(musicDb.duration)
      : undefined,
    takenAtFormatted: musicDb.takenAt
      ? formatDate({ date: musicDb.takenAt })
      : undefined,
    releaseYearFormatted: musicDb.releaseYear?.toString(),
  } as Music;
};

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export const generateMusicId = () => crypto.randomUUID();

export const generateMusicUrl = (music: Music) => `/music/${music.id}`;

export const generateMusicShareUrl = (music: Music) => 
  `/share/music/${music.id}`;

export const generateMusicTitle = (music: Music) => {
  const parts = [music.title];
  if (music.artist) parts.push(`by ${music.artist}`);
  if (music.album) parts.push(`from ${music.album}`);
  return parts.join(' ');
};

export const generateMusicMetadata = (music: Music): Metadata => ({
  title: generateMusicTitle(music),
  description: music.description || `${music.title} - Music production`,
});

export const getMusicCacheKey = (music: Music) => 
  `music-${music.id}-${music.updatedAt?.getTime()}`;
