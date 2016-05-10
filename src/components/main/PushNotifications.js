var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
} = React;


module.exports = React.createClass({
    render: function() {
	return (
		<View style={styles.PushNotificationsContainer}>
		<Text style={styles.PushNotificationsTitle}>PUSH NOTIFICATIONS</Text>
		<Text style={styles.PushNotificationsTextContent}>Keza uses push notifications to send you events and updates, such as deposits.</Text>
		<View style={styles.EnableNotificationsContainer}><Text style={styles.EnableNotificationsContent}>ENABLE NOTIFICATIONS</Text></View>
		</View>
	)
    }
})

const styles = StyleSheet.create({
    PushNotificationsContainer: {
	paddingTop: 10,
	marginLeft: 20,
	marginRight: 20,
	borderRadius: 5,
	borderWidth: 1,
	borderColor: 'white',
    },
    PushNotificationsTitle: {
	textAlign: 'center',
	color: 'white',
	fontSize: 10,
	marginBottom: 5,
    },
    PushNotificationsTextContent: {
	color: 'white',
	textAlign: 'center',
	fontSize: 10,
	marginBottom: 20,
	marginLeft: 30,
	marginRight: 30,
    },
    EnableNotificationsContainer: {
	borderTopWidth: 1,
	borderTopColor: 'white',
	paddingTop: 5,
	paddingBottom: 5,
    },
    EnableNotificationsContent: {
	fontSize: 11,
	color: 'white',
	textAlign: 'center',
    },
})
