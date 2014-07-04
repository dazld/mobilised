/**
 * @jsx React.DOM
 */

var React = require('react/addons');

var Topbar = React.createClass({
	render: function(){
		return (
			<div className='topbar'>
				<span className='item full'>Menu</span>
				<span className='item'>Thing</span>
				<span className='item'>Another</span>  
			</div>
		)
	}
});


var Item = React.createClass({
	render: function(){
		return (
			<div className='item'>
				<h2>{this.props.data.name}</h2>
				<p>lorem ipsum sit dolor nunc adhit nili color exemplia invent connor lorem ipsum sit dolor nunc adhit nili color exemplia invent connor lorem ipsum sit dolor nunc adhit nili color exemplia invent connor</p>
			</div>
		)
	}
})

 var App = React.createClass({
 	getInitialState: function(){

 		return {
 			scaled: false
 		}
 	},
 	switchSize: function(){
 		this.setState({
 			scaled: this.state.scaled ? false : true
 		});
 	},
 	render: function(){

 		var name = this.props.data.name;
 		var cx = React.addons.classSet;

 		var panelClass = cx({
 			'panel': true,
 			'scaled':this.state.scaled
 		});

 		var items = this.props.data.restaurants.map(function(item){
 			return (
 				<Item data={item} />
			)
 		})

 		return (
 			<div className='app'>
 				<Topbar />
 				<div className={panelClass} onClick={this.switchSize}>
	 				<h1>{name}</h1>
	 				{items}
 				</div>
 			</div>
 		)
 	}
 });

 module.exports = App;