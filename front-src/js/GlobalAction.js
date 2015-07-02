import GlobalStore from './GlobalStore';

var GlobalAction = {
  loadChannels: function() {
    GlobalStore.loadChannels();
  },

  selectChannel: function(new_channel_name) {
    GlobalStore.setCurrentChannel(new_channel_name);
  },

  loadMessages: function(new_channel_name) {
    GlobalStore.loadMessages(new_channel_name);
  }
};

module.exports = GlobalAction;
