'use client';

import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { TfiWorld } from 'react-icons/tfi';
import AchievementModal from '../common/achievementModal';
import Button from '../common/button';
import Tooltip from '../common/tooltip';

interface IAchievement {
  className?: string;
  visibility?: string;
}

interface IAchievementItem {
  title: string;
  label: string;
  isAchieved: boolean;
  origin: string;
}

export default function Achievement({ className, visibility }: IAchievement) {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div
        className={`${visibility} ${className} ${
          expand ? 'max-h-fit' : 'max-h-[420px]'
        } common-bg relative mt-4 w-full overflow-hidden rounded-lg py-4 sm:max-h-fit`}
      >
        <h4 className='mb-4 px-4 text-base font-bold text-commitan-main'>Pencapaian</h4>
        <ul className='grid w-full grid-cols-3 justify-center gap-2 px-4'>
          {achievement.map(({ title, label, isAchieve, origin }, i) => {
            const userAchievement = achievementsUser.find((ach) => ach.title == title);
            const isAchieved = userAchievement ? userAchievement.isAchieve : isAchieve;

            return <AchievementItem key={i} title={title} isAchieved={isAchieved} label={label} origin={origin} />;
          })}
        </ul>
      </div>
      <div className='flex w-full justify-center text-xs sm:hidden'>
        <Button type='button' color='primary' corner='full' onClick={() => setExpand(!expand)}>
          <span>Lihat Selengkapnya</span>
          <HiChevronDown className={`${expand && 'rotate-180'} text-xl`} />
        </Button>
      </div>
    </>
  );
}

function AchievementItem({ title, label, isAchieved, origin }: IAchievementItem) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => setModalOpen(!modalOpen);

  return (
    <li
      className={`${
        isAchieved
          ? 'border-none bg-commitan-main text-white text-opacity-100'
          : 'text-light-text/25 dark:text-dark-text/25'
      } common-accent flex aspect-square items-center justify-center border text-center text-xs hover:bg-dark-secondary/5 hover:dark:bg-light-secondary/5`}
    >
      <div className='group relative'>
        <div className='text-3xl'>
          <TfiWorld />
        </div>
        <Tooltip position={origin as any}>
          <div>
            <div className='font-semibold'>{title}</div>
            <Button type='button' onClick={handleModal} color='transparent' size='none' className='text-xs font-normal'>
              Lihat Selengkapnya
            </Button>
          </div>
        </Tooltip>
      </div>
      {modalOpen && (
        <AchievementModal
          showModal={modalOpen}
          handleModal={handleModal}
          titleAchievement={title}
          labelAchievement={label}
        />
      )}
    </li>
  );
}

const achievement = [
  { title: 'Level 1', label: '10 Followers', isAchieve: false, origin: 'topStart' },
  { title: 'Level 2', label: '100 Followers', isAchieve: false, origin: 'topCenter' },
  { title: 'Level 3', label: '1000 Followers', isAchieve: false, origin: 'topEnd' },
  {
    title: 'Ngoding Pemula',
    label: 'Kirimkan konten terkait pemrograman pertamamu.',
    isAchieve: false,
    origin: 'topStart',
  },
  {
    title: 'Programer yang Disukai',
    label: 'Raih 10 suka pada postingan terkait pemrogramanmu.',
    isAchieve: false,
    origin: 'topCenter',
  },
  {
    title: 'Programer yang Populer',
    label: 'Raih 50 suka pada postingan terkait pemrogramanmu.',
    isAchieve: false,
    origin: 'topEnd',
  },
  {
    title: 'Visi Desain Web',
    label: 'Bagikan konsep desain web atau ide UI/UX.',
    isAchieve: false,
    origin: 'topStart',
  },
  {
    title: 'Penghargaan UX/UI',
    label: 'Dapatkan umpan balik positif pada konsep desain webmu.',
    isAchieve: false,
    origin: 'topCenter',
  },
  {
    title: 'Di Galeri Kreativitas',
    label: 'Jadilah konsep desain webmu ditampilkan dalam sebuah galeri.',
    isAchieve: false,
    origin: 'topEnd',
  },
  { title: 'Pendeteksi Kecil', label: 'Laporkan bug dalam aplikasi.', isAchieve: false, origin: 'topStart' },
  {
    title: 'Pemecah Masalah',
    label: 'Bantu perbaiki 5 bug yang dilaporkan oleh orang lain.',
    isAchieve: false,
    origin: 'topCenter',
  },
  {
    title: 'Penguasa Bug',
    label: 'Diakui sebagai pemburu bug terbaik oleh komunitas.',
    isAchieve: false,
    origin: 'topEnd',
  },
  { title: 'Bantuan Pemula', label: 'Jawab pertanyaan terkait pemrograman.', isAchieve: false, origin: 'topStart' },
  {
    title: 'Membimbing dengan Baik',
    label: 'Bantu 5 orang dengan masalah pemrograman mereka.',
    isAchieve: false,
    origin: 'topCenter',
  },
  {
    title: 'Mentor Terhormat',
    label: 'Menjadi mentor yang diakui dalam komunitas.',
    isAchieve: false,
    origin: 'topEnd',
  },
];

const achievementsUser = [
  // { title: 'Level 1', label: '10 Followers', isAchieve: false },
  { title: 'Level 2', label: '100 Followers', isAchieve: false },
  { title: 'Level 3', label: '1000 Followers', isAchieve: false },
  { title: 'Ngoding Pemula', label: 'Kirimkan konten terkait pemrograman pertamamu.', isAchieve: false },
  { title: 'Programer yang Disukai', label: 'Raih 10 suka pada postingan terkait pemrogramanmu.', isAchieve: true },
  { title: 'Programer yang Populer', label: 'Raih 50 suka pada postingan terkait pemrogramanmu.', isAchieve: false },
  { title: 'Visi Desain Web', label: 'Bagikan konsep desain web atau ide UI/UX.', isAchieve: false },
  { title: 'Penghargaan UX/UI', label: 'Dapatkan umpan balik positif pada konsep desain webmu.', isAchieve: false },
  {
    title: 'Di Galeri Kreativitas',
    label: 'Jadilah konsep desain webmu ditampilkan dalam sebuah galeri.',
    isAchieve: true,
  },
  { title: 'Pendeteksi Kecil', label: 'Laporkan bug dalam aplikasi.', isAchieve: false },
  { title: 'Pemecah Masalah', label: 'Bantu perbaiki 5 bug yang dilaporkan oleh orang lain.', isAchieve: false },
  { title: 'Penguasa Bug', label: 'Diakui sebagai pemburu bug terbaik oleh komunitas.', isAchieve: false },
  { title: 'Bantuan Pemula', label: 'Jawab pertanyaan terkait pemrograman.', isAchieve: false },
  { title: 'Membimbing dengan Baik', label: 'Bantu 5 orang dengan masalah pemrograman mereka.', isAchieve: false },
  { title: 'Mentor Terhormat', label: 'Menjadi mentor yang diakui dalam komunitas.', isAchieve: true },
];
