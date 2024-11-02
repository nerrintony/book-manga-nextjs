'use client';

import { decrement, increment, incrementByAmount } from '@/store/counterSlice';
import { RootState } from '@/store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const IncrementDecrement = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(incrementByAmount(10))}>
      incrementByAmount
      </button>
    </React.Fragment>
  );
};

export default IncrementDecrement;
