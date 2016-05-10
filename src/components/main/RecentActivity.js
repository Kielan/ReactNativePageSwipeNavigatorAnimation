var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
} = React;
var RecentActivityItemList = require('./RecentActivityItemList');
module.exports = React.createClass({
    render: function() {
	return (
		<View style={styles.RecentActivityContainer}>
		<View style={styles.RecentActivityTextWrapper}>
		<Text style={styles.RecentActivityText}>RECENT ACTIVITY</Text>
		</View>
		<RecentActivityItemList />
	    </View>
	)
    }
})


const styles = StyleSheet.create({
    RecentActivityContainer: {
	marginTop: 15,
    },
    RecentActivityTextWrapper: {
	borderBottomWidth: 1,
	borderBottomColor: 'white',
	paddingBottom: 10,
	marginBottom: 20,
    },
    RecentActivityText: {
	textAlign: 'center',
	color: 'white',
	fontSize: 10,

    },
})
