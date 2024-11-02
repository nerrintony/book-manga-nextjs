import Image from 'next/image';
import styles from './page.module.css';
import { useEffect } from 'react';
import MangeVerseClient from '@/client/mangaverse.client';
import axios from 'axios';
import IncrementDecrement from '@/components/IncrementDecrement/IncrementDercrement';

export default function Home() {
  return (
    <div>
      <IncrementDecrement />
    </div>
  );
}
