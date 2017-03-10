import React, { Component, PropTypes } from 'react';

import Album from './Album';

export default class Albums extends Component {
  constructor(props){
    super(props);
  }

  renderAlbum(album) {
    return <Album key={album.id} album={album} />;
  }

  renderPlaceholder(){
    return (
      <tr>
        <td colSpan="5">Oops. Can't find anything. Try to enter another keyword or try again latter</td>
      </tr>
    )
  }

  render() {
    const {data, showStars} = this.props.searchResults;

    return (
      <div className='tableContainer'>
        <div>
          <p>{`Found albums: ${data ? data.length : 0}`}</p>
        </div>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Date</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? data.map(this.renderAlbum) : this.renderPlaceholder()}
          </tbody>
        </table>
      </div>
    );
  }
}

Albums.propTypes = {
  searchResults: PropTypes.object.isRequired,
  showStars: PropTypes.bool,
  actions: PropTypes.object.isRequired
};
