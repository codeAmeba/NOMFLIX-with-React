import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  state = {
    MovieResults: null,
    TvResults: null,
    SearchTerm: '',
    error: null,
    loading: false
  }

  render() {
    const { MovieResults, TvResults, SearchTerm, error, loading } = this.state;
    return (
      <SearchPresenter 
        MovieResults={MovieResults}
        TvResults={TvResults}
        SearchTerm={SearchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}