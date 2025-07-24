import { ABSOLUTE_PATH_MUSIC } from '@/app/path';
import MusicPage from '@/music/MusicPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music',
  description: 'Music production and tracks',
  openGraph: {
    title: 'Music',
    description: 'Music production and tracks',
    url: ABSOLUTE_PATH_MUSIC,
  },
  twitter: {
    title: 'Music',
    description: 'Music production and tracks',
  },
};

export default function MusicRoute() {
  return <MusicPage />;
}
