import React from 'react';

var Message = React.createClass({
  render: function() {
    return (
      <div className="Message">
        <h3 className="messageAuthor" >
          {this.props.author}
        </h3>
        { this.props.children }
      </div>
    );
  }
});

module.exports = Message;
