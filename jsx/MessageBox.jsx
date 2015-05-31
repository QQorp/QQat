var MessageBox = React.createClass({
    loadMessage: function(param) {
        $.ajax({
            url: param,
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
    getInitialState: function() {
        return {
            data: [],
        };
    },
    componentWillReceiveProps: function(nextProps) {
        console.log("update props");
        this.loadMessage(nextProps.info);
    },
    componentDidMount: function() {
        this.loadMessage(this.props.info);
    },
    render: function() {
        console.log("ici render messageBox");
        return (
            <div id="display" className="col-md-9 no-float">
                <MessageList data={this.state.data} />
                <MessageForm />
            </div>

        );
    }
});
