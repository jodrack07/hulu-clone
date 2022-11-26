import React from 'react';
import Image from 'next/image';
import type { IResult } from '../types/result';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

interface IThumbnailProps {
  result: IResult;
}

export default function Thumbnail({ result }: IThumbnailProps) {
  const BASE_URL: string = 'https://image.tmdb.org/t/p/original';
  return (
    <div className='group cursor-pointer transition duration-200 transform z-index-50 ease-in sm:hover:scale-105 sm:hover:z-50'>
      <Image
        priority
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        className='object-cover'
        height={1080}
        width={1920}
        alt={result.title}
      />
      <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='truncate text-white text-2xl duration-100 transition ease-in-out group-hover:font-bold'>
          {result.title || result.original_title}
        </h2>
        <div className='flex gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100'>
          <span>{result.release_date}</span>
          <div className='flex gap-1'>
            <HandThumbUpIcon className='h-5' />
            <span>{result.vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
