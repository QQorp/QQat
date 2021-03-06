import React from 'react';
import Message from './Message';

var MessageList = React.createClass({
  render: function() {
    var MessageNode = this.props.data.map(function(message) {
      return (
        <Message author={message.Sender}>
          {message.Content}
        </Message>
      );
    });
    return (
      <div id="messageList">
        {MessageNode}
      </div>
    );
  }
});

module.exports = MessageList;
