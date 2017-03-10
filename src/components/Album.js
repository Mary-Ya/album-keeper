import React, {Component} from 'react';

export default class Album extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {album} = this.props;

    return (
      <tr>
        <td>{album.id}</td>
        <td>{album.title}</td>
        <td>{album['artist-credit'].map((item, i) => (<span key={item.artist.id}>{item.artist.name}</span>))}</td>
        <td>{album.date}</td>
        <td>{album.album}</td>
      </tr>
    );
  }
}
