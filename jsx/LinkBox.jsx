var LinkBox = React.createClass({
    render: function() {
        return (
            <div className="linkBox">
                <h2>Ceci est le côté gauche</h2>
                <Channel url="/static/json/channels.json"/>
                <Contact url="/static/json/contacts.json" />
            </div>
        );
    }
});
