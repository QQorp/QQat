var Channel = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    handleClick: function(id) {
        this.props.func(id);
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
                <tr>
                    <td onClick={this.handleClick.bind(this, channel.id)} key={channel.id} >
                        {channel.name}
                    </td>
                </tr>
            );
        }, this);
        return (
            <div className="channel" >
                <table>
                    {ChannelNode}
                </table>
            </div>
        );
    }
});
