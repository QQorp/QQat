var ChannelsStore = {
  _state: {
    channel: '/api/channel/AA-AA/messages/',
    data: []
  },

  getState: function() {
    return this._state;
  },

  pushIdChannel: function(id) {
    var fakeUrl = '/api/channel/' + id + '/messages/';
    this._state.channel = fakeUrl;
    this.onChange();
  },

  onChange: function() {}
};

module.exports = ChannelsStore;
