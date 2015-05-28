var GlobalBox = React.createClass({
    render: function() {
	console.log('LEL');
	console.log(LinkBox);
        return (
            <div className="GlobalBox" >
                <h1>ceci est la GLOBALBOX</h1>
                <LinkBox />
                <MessageBox url="/static/json/comments.json" />
            </div>

        );
    }
});
