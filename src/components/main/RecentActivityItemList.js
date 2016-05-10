var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
} = React;
//var Svg = require('react-native-art-svg');
//var {
 //   Circle,
//} = Svg;
var RecentActivityItemList = React.createClass({
    getInitialState: function() {
	return {
	    itemsList: [
		{name: 'DEPOSIT', time: 'LAST MONTH', content: {value: 0.0025}}
	    ]
	}
    },
    render: function() {
	let RecentActivityItemList = this.state.itemsList.map(function(item){
	    return (
		    <RecentActivityItem name={item.name} time={item.time} content={item.content}/>
	    )
	})
	return (
		<View stlye={ItemStylesList.ItemsListContainer}>
		{RecentActivityItemList}
	    </View>
	)
    }
})

var RecentActivityItem = React.createClass({
    render: function() {
	return (
		<View style={ItemStyles.ItemContainer}>
		<View style={ItemStyles.ItemHeader}>
		<Text style={[ItemStyles.ActivityItemText,ItemStyles.HeaderLeft]}>DEPOSIT</Text>
		<Text style={[ItemStyles.ActivityItemText,ItemStyles.HeaderRight]}>LAST MONTH</Text>
		</View>
		<View style={ItemStyles.ActivityItemContentContainer}>
		<Text style={ItemStyles.ActivityItemDepositValue}>+0.0025</Text><Text style={ItemStyles.CurrencyText}>BTC</Text>
		</View>
	    </View>
	)
    }
})


const ItemStylesList = StyleSheet.create({
    ItemsListContainer: {
	marginTop: 20
    }
})

const ItemStyles = StyleSheet.create({
    Logo: {

    },
    ItemContainer: {
	flex: 1,
	backgroundColor: 'white',
	marginLeft: 20,
	marginRight: 20,
    },
    ItemHeader: {
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-between',
	marginLeft: 20,
    },
    HeaderLeft: {
	flex: 1,
    },
    HeaderRight: {
	flex: 1,
	fontSize: 9,
	justifyContent: 'flex-end',
    },
    ActivityItemContentContainer: {
	flexDirection: 'row',
	marginLeft: 20,
    },
    ActivityItemDepositValue: {
	fontSize: 20,
	color: 'green',
    },
    ActivityItemText: {

    },
    CurrencyText: {
	alignSelf: 'flex-end',
    }
})

module.exports = RecentActivityItemList;
