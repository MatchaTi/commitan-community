import { ISocketStore } from '@/interfaces/socketStore';
import { socketInit } from '@/utils/socket';
import { create } from 'zustand';

export const useSocketStore = create<ISocketStore>()((set) => ({
  socket: socketInit(),
  notificationData: [],
  setNotificationData: (value) => set((state) => ({ notificationData: [...value, ...state.notificationData] })),
}));
