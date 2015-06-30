import React from 'react';

var MessageForm = React.createClass({
  render: function() {
    return (
    	<div className="input-group">
    	  <span className="input-group-addon"><i className="fa fa-font"></i></span>
    	  <input type="text" className="form-control" placeholder="Write your QQ here.." />
    	</div>
    );
  }
});

module.exports = MessageForm;
