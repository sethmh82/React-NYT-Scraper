import React from "react";
import Router from "react-router";
var Run = require('./run');
var Results = require('./results');
var nytapi = require('./nytapi');
var Search = React.createClass({

  getInitialState: function() {
    return {
      queryTerm: "",
      startYear: "",
      endYear: "",
      results: {}
    }
  },

  componentDidUpdate: function(prevProps, prevState)  {


    if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear))
    {
      nytapi.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear).then(function(data)  {
        if (data != this.state.results)
        { this.setState({ results: data }) } }.bind(this))
    }
  },

  setQuery: function(newQuery, newStart, newEnd){
    this.setState({
      queryTerm: newQuery,
      startYear: newStart,
      endYear: newEnd
    })
  },

  render: function(){
    return(
      <div className="main-container">
        <Query updateSearch={this.setQuery} />
        <Results results={this.state.results}/>
      </div>

    )
  }
});

module.exports = Search;
