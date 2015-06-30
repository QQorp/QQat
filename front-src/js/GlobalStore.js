import GlobalAction from './GlobalAction';

var GlobalStore = {
  state: {
    channels: [],
    currentChannel: '',
    messages: []
  },

  loadChannels: function() {
    $.ajax({
      url: '/api/channel/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        GlobalStore.state.channels = data;
        GlobalStore.onChannelsLoaded(data);
        if(GlobalStore.state.currentChannel === '' && data.length > 0) {
          GlobalStore.setChannel(data[0].ChannelUID);
          GlobalStore.loadMessages();
        }
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });
  },

  setChannel: function(new_channel_name) {
    if(new_channel_name !== this.state.currentChannel) {
      this.state.currentChannel = new_channel_name;
    }
  },

  loadMessages: function() {
    $.ajax({
      url: '/api/channel/' + this.state.currentChannel + '/messages/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        GlobalStore.state.messages = data;
        GlobalStore.onMessagesLoaded(data);
      }.bind(this),
      error: function(xhr, status, err) {
        // Error MOUDAFUKAZ
      }.bind(this)
    });
  },

};

module.exports = GlobalStore;
