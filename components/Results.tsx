import React from 'react'
import type { IResult } from '../types/result'
import Thumbnail from './Thumbnail'

interface IResultProps {
    results: IResult[]
}

export default function Results({ results }: IResultProps) {
  return (
    <div className='px-2 my-4 sm:p-4 sm:gap-2 sm:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {results.map((result, key) => (
            <Thumbnail key={key} result={result} />
        ))}
    </div>
  )
}
