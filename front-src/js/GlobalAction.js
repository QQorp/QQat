import GlobalStore from './GlobalStore';

var GlobalAction = {
  loadChannels: function() {
    GlobalStore.loadChannels();
  },

  selectChannel: function(new_channel_name) {
    GlobalStore.setChannel(new_channel_name);
    GlobalStore.loadMessages();
  }
};

module.exports = GlobalAction;
