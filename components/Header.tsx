import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  UserIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  CheckBadgeIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/outline';
import type { IHeaderItem } from '../types/headerItem';

export default function Header() {
  const headerItemStyle = 'h-8 mb-1 group-hover:animate-bounce';
  const headerItems: IHeaderItem[] = [
    {
      title: 'home',
      Icon: <HomeIcon className={headerItemStyle} />,
    },
    {
      title: 'trending',
      Icon: <BoltIcon className={headerItemStyle} />,
    },
    {
      title: 'verified',
      Icon: <CheckBadgeIcon className={headerItemStyle} />,
    },
    {
      title: 'collections',
      Icon: <RectangleStackIcon className={headerItemStyle} />,
    },
    {
      title: 'search',
      Icon: <MagnifyingGlassIcon className={headerItemStyle} />,
    },
    {
      title: 'user',
      Icon: <UserIcon className={headerItemStyle} />,
    },
  ];

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center m-[10px] h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        {headerItems.map((headerItem) => (
          <HeaderItem
            key={headerItem.title}
            title={headerItem.title}
            Icon={headerItem.Icon}
          />
        ))}
      </div>

      <Image
        priority
        className='object-contain -mt-4'
        src='https://links.papareact.com/ua6'
        alt='hulu-logo'
        width={200}
        height={100}
      />
    </div>
  );
}
