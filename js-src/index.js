"use strict";

//--------------------------------------------------- [Start index.tsx]
var RX = require('reactxp');
var App = require('./App');
RX.App.initialize(true, true);
RX.UserInterface.setMainView(RX.createElement(App, null));
//--------------------------------------------------- [End index.tsx] 
