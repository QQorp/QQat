var GlobalBox = React.createClass({
    render: function() {
        return (
            <div className="row">
                <LinkBox />
                <MessageBox url="/channels/2/messages" />
            </div>

        );
    }
});
