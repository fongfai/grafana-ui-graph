/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { WithLegend } from "./App";
import { WithTooltip, WithCustomTooltip } from './withTotip';
import * as serviceWorker from "./serviceWorker";
// import $ from 'jquery';
//@ts-ignore
// window.jQuery = window.$ = $;
// var flot = require("jquery.flot")

// console.log(flot);
// window.jQuery = window.$ = require('jquery');
// console.log(React, ReactDOM)
// require('jquery');
// const plot = require("jquery.flot");
// $.plot = plot;
// console.log('===', $.plot);

ReactDOM.render(<>
legend:
<WithLegend></WithLegend>
tootip
<WithTooltip></WithTooltip>
customtooltip
<WithCustomTooltip></WithCustomTooltip>
</>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
