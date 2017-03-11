export default {
  getObject: function(key) {
    try {
      const saved = localStorage.getItem(key);
      return JSON.parse(saved, (key, value) => (value));
    } catch (error) {
      return {error};
    }

    return {error: 'nothing found'};
  },
  setObject: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}