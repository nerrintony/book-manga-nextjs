import Image from 'next/image';
import styles from './page.module.css';
import { useEffect } from 'react';
import MangeVerseClient from '@/client/mangaverse.client';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { decrement, increment } from '@/store/slice';
import IncrementDecrement from '@/components/IncrementDecrement/IncrementDercrement';

export default function Home() {
  return (
    <div>
      <IncrementDecrement />
    </div>
  );
}
