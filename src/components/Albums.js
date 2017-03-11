import React, { Component, PropTypes } from 'react';

import Album from './Album';

export default class Albums extends Component {
  constructor(props) {
    super(props);
  }

  renderAlbum(album, controls) {
    return <Album key={album.id} album={album} controls={controls}/>;
  }

  renderPlaceholder() {
    return (
      <tr>
        <td colSpan="5">Oops. Can't find anything. Try to enter another keyword or try again latter</td>
      </tr>
    )
  }

  renderRows(data, controls) {
    if (data && data.length > 0) {
      return data.map((album) => (this.renderAlbum(album, controls)));
    }

    return this.renderPlaceholder();
  }

  render() {
    const {data, controls, showSum} = this.props;

    return (
      <div className='tableContainer'>
        <div>
          <p>{showSum ? `Found albums: ${data ? data.length : 0}` : null}</p>
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
          { this.renderRows(data, controls) }
          </tbody>
        </table>
      </div>
    );
  }
}

Albums.propTypes = {
  data: PropTypes.array.isRequired,
  showSum: PropTypes.bool,
  controls: PropTypes.array
};

Albums.defaultProps = {
  showSum: false,
  controls: []
};
