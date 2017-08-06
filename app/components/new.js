import React from "react";
import Router from "react-router";

var configure = require('./configure');

var Main = React.createClass({

  getInitialState: function(){
    return {
      newestArticles: ""
    }
  },

  componentDidMount: function(){

    configure.getSaved()
      .then(function(articleData){
        this.setState({
          newestArticle: articleData.data
        });

      }.bind(this))
  }
});

module.exports = Main;
