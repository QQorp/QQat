var ChannelsStore = {
    _state: {
        channel: '/channels/0/messages/',
        data: []
    },

    getState: function() {
        return this._state;
    },

    pushIdChannel: function(id) {
        var fakeUrl = '/channels/' + id + '/messages/';
        this._state.channel = fakeUrl;
        this.onChange();
    },

    onChange: function() {}
};

module.exports = ChannelsStore;
