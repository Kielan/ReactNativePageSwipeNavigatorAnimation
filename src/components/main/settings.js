var React = require('react-native');
var {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
} = React;
var SettingsList = require('./SettingsList');
var SettingsFooter = require('./SettingsFooter');
module.exports = React.createClass({
    render: function() {
	return (
		<ScrollView style={styles.settingsScrollViewStyle} contentContainerStyle={styles.ImageContainer}>
		<Image source={require('../../assets/logo-diamond-white.png')} style={styles.logoImage}/>
		<SettingsList style={styles.settingsList}/>
		<SettingsFooter />
		</ScrollView>
	)
    }
})
const styles = StyleSheet.create({
    settingsScrollViewStyle: {
	paddingTop: 30,
	backgroundColor: '#1C1C1C',
	alignSelf: 'stretch',
	flexDirection: 'column',

    },
    ImageContainer: {
	justifyContent: 'center',
	alignItems: 'center',
	paddingTop: 100,
    },
    logoImage: {
	width: 100,
	height: 80,
    },
    settingsLogo: {
	flex: 1,
	alignSelf: 'center',
	justifyContent: 'center',
    },
    settingsList: {
    },
    SettingsFooter: {
    },
})
