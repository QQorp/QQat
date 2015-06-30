import React from 'react';
import ChannelsAction from './ChannelsAction';

var Channel = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  handleClick: function(id) {
    ChannelsAction.pushIdChannel(id)
  },

  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  
  render: function() {
    var ChannelNode = this.state.data.map(function(channel){
      return (
        <li onClick={this.handleClick.bind(this, channel.ChannelUID)} key={channel.ChannelUID} >
          {channel.ChannelName}
        </li>
      );
    }, this);
    return (
      <div className="channel" >
        <ul className="liste" >
          {ChannelNode}
        </ul>
      </div>
    );
  }
});

module.exports = Channel;
