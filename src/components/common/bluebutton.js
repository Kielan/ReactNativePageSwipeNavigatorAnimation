var React = require('react-native');
var {
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  View
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableNativeFeedback
        // style={styles.button}
        // background = {'gray'}
        onPress={this.props.onPress}
        >
        <View style={{backgroundColor: 'blue'}}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});