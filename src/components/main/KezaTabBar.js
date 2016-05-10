'use strict';

var React = require('react-native');
var {
    Animated,
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} = React;
var rebound = require('rebound');
var Icon = require('react-native-vector-icons/Ionicons');

const KezaTabBar = React.createClass({
    propTypes: {
	goToPage: React.PropTypes.func,
	activeTab: React.PropTypes.number,
	tabs: React.PropTypes.array,
	style: View.propTypes.style,
    },
    getInitialState: function() {
	return {
	    pagesIndex: ["SETTINGS", "PORTFOLIO", "KEZA", "ACTIONS"],
	    tabsInFocus: null
	}
    },
    componentWillMount: function(){
	//http://facebook.github.io/rebound-js/docs/rebound.html
	//initialize the spring that will drive animations

	//let SpringSystem = '';
	this.springSystem = new rebound.SpringSystem();
	this.scrollSpring = this.springSystem.createSpring();
	var springConfig = this.scrollSpring.getSpringConfig();
	springConfig.tension = 230;
	springConfig.friction = 10;

	this.scrollSpring.addListener({
	    onSpringUpdate: () => {
		var currentValue = this.scrollSpring.getCurrentValue();
		this.setState({translateX: currentValue})
	    }
	})

	this.scrollSpring.setCurrentValue(0);
    },
    componentDidMount: function() {
	this.setAnimationValue({ value: this.props.activeTab, });
	this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
	//	this.setState({
	//	    pagesIndex: this.props.tabs//.map(function(tab, i){return ({i: tab})})
	//	})
	
    },
    _swipeCenterToLeft: function() {

    },
    _swipeCenterToRight: function() {
	this.scrollSpring.setEndValue(20);
    },
    setAnimationValue: function({ value, }) {
	/*	this.tabIcons.forEach((icon, i) => {
		const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
		icon.setNativeProps({
		style: {
		color: this.iconColor(progress),
		},
		});
		});
	*/    },
    //color between rgb(59,89,152) and rgb(204,204,204)

    iconColor: function(progress) {
	const red = 59 + (204 - 59) * progress;
	const green = 89 + (204 - 89) * progress;
	const blue = 152 + (204 - 152) * progress;
	return `rgb(${red}, ${green}, ${blue})`;
    },
    render: function() {
	console.log('tell me more', this.state.pagesIndex);
	this.props.initialPage === 2;
	
	const containerWidth = this.props.containerWidth;
	const numberOfTabs = this.props.tabs.length;
	const tabUnderlineStyle = {
	   // position: 'absolute',
	   // width: containerWidth / 3,
	   // height: 4,
	   // backgroundColor: this.props.underlineColor || 'navy',
	    //bottom: 0,
	};
	let left = this.props.scrollValue.interpolate({
	    inputRange: [0, 1], outputRange: [0,  containerWidth / 3,],
	});
	//let left = this.props.onScroll()
	var imageStyle = {
	    transform: [{translateX: this.state.translateX},{translateY: -1}],
	};
	console.log('rrrrr', this.props.tabs)
	let NavSection = function(i, tabs) {
	    console.log('meep moop i ', tabs)
	    console.log('r2 d2', tabs)
	    //const Index = this.props.activeTab;
	    return (
		    <View key={i} style={[styles.tabs, tabUnderlineStyle]}>
		   <Animated.View><TouchableOpacity onPress={() => this.props.goToPage(i-1)} style={styles.tab}><Text style={[styles.tabText, styles.tabLeft]}>{tabs[i-1]}</Text></TouchableOpacity></Animated.View>
		    <Animated.View style={[{left},]}><TouchableOpacity onPress={() => this.props.goToPage(i)} style={[styles.tab, ]}><Text style={styles.tabText}>{tabs[i]}</Text></TouchableOpacity></Animated.View>
		    <Animated.View><TouchableOpacity onPress={() => this.props.goToPage(i+1)} style={styles.tab}><Text style={[styles.tabText, styles.tabRight]}>{tabs[i+1]} </Text></TouchableOpacity></Animated.View>
		    </View>
	    )
	}

	let Navigator = this.props.tabs.map((tab, i) => {
	    return (
		    <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}><Text style={styles.tabText}>{i}</Text>
		    </TouchableOpacity>
	    )
	})
	console.log('what is the data model', Navigator);
	var currentIndex = this.props.activeTab;
	var prev = currentIndex - 1;
	var post = currentIndex + 1;
	console.log('track this bitch down', currentIndex)
	return (
		<View style={[this.props.style, ]}>
		{NavSection(currentIndex, this.state.pagesIndex)}
	    </View>
	)
    }
})

const styles = StyleSheet.create({
    tab: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
    },
    tabs: {
	height: 30,
	flexDirection: 'row',
	alignSelf: 'stretch',
	justifyContent: 'space-around',
	alignItems: 'center',
	borderWidth: 1,
	borderTopWidth: 0,
	borderLeftWidth: 0,
	borderRightWidth: 0,
	backgroundColor: 'rgba(28, 28, 28, 0.9)',

    },
    tabText: {
	color: 'white',
	flex: 1,
    },
    tabLeft: {
	fontSize: 10,
	color: 'grey',
    },
    tabLeftOutOfScreen: {
	opacity: 0,
    },
    tabRight: {
	fontSize: 10,
	color: 'grey',
    },
    tabRightOutOfScreen: {
	opacity: 0,
    },
});

module.exports = KezaTabBar;
