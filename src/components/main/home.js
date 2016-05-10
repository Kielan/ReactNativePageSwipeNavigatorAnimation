'use strict';

var React = require('react-native');
var {
    View,
    Text,
    ScrollView,
    StyleSheet,
} = React;
var ScrollableTabView = require('react-native-scrollable-tab-view');

var {
    DefaultTabBar
} = ScrollableTabView;

//var {ScrollableTabBar} = ScrollableTabView;
//var Tabbar = require('react-native-tabbar');//react-native-tabbar  react-native-tab-navigator
//var { Tab, RawContent,IconWithBar, glypyMapMaker,} = Tabbar;
var KezaTabBar = require('./KezaTabBar.js')
var Portfolio = require('./Portfolio');
var Settings = require('./settings');
var Actions = require('./Actions');
/*
const glypy = glypyMapMaker({
  Home: 'e900',
  Camera: 'e901',
  Stat: 'e902',
  Settings: 'e903',
  Favorite: 'e904'
});
*/
var Home = React.createClass({
    render: function() {
	return (

		<ScrollableTabView
	    ref="myTabbar"
	    renderTabBar={()=><KezaTabBar />}
	    tabBarPosition='overlayTop' >
		<Settings tabLabel="SETTINGS"/>
		<Portfolio tabLabel="PORTFOLIO"/>
		<Text tabLabel="KEZA">Yeah boy</Text>
		<Actions tabLabel="ACTIONS"/>
		</ScrollableTabView>

	)
    }
})

const styles = StyleSheet.create({
    kezaTabBarStyle: {
    },
})
module.exports = Home;
