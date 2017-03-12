import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import * as SearchActions from '../actions/SearchActions';
import { saveAlbum } from '../actions/SavedActions';
import Albums from '../components/Albums';

import url from '../services/url';

export class SearchContainer extends Component {
  constructor(props) {
    super(props);

    const params = url.getQuery();
    this.state = {query: params};

    if(params && params.length > 0) {
      this.props.actions.fetchAlbums(params);
    }

    this.handleChange = this.handleChange.bind(this);
    this.searchAlbums = this.searchAlbums.bind(this);
  }

  handleChange(event) {
    url.setQuery(event.target.value);
    this.setState({query: event.target.value});
  }

  searchAlbums(event) {
    event.preventDefault();

    // @todo: sanitize input
    this.props.actions.fetchAlbums(this.state.query);
  }

  render() {
    const { searchResults, saveAlbum } = this.props;
    
    return (
      <div>
        <form id="search-form" name="search-form" className="form-inline row" onSubmit={this.searchAlbums}>
          <div className="form-group col-md-6">
            <div className="input-group">
              <input id="query" type="text" name="query"
                 placeholder="Enter album name here"
                 className="form-control"
                 value={this.state.query} onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
            </button>
          </div>
        </form>
        <div className="row">
          <div className="col-xs-12">
          {searchResults.isLoading ? <Spinner /> : <Albums
            data={searchResults.data}
            controls={ [{name: 'add', icon: 'star', action: saveAlbum}] }
            showSum={true}
          />}
          </div>
        </div>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  searchResults: PropTypes.object,
  actions: PropTypes.object.isRequired
};

SearchContainer.defaultProps = {
  searchResults: []
};

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SearchActions, dispatch),
    saveAlbum: bindActionCreators(saveAlbum, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
