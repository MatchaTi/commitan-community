import moment from 'moment';
import 'moment/locale/id';

export function cn(...cns: Array<string>) {
  return cns.join(' ');
}

export function timeAgo(time: string): string {
  moment.locale('id');
  return moment.utc(Date.parse(time)).fromNow();
}

export function generateAvatar(name: string) {
  const link = `https://ui-avatars.com/api/?name=${name}&&background=random&&color=fff&&size=128`;
  return link;
}
