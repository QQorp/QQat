import React from 'react';
import Channel from './Channel';
import MessageBox from './MessageBox';

var GlobalBox = React.createClass({
  render: function() {
    return (
      <div id="main-container" className="container-fluid">
        <div id="main-row" className="row">
          <div id="channels" className="col-xs-3">
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
