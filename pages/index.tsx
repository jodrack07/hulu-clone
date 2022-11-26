import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Results from "../components/Results";
import type { IResult } from "../types/result";
import requests from "../utils/requests";

export default function Home({ results }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
    <Results results={results} />
    </>
  );
}

export async function getServerSideProps (context: GetServerSidePropsContext) {
  const genre = context.query.genre as string;
  const url = requests[genre]?.url || requests.fetchTreding.url;
  const response = await fetch(`https://api.themoviedb.org/3/${url}`);
  const data = await response.json();
  const results: IResult[] = await data.results;
  return {
    props: {
      results
    }
  }
}
