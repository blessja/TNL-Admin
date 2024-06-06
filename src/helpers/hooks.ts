// src/hooks.ts
import { AppDispatch } from '@/Store/Store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
