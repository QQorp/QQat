var Channel = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
                console.log(data);
                console.log(this.state.data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        var ChannelNode = this.state.data.map(function(channel){
            return (
                <li key={ channel.id }>
                    <em>
                        {channel.name}
                    </em>
                </li>
            )
        });
        return (
            <div className="channel" >
                <h2>Ici les canaux de discussion</h2>
                <ul>
                    {ChannelNode}
                </ul>
            </div>
        );
    }
});
