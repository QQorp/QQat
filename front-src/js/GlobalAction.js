import GlobalStore from './GlobalStore';

var GlobalAction = {
  loadChannels: function() {
    GlobalStore.loadChannels();
  },

  selectChannel: function(new_channel_name) {
    if(GlobalStore.getCurrentChannel() != new_channel_name) {
      GlobalStore.setCurrentChannel(new_channel_name);
      GlobalStore.loadMessages();
    }
  }
};

module.exports = GlobalAction;
