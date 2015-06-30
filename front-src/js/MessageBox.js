import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import ChannelsStore from './ChannelsStore';

var MessageBox = React.createClass({
  loadMessage: function() {
    $.ajax({
      url: this.state.channel,
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
  getStateFromStore: function() {
    return ChannelsStore.getState();
  },
  getInitialState: function() {
    return this.getStateFromStore();
  },
  onChange: function() {
    this.setState(this.getStateFromStore());
    this.loadMessage();
  },

  /*
  componentWillReceiveProps: function(nextProps) {
    this.loadMessage(nextProps.info);
  },
  */

  componentDidMount: function() {
    ChannelsStore.onChange = this.onChange;
  },
  
  render: function() {
    console.log(this.state);
    return (
      <div id="display" className="col-md-9 no-float">
        <MessageList data={this.state.data} />
        <MessageForm />
      </div>
    );
  }
});

module.exports = MessageBox;
