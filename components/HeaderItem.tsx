import type { IHeaderItem } from '../types/headerItem';

export default function HeaderItem({ title, Icon }: IHeaderItem) {
  return (
    <div className='group flex flex-col items-center w-10 sm:w-20 hover:text-white cursor-pointer'>
      <>
        {Icon}
        <p className='opacity-0 group-hover:opacity-100 tracking-widest uppercase font-meduim'>
          {title}
        </p>
      </>
    </div>
  );
}
