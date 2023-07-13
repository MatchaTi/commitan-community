import Button from '../common/button';
import ProfileImage from '../common/profileImage';

interface IFollowing {
  className?: string;
  visibility?: string;
}

export default function Following({ className, visibility }: IFollowing) {
  const persons = ['Kumala', 'YJJA', 'Anjayani'];

  return (
    <section className={`${visibility} ${className} common-bg mt-4 w-full rounded-lg p-4`}>
      <h4 className='mb-4 text-base font-bold text-commitan-main'>Following</h4>
      <ul>
        {persons.map((person, index) => {
          return (
            <li key={index} className='mb-2 flex cursor-pointer items-center gap-4'>
              <div>
                <ProfileImage size='md' />
              </div>
              <span>{person}</span>
            </li>
          );
        })}
      </ul>
      <Button type='button' color='outline' className='mt-4' fullField={true}>
        Lihat lainnya
      </Button>
    </section>
  );
}
