import React from 'react';
import Channel from './Channel';
import MessageBox from './MessageBox';

var GlobalBox = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div id="panel" className="col-md-3">
            <h3><i className="fa fa-bars"></i> Channels :</h3>
            <Channel url="/api/channel/" />
          </div>
          <MessageBox />
        </div>
      </div>
    );
  }
});

module.exports = GlobalBox;
