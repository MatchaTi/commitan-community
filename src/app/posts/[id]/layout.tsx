import HomeLayout from '@/components/layout/homeLayout';

export default function DetailPostLayout({ children }: { children: React.ReactNode }) {
  return <HomeLayout>{children}</HomeLayout>;
}
