import React from 'react';
import GlobalStore from './GlobalStore';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

var MessageBox = React.createClass({
  getInitialState: function() {
    return {
      messages: []
    }
  },

  onMessagesLoaded: function(new_messages) {
    this.setState({'messages': new_messages});
  },

  componentDidMount: function() {
    GlobalStore.onMessagesLoaded = this.onMessagesLoaded;
  },

  render: function() {
    return (
      <div className="col-md-9">
        <MessageList data={this.state.messages} />
        <MessageForm />
      </div>
    );
  }
});

module.exports = MessageBox;
