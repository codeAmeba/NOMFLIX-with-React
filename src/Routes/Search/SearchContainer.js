import React from 'react';
import SearchPresenter from './SearchPresenter';
import { MoviesApi, TvApi } from '../../api';

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    error: null,
    loading: false
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  };

  searchByTerm = async() => {
    const { searchTerm } = this.state;
    try {
      const { data: { results: movieResults }} = await MoviesApi.search(searchTerm);
      const { data: { results: tvResults }} = await TvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      })
      this.setState({
        loading: true
      })
    } catch {
      this.setState({
        error: "Can't find results."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter 
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}