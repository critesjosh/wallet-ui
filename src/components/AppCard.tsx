import { ReactNode } from 'react';
import { ToastsProvider } from '../utils/toastsContext';
import style from './app.module.scss';

interface AppCardProps {
  children: ReactNode;
}

export default function AppCard({ children }: AppCardProps) {
  return (
    <div className={style.app}>
      <ToastsProvider>{children}</ToastsProvider>
    </div>
  );
}