import React from 'react';

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
          GlobalStore.setCurrentChannel(data[0].ChannelUID);
          GlobalStore.loadMessages(GlobalStore.getCurrentChannel());
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(GlobalStore.state);
      }.bind(this)
    });
  },

  setCurrentChannel: function(new_channel_name) {
    if(new_channel_name !== this.state.currentChannel) {
      this.state.currentChannel = new_channel_name;
      this.onNewCurrentChannel(new_channel_name);
    }
  },

  getCurrentChannel: function() {
    return this.state.currentChannel;
  },

  loadMessages: function(channel_uid) {
    $.ajax({
      url: '/api/channel/' + channel_uid + '/messages/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        GlobalStore.state.messages[channel_uid] = data;
        GlobalStore.onMessagesLoaded(channel_uid);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(GlobalStore.state);
      }.bind(this)
    });
  }

};

module.exports = GlobalStore;
