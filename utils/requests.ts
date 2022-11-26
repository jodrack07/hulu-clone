const API_KEY = process.env.API_KEY;

const requests = {
    fetchTreding: {
        title: 'trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'top rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`
    },
    fetchComedyMovies: {
        title: 'comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`
    },
    fetchHorrorsMovies: {
        title: 'herror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`
    },
    fetchRomanceMovies: {
        title: 'romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`
    },
    fetchMisteryMovies: {
        title: 'mistery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US`
    },
    fetchWestern: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=en-US`
    },
    fetchAnimation: {
        title: 'animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`
    },
    fetchTV: {
        title: 'tv movie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en-US`
    },
}

export default  requests;
