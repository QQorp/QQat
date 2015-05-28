var Contact = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax ({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data:data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        var ContactNode = this.state.data.map(function(contact){
            return (
                <li>
                    <strong>
                        { contact.name }
                    </strong>
                </li>
            );
        });
        return(
                <div className="contact" >
                    <h2>Ici sont les gens</h2>
                    <ul>
                        {ContactNode}
                    </ul>
                </div>
        );
    }
});
 
