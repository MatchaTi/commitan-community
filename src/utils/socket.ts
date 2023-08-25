import io from 'socket.io-client';

export const socketInit = () => {
  return io(process.env.SOCKET_URL, {
    transports: ['websocket'],
    withCredentials: true,
    extraHeaders: {
      'my-custom-header': process.env.SOCKET_HEADER,
    },
  });
};
