'use strict';

var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var {ScrollableTabBar,} = ScrollableTabView;
var KezaTabBar = require('./KezaTabBar');
var Portfolio = require('./portfolio');
var Settings = require('./settings');
var Deposit = require('./deposit');

module.exports = React.createClass({
    render: function() {
	return (
		<View>
		<ScrollableTabView initialPage={3} renderTabBar={() => <ScrollableTabBar />}>
		<Settings />
		<Deposit />
		<Text>meh</Text>
		</ScrollableTabView>
		</View>
	)
    }
})
