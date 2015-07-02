import React from 'react';
import GlobalStore from './GlobalStore';
import GlobalAction from './GlobalAction';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

var MessageBox = React.createClass({

  getInitialState: function() {
    return {
      messages: [],
      currentChannel: ''
    }
  },

  onMessagesLoaded: function(channel_uid) {
    this.setState({
      messages: GlobalStore.state.messages,
      currentChannel: channel_uid
    });
  },

  onNewCurrentChannel: function(channel_uid) {
    this.setState({
      'currentChannel': channel_uid
    });
    GlobalAction.loadMessages(channel_uid);
  },

  componentDidMount: function() {
    GlobalStore.onMessagesLoaded = this.onMessagesLoaded;
    GlobalStore.onNewCurrentChannel = this.onNewCurrentChannel;
  },

  render: function() {
    return (
      <div id="messages" className="col-xs-9">
        {
          this.state.messages[this.state.currentChannel] ?
          (<MessageList data={this.state.messages[this.state.currentChannel]} />)
          : (<div />)
        }
        <div className="footer">
          <MessageForm />
        </div>
      </div>
    );
  }
});

module.exports = MessageBox;
