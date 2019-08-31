import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b8e07a1bc39775b44d7ad690b461e764',
    language: 'en-US'
  }
});

export const MoviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popluar: () => api.get('movie/popular'),
  movieDetail: id => api.get(`movie/${id}`, {
    params: {
      appent_to_response: 'videos'
    }
  }),
  search: term => api.get('search/movie', {
    params: {
      query: encodeURIComponent(term)
    }
  })
};

export const TvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: id => api.get(`tv/${id}`, {
    params: {
      appent_to_response: 'videos'
    }
  }),
  search: term => api.get('search/tv', {
    params: {
      query: encodeURIComponent(term)
    }
  })
};