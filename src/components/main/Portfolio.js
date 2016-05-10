var React = require('react-native');

var {
    AppRegistry,
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    ListView,
    ScrollView,
} = React;

var PortfolioIndex = require('./PortfolioIndex');
var Parse = require('parse/react-native');
var Button = require('../common/button');
var blueButton = require('../common/bluebutton');

module.exports = React.createClass({
    getInitialState: function() {
	return {
	    walletAddress: null,
	    image: null,
	    dataSource: new ListView.DataSource({
		rowHasChanged: (row1, row2) => row1 !== row2,
		sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            }),
	    portfolioHeaderData: [{color: "#4973BC", name: "S&P500 US INDEX"},{color: "#36D9FC", name: "STOXX50 EURO INDEX"},{color: "#109DFA", name: "SHORT TERM LOAN INDEX", stake: "12%"},{color: "#67F687", name: "FTSE100 UK INDEX", stake: "10%"},{color: "#59C176", name: "TITANS 30 SWISS INDEX", stake: "10%"},{color: "#E58D58", name: "ASX200 AUS INDEX", stake: "10%"}],
	    portfolioListData: [{ data: {style: "AGGRESSIVE", expectedAPR: 7.3, description: "Keza Aggressive is more heavily invested in equities for a potential of higher return. With higher returns come higher risks"}},{data: {header: 'S&P500 US INDEX',stake: "48%", color: "#4973BC", colors: ["#273244", "#33486C"], holdings: [{name: "APPLE INC", stake: "3.85%"},{name:"MICROSOFT CORPORATION", stake: "2.06%"},{name: "EXXON MOBIL CORPORATION", stake: "1.78%"},{name: "JOHNSON & JOHNSON", stake: "1.5%"},{name: "GENERAL ELECTRIC COMPANY", stake: "1.48%"},{name: "BERKSHIRE HATHAWAY INC. CLASS B", stake: "1.42%"},{name: "WELLS FARGO & COMPANY", stake: "1.39%"},{name: "JMORGAN CHASE & COMPANY", stake: "1.31%"},{name: "FACEBOOK INC. CLASS A", stake: "1.26%"},{name: "AMAZON.COM INC.", stake: "1.2%"}]}},{data: {header: 'STOXX50 EURO INDEX', stake: "10%", color: "#36D9FC", colors: ["#297B8C", "#234B54"], holdings: [{name: "NOVARTIS AG", stake: "6.25%"},{name:"NESTLE S.A.", stake: "6.24%"},{name: "ROCHE HOLDING LTD. GENUSSSCH", stake: "4.79%"},{name: "HSBC HOLDINGS PLC", stake: "3.92%"},{name: "SANOFI", stake: "3.06%"},{name: "TOTAL SA", stake: "2.91%"},{name: "BAYER AG", stake: "2.84"},{name: "NOVO NORDISK A/S CLASS B", stake: "2.8%"},{name: "BRITISH AMERICAN TOBACCO PLC", stake: "2.71%"},{name: "GLAXOSMITHKLINE PLC", stake: "2.51%"}] }} ,{data: {header: "SHORT TERM LOAN INDEX", stake: "12%", color: "#109DFA", colors: ["#297B8C", "#297B8C"], holdings: [{name: "BITFINEX MARGIN FUNDING", stake: "94.45%"},{name:"BTCJAM GRADE A LOANS", stake: "4.55%"}]}}]

	};
    },
    componentDidMount: function() {
	//The first object in portfolioListData is unique for the prefix item
	//detailing the investment strategy
	//also all data needs to be nested because the top level indexes as every search section
	const Sections = this.state.portfolioListData;

	this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(Sections)
	});
    },
    renderPortfolio: function(rowData, sectionID, rowID) {
        //I should move the if case scenario of the block into the component.
	if(sectionID == 0) {
	    return (
		    <View style={styles.ListPrefixContainer}>
		    <Text style={styles.ListPrefixTitle}>{rowData.style}</Text>
		    <Text style={styles.ListPrefixSubTitle}>{rowData.expectedAPR}% expectedAPR</Text>
		    <Text style={styles.ListPrefixContent}>{rowData.description}</Text>
		    </View>
	    )
	} else {
	    return (
		    <View>
		    <PortfolioIndex sectionID={sectionID} data={rowData}/>
		    </View>
	    )
	}
    },
    renderSectionHeader: function(sectionData, sectionID) {
	if (sectionID == 0) {
	    	const PieChartInfo = this.state.portfolioHeaderData.map(function(holding, index) {
	    return (
		    <View style={styles.portfolioItem}>
		    <View style={[{backgroundColor: holding.color},styles.colorCircle]}/><Text style={styles.indexName}>{holding.name}</Text>
		    </View>
	    )
	})
	    return (
		    <View style={styles.chartContainer}>
		    <View style={styles.portfolioLayout}>
		    {PieChartInfo }
		</View>
		    </View>
	    )
	} else {
	    return (
		    <View style={styles.SectionHeaderContainer}>
		    <View style={styles.SectionHeaderLeft}>
		    <Text style={[styles.SectionHeaderTitle,{color: sectionData.data.color}]}>{sectionData.data.header}</Text>
		    <Text style={styles.SectionHeaderSubtitle}>MAJOR HOLDINGS</Text>
		    </View>
		    <View style={styles.SectionHeaderRight}> 
		    <Text style={[styles.SectionHeaderExposure,{color: sectionData.data.color}]}>{sectionData.data.stake}</Text>
		    </View>
		    </View>
	    )
	}

    },
    render: function() {
	const PieChartInfo = this.state.portfolioHeaderData.map(function(holding, index) {
	    return (
		    <View style={styles.portfolioItem}>
		    <View style={[{backgroundColor: holding.color},styles.colorCircle]}/><Text style={styles.indexName}>{holding.name}</Text>
		    </View>
	    )
	})
	
	const RenderPortfolioHeaderBlobForScrollView = this.state.portfolioListData.map(function(holding, index){
	    return (
		    <View style={styles.SectionHeaderContainer}>
		    <View style={styles.SectionHeaderLeft}>
		    <Text style={[styles.SectionHeaderTitle,{color: holding.data.color}]}>{holding.data.header}</Text>
		    <Text style={styles.SectionHeaderSubtitle}>MAJOR HOLDINGS</Text>
		    </View>
		    <View style={styles.SectionHeaderRight}> 
		    <Text style={[styles.SectionHeaderExposure,{color: holding.data.color}]}>{holding.data.stake}</Text>
		    </View>
		    </View>
	    )
	})

	const RenderPortfolioContentBlobForScrollView = this.state.portfolioListData.map(function(holding, index) {
	    return (
		    <View>
		    <PortfolioIndex sectionID={index} data={holding.data}/>
		    </View>
	    )
	})

	//<PieChart style={{flex:1}} data={this.getData()}/>
	/*

		<ScrollView >
		<Text>News</Text>
		{RenderPortfolioHeaderBlobForScrollView}
	    {RenderPortfolioContentBlobForScrollView}
	    </ScrollView>
	*/
	return (

		<ListView
	    style={styles.ListViewContainer}
	    dataSource={this.state.dataSource}
	    renderRow={this.renderPortfolio}
	    renderSectionHeader={this.renderSectionHeader}
	    onEndReachedThreshold={40}
		/>

	)	
    }
});


var styles = StyleSheet.create({
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
    SectionHeaderContainer: {
	paddingBottom: 10,
	borderBottomWidth: 1,
	borderBottomColor: 'yellow',
	flexDirection: 'row',
	alignItems: 'center',
    },
    SectionHeaderLeft: {
	marginLeft: 20,
	flex: 4,
    },
    SectionHeaderRight: {
	marginRight: 20,
	flex: 1,
    },
    SectionHeaderTitle: {
	fontSize: 16,
    },
    SectionHeaderSubtitle: {
	fontSize: 10,
	color: 'white',
    },
    SectionHeaderExposure: {
	fontSize: 18,
	textAlign: 'right',
    },
    header: {
	marginTop: 0,
    },
    portfolioLayout: {
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'space-between',
    },
    portfolioItem: {
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
    },
    colorCircle: {
	width: 10,
	height: 10,
	borderRadius: 10/2,
    },
    indexName: {
	flexDirection: 'row',
	textAlign: 'right',
	fontSize: 11,
	flex: 0.9,
	color: '#F8F8F8',
	marginRight: 10,
    },
    chartContainer: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	flex: 1,
	backgroundColor: '#1C1C1C',
	opacity: 1,
    },
    chart: {
	flex: 1,
    },
    container: {
	alignSelf: "stretch",
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
	marginTop: 0,
    },
    ListViewContainer: {
	alignSelf: 'stretch',
	flex: 1,
	backgroundColor: '#1C1C1C',
	paddingTop: 30,
    },
    ListPrefixContainer: {
	marginLeft: 20,
	marginRight: 20,
	marginBottom: 20,
	marginTop: 20,
    },
    ListPrefixTitle: {
	fontSize: 18,
	color: "orange",
    },
    ListPrefixSubTitle: {
	color: "white",
    },
    ListPrefixContent: {
	color: "white",
    },
});
