import React from 'react';
import GlobalAction from './GlobalAction';
import GlobalStore from './GlobalStore';

var Channel = React.createClass({
  getInitialState: function() {
    return {
      data : []
    };
  },

  componentDidMount: function() {
    GlobalStore.onChannelsLoaded = this.onChannelsLoaded;
    GlobalAction.loadChannels();
  },

  onChannelsLoaded: function(channels) {
    this.setState({'data': channels})
  },

  handleClick: function(channelUID) {
    GlobalAction.selectChannel(channelUID);
  },

  render: function() {
    var ChannelNode = this.state.data.map(function(channel){
      return (
        <li onClick={this.handleClick.bind(this, channel.ChannelUID)} key={channel.ChannelUID}>
          {channel.ChannelName}
        </li>
      );
    }, this);
    return (
      <div className="channels">
        <ul>
          {ChannelNode}
        </ul>
      </div>
    );
  }
});

module.exports = Channel;
