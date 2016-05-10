var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
} = React;

module.exports = React.createClass({
    render: function() {
	return (
		<View style={styles.SettingsFooterContainer}>
		<View style={styles.SettingsFooterTextContainer}>
		<Text style={styles.SettingsFooterText}>LOG OUT - KI.LEMONS@GMAIL.COM</Text>
		</View>
		</View>
	)
    }
})

const styles = StyleSheet.create({
    SettingsFooterContainer: {
	flex: 1,
	alignSelf: 'stretch',
	marginTop: 40,
	borderTopWidth: 1,
	borderTopColor: 'white',
    },
    SettingsFooterTextContainer: {
	marginTop: 25,
	marginLeft: 25,
	paddingBottom: 15,
	justifyContent: 'flex-end',
	borderBottomWidth: 1,
	borderBottomColor: 'white',
    },
    SettingsFooterText: {
	color: 'white',
	fontSize: 9,
    },
})
