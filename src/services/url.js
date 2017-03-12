function getQuery () {
  /**
   * Get search query from URL
   * @return {string || null} - search query string or null
   */

  let query = '';
  try {
    query = window.location.search.substring(1);
    return decodeURIComponent(query);
  } catch (e) {

    // if url param is invalid
    return null;
  }
}

function setQuery (query) {
  /**
   * Set query to URL search query
   * @param {string} - search query
   */

  history.pushState({}, '', '?' + query);
}

export default {
  getQuery,
  setQuery
}