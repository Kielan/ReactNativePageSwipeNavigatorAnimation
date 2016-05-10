var React = require('react-native');

var {
    StyleSheet,
    Navigator
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Home = require('./components/main/home');

var ROUTES = {
    signin: Signin,
    signup: Signup,
    home: Home,
};

module.exports = React.createClass({
    componentWillMount: function() {
	Parse.initialize("sObeqCovKFUbZMYfpN6983oY0cWAJuaBllOx3NWT", "A9B4W8RRwSEjhKx7cMhmJR60Rk72sKCOOqrgVVCD");
    },
    renderScene: function(route, navigator) {
	console.log('route', route, 'navigator', navigator)
	var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
	return <Component route={route} navigator={navigator} />;
    },
    render: function() {
	return (
		<Navigator
            style={styles.container}
            initialRoute={{name: 'signin'}}
            renderScene={this.renderScene}
            configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
		/>
	);
    }
});

var styles = StyleSheet.create({
    container: {
	flex: 1
    }
});
