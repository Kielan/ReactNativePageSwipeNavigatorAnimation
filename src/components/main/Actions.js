var React = require('react-native');
var {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
} = React;
var Button = require('../common/button');
var PushNotifications = require('./PushNotifications');
var RecentActivity = require('./RecentActivity');

module.exports = React.createClass({
    render: function() {
	return (
		<View style={styles.ActionsContainer}>
		<View style={styles.ActionsButtonsContainer}>
		<Button style={styles.ActionsButton} text="WITHDRAW" btnColor="#423282"/>
		<Button style={styles.ActionsButton} text="DEPOSIT" btnColor="#17dd74"/>
		</View>
		<PushNotifications />
		<RecentActivity style={styles.RecentActivityComponent}/>
	    </View>
	)
    }
})

const styles = StyleSheet.create({
    ActionsContainer: {
	flex: 1,
	flexDirection: 'column',
	paddingTop: 35,
	alignSelf: 'stretch',
	backgroundColor: '#1C1C1C',
    },
    ActionsButtonsContainer: {
	justifyContent: 'space-between',
	flexDirection: 'row',
	marginRight: 10,
	marginLeft: 10,
	marginBottom: 15,
    },
    ActionsButton: {
	flex: 1,
    },
    RecentActivityComponent: {
	marginTop: 20,
	paddingTop: 20,
    }
})
