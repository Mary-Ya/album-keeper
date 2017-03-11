import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import * as SavedActions from '../actions/SavedActions';
import Albums from '../components/Albums';

export class SavedContainer extends Component {
  constructor(props) {
    super(props);
    this.props.actions.loadSaved();
  }

  render() {
    const { savedAlbums, actions } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            {savedAlbums.isLoading ? <Spinner /> : <Albums
              showSum={false}
              showControls={['remove']}
              data={Object.keys(savedAlbums.data).map((item) => {
                const newAlbum = {};
                newAlbum[item.id] = item;
                return item
              })}
              actions={actions} />}
          </div>
        </div>
      </div>
    );
  }
}

SavedContainer.propTypes = {
  savedAlbums: PropTypes.object,
  actions: PropTypes.object.isRequired
};

SavedContainer.defaultProps = {
  savedAlbums: {}
};

function mapStateToProps(state) {
  return {
    savedAlbums: state.savedAlbums
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SavedActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedContainer);
