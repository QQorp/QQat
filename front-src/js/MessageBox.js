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
      <div id="messages" className="col-xs-9">
        <MessageList data={this.state.messages} />
        <div className="footer">
          <MessageForm />
        </div>
      </div>
    );
  }
});

module.exports = MessageBox;
