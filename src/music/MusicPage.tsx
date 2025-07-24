import Container from '@/components/Container';
import AppGrid from '@/components/AppGrid';
import MusicGrid from './MusicGrid';
import { Music } from './index';

// For demo purposes, let's create some sample music data
const sampleMusic: Music[] = [
  {
    id: '1',
    title: 'Ambient Dreams',
    artist: 'Your Name',
    album: 'Portfolio Collection',
    genre: 'Ambient',
    duration: 240,
    bpm: 85,
    key: 'C major',
    releaseYear: 2024,
    description: 'A dreamy ambient track with ethereal pads and gentle melodies',
    url: '/music/ambient-dreams.mp3',
    tags: ['ambient', 'chill', 'electronic'],
    hidden: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    takenAt: new Date('2024-01-15'),
    durationFormatted: '4:00',
    takenAtFormatted: 'January 15, 2024',
    releaseYearFormatted: '2024',
  },
  {
    id: '2',
    title: 'Urban Pulse',
    artist: 'Your Name',
    album: 'Beat Collection',
    genre: 'Hip Hop',
    duration: 180,
    bpm: 140,
    key: 'F# minor',
    releaseYear: 2024,
    description: 'Hard-hitting urban beat with crisp drums and deep bass',
    url: '/music/urban-pulse.mp3',
    tags: ['hip-hop', 'beats', 'urban'],
    hidden: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    takenAt: new Date('2024-02-10'),
    durationFormatted: '3:00',
    takenAtFormatted: 'February 10, 2024',
    releaseYearFormatted: '2024',
  },
  {
    id: '3',
    title: 'Synthwave Nights',
    artist: 'Your Name',
    album: 'Retro Future',
    genre: 'Synthwave',
    duration: 300,
    bpm: 120,
    key: 'A minor',
    releaseYear: 2024,
    description: 'Nostalgic synthwave with neon-soaked melodies and driving rhythms',
    url: '/music/synthwave-nights.mp3',
    tags: ['synthwave', 'retro', 'electronic'],
    hidden: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    takenAt: new Date('2024-03-05'),
    durationFormatted: '5:00',
    takenAtFormatted: 'March 5, 2024',
    releaseYearFormatted: '2024',
  },
];

export default function MusicPage() {
  return (
    <AppGrid
      contentMain={
        <Container>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Music Production</h1>
              <p className="text-dim text-lg">
                A collection of original music tracks and productions.
              </p>
            </div>
            
            <MusicGrid
              music={sampleMusic}
              animate={true}
              canStart={true}
            />
          </div>
        </Container>
      }
    />
  );
}
