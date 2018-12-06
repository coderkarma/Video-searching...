import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        {/*   props onFormSubmit */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;