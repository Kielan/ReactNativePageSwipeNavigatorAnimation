var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
} = React;

module.exports = React.createClass({
    render: function() {
	return (
		<View style={styles.SettingsListContainer}>
		<View style={styles.SettingsView}><Text style={styles.SettingsText}>SHARE KEZA</Text></View>
		<View style={styles.SettingsView}><Text style={styles.SettingsText}>CONTACT US</Text></View>
		<View style={styles.SettingsView}><Text style={styles.SettingsText}>VIEW FEES</Text></View>
		<View style={styles.SettingsView}><Text style={styles.SettingsText}>TERMS & CONDITIONS</Text></View>
	    </View>
	)
    }
})

const styles = StyleSheet.create({
    SettingsListContainer: {
	paddingTop: 100,
	borderBottomWidth: 1,
	borderBottomColor: 'red',
	alignSelf: 'stretch',
	justifyContent: 'flex-end',
	flex: 1,
	marginLeft: 25,
    },
    SettingsView: {
	flex: 1,
	borderBottomWidth: 1,
	marginTop: 10,
	paddingBottom: 10,
	borderBottomColor: 'white',
	
    },
    SettingsText: {
	color: 'white',
	fontSize: 10,
    }
})
