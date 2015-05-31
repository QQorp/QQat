var GlobalBox = React.createClass({
    getInitialState: function() {
        return {
            idChan: 0,
            url: '/channels/0/messages/'
        };
    },
    handleClick: function(newId) {
        var info = '/channels/' + newId + '/messages/';
        this.setState({
            idChan: newId,
            url: info
        });
    },
    render: function() {
        return (
            <div className="row">
                <div id="panel" className="col-md-3 no-float">
                    <h3><i className="fa fa-bars"></i> Channels :</h3>
                    <Channel url="/channels/" func={this.handleClick} />
                    <h3><i className="fa fa-user"></i> Users :</h3>
                    <Channel url="/users" func={this.handleClick} />
                </div>

                <MessageBox info={this.state.url} />
            </div>

        );
    }
});
