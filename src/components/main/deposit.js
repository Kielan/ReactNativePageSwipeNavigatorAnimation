var React = require('react-native');
var {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
} = React;

var Parse = require('parse/react-native');
var Button = require('../common/button');
var blueButton = require('../common/bluebutton');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      walletAddress: null,
      image: null,
  	};
  },
  componentWillMount: function() {
    Parse.User.currentAsync()
      .then((user) => { 
      	var wallet = user.get('address');
      	var imageLink = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=bitcoin:${wallet}`;
      	console.log("wallet", wallet);
      	console.log("image: ", imageLink);
      	this.setState({image: imageLink});
      	this.setState({walletAddress: wallet});
        console.log("imagezzz: ", this.state.image);
     })
  	 },
  render: function() {
    if (!this.state.walletAddress) {
      return <Text>Loading...</Text>;
    }
    var wallet = this.state.walletAddress;
    console.log("wallet is", wallet);
    var image = this.state.image;
    console.log("image is", image);
    // var imageURL = image.url();
    // console.log("imageURL", imageURL);

    return (
      <View style={styles.container}>
        <Text>Total Deposited</Text>
        <Button text={'Back Arrow'} onPress={this.mainScreen} />
        <Text>Use Your Bitcoin Wallet</Text>
        <Text> {wallet} </Text>
 		<Image source={{uri: 'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=bitcoin:3MZGWUfarZBYxwNdUbA2f7ofRi2k4LpLX3'}} style={{width: 50, height: 50}}  />
        <Button text={'Open Wallet'} onPress={this.openWallet} />
      </View>
    );
  }, openWallet: function () {
  	//insert bitcoin uri call
  }, mainScreen: function () {
  	// this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]);
  	// this.props.navigator.push({name: 'tweets'});
  	this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
   pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
});
