
const api_key = "0041a3e93c4eb77e40328b69f2a727f1"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&languages=en-US` ,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&languages=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
}

export default requests