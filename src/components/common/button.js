const React = require('react-native')
const {
    Text,
    StyleSheet,
    TouchableHighlight
} = React

module.exports = React.createClass({
    render: function() {
	return(
		<TouchableHighlight
	    style={[styles.button,{backgroundColor: this.props.btnColor}]}
	    underlayColor={'gray'}
	    onPress={this.props.onPress}>
		<Text style={styles.buttonText}>
		{this.props.text}
            </Text>
		</TouchableHighlight>
	)
    }
})

const styles = StyleSheet.create({
    button: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: 5,
	padding: 5,
	marginTop: 10,
	marginLeft: 10,
	marginRight: 10,
    },
    buttonText: {
	flex: 1,
	alignSelf: 'center',
	fontSize: 20,
	color: 'white',
    }
})
