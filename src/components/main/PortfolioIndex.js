var React = require('react-native');

var {
    StyleSheet,
    Dimensions,
    Text,
    View
} = React;

module.exports = React.createClass({
    render: function() {
	let color1 = this.props.data.colors[0]
	let color2 = this.props.data.colors[1]

	const ListComponent = this.props.data.holdings.map(function(holding, index) {
	    let color = (index%2 == 0) ? color1 : color2;
	    return (
		    <View style={[{backgroundColor: color},styles.IndexTableRow]} key={index}>
		    <View style={styles.IndexTableItemName}>
		    <Text style={styles.IndexTableItemNameText}>{holding.name}</Text>
		    </View>
		    <View style={styles.IndexTableItemStake}>
		    <Text style={styles.IndexTableItemStakeText}>{holding.stake}</Text>
		    </View>
		    </View>
	    )
	})
	
	
	return (
		<View style={styles.IndexTableContainer}>
		{ListComponent}
	    </View>
	)
    }
});


const styles = StyleSheet.create({
    IndexTableContainer: {
	alignSelf: 'stretch',
	flexDirection: 'column',
	marginBottom: 20,
	marginLeft: 10,
	marginRight: 10,
	alignItems: 'stretch',
	justifyContent: 'center',
    },
    IndexTableRow: {
	flexDirection: 'row',
	flexWrap: 'nowrap',
	alignSelf: 'stretch',
	borderBottomWidth: 1,
	borderBottomColor: '#555',
	borderLeftWidth: 1,
	borderLeftColor: '#555',
	borderRightWidth: 1,
	borderRightColor: '#555',
	marginLeft: 10,
	marginRight: 10,
	alignItems: 'center',
	justifyContent: 'center',
    },
    IndexTableItemName: {
	flex: 4,
    },
    IndexTableItemNameText: {
	color: 'white',
    },
    IndexTableItemStake: {
	flex: 1,
    },
    IndexTableItemStakeText: {
	color: 'white',
	textAlign: 'right',
    },
});
