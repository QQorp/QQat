import React from 'react';
import GlobalBox from './GlobalBox';

require("bootstrap-sass")

console.log($("#containerId").html());

React.render(<GlobalBox />, document.body);
