import React, {Component} from 'react';

export default class Album extends Component {
  constructor(props){
    super(props);
  }

  renderControl(control, index, album) {
    return (
      <span key={`${control.name}-${album.id}`}
            onClick={() => {console.log(`${control.name}-${album.id}`)}}
            className={"glyphicon glyphicon-" + control.icon}
            aria-hidden="true"
      ></span>
    )
  }

  renderControls(album, controls) {
    return (
      controls && controls.length > 0 ? controls.map((control, index) => (this.renderControl(control, index, album))) : null
    );
  }

  render() {
    const {album, controls} = this.props;

    return (
      <tr>
        <td>{this.renderControls(album, controls)} {album.id}</td>
        <td>{album.title}</td>
        <td>{album['artist-credit'].map((item, i) => (<span key={item.artist.id}>{item.artist.name}</span>))}</td>
        <td>{album.date}</td>
        <td>{album.album}</td>
      </tr>
    );
  }
}
