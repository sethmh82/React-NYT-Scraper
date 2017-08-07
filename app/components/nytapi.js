// SETH'S NYT API KEY
//fa04f54aaf1a421fac8f1fdf734fbd3e
var nytkey = 'fa04f54aaf1a421fac8f1fdf734fbd3e';
var scraper = require('axios');
var nytapi = {
  runQuery: function(keyword, start, end)  {

    var keyword = keyword.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";

    return scraper.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': nytkey,
          'q': keyword,
          'begin_date': start,
          'end_date': end
      }
    }).then(function(results){
      return results.data.response;
    });
  },

  getSaved: function(){
    return scraper.get('/api/saved')
      .then(function(results){

        return results;
      })
  },

  postSaved: function(title, date, url){

    var newArticle = {title: title, date: date, url: url};
    return scraper.post('/api/saved', newArticle)
      .then(function(results){
        return results._id;
      })

  },

  deleteSaved: function(title, data, url){

    return scraper.delete('/api/saved', {
      params: {
          'title': title,
          'data': data,
          'url': url,
      }
    })
    .then(function(results){
      return results;
    })
  }

}

module.exports = nytapi;
