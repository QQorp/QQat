import React from 'react';
import GlobalAction from './GlobalAction';
import GlobalStore from './GlobalStore';

var Channel = React.createClass({

  getInitialState: function() {
    return {
      channels : []
    };
  },

  componentDidMount: function() {
    GlobalStore.onChannelsLoaded = this.onChannelsLoaded;
    GlobalAction.loadChannels();
  },

  onChannelsLoaded: function(channels) {
    this.setState({'channels': channels})
  },

  handleClick: function(channelUID) {
    GlobalAction.selectChannel(channelUID);
  },

  createChannel: function () {
    var name = window.prompt();
    $.ajax({
      type: "POST",
      url: '/api/channel/' + name,
      dataType: 'json',
      cache: false,
      success: function(data) {
        GlobalStore.loadChannels();
      },
      error: function(xhr, status, err) {
        console.log(GlobalStore.state);
      }
    });
  },

  render: function() {
    var ChannelNode = this.state.channels.map(function(channel){
      return (
        <li className="channel" onClick={this.handleClick.bind(this, channel.ChannelUID)} key={channel.ChannelUID}>
          {channel.ChannelName}
        </li>
      );
    }, this);
    return (
      <div>
        <ul>
          {ChannelNode}
          <li className="channel" >
            <i onClick={this.createChannel} className="fa fa-plus fa-2x"></i>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Channel;
