import ChannelsStore from './ChannelsStore';

var ChannelsAction = {
    pushIdChannel: function(id) {
        ChannelsStore.pushIdChannel(id);
    }
};

module.exports = ChannelsAction;
