'use client';
import { ThemeProvider } from 'next-themes';

interface IProps {
  children: React.ReactNode;
}

export default function Providers({ children }: IProps) {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
