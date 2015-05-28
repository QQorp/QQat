var MessageList = React.createClass({
    render: function() {
        var MessageNode = this.props.data.map(function(message) {
            return (
                <Message author={message.author} >
                    {message.text}
                </Message>
            );
        });
        return (
            <div className="messageList">
                <h2>
                    ICI les messages !!
                </h2>
                {MessageNode}
            </div>
        );
    }
});
