import React from 'react';
import Message from './Message';

var MessageList = React.createClass({
    render: function() {
        var MessageNode = this.props.data.map(function(message) {
            return (
                <Message author={message.sender_id} >
                    {message.content}
                </Message>
            );
        });
        return (
            <div className="messageList">
                {MessageNode}
            </div>
        );
    }
});

module.exports = MessageList;
