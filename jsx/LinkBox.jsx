var LinkBox = React.createClass({
    render: function() {
        return (
            <div id="panel" className="col-md-3 no-float">
		<h3><i className="fa fa-bars"></i> Channels :</h3>
                <Channel url="/channels/"/>
		<h3><i className="fa fa-user"></i> Users :</h3>
                <Channel url="/users" />
            </div>
        );
    }
});
