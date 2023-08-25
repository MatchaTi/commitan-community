import { INotification } from './user';
import { Socket } from 'socket.io-client';

export interface ISocketStore {
  socket: Socket;
  notificationData: INotification[];
  setNotificationData: (value: INotification[]) => void;
}
