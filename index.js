/**
 * @jsx React.DOM
 */

var React = window.React = require('react');
var App = require('./app/app');

// var Restaurants = require('ucb/app/collections/locations');

var data = {
	name: 'test app',
	restaurants: [{
		name: 'Dominos'
	},{
		name: 'Pizza hut'
	},{
		name: 'Pizza hut'
	},{
		name: 'Pizza hut'
	},{
		name: 'Pizza hut'
	},{
		name: 'Pizza hut'
	},{
		name: 'Pizza hut'
	},{
		name: 'Pizza hut'
	},{
		name: 'Pizza hut'
	}]
};



React.renderComponent(
	<App name="thing" data={data} />, 
	document.body)