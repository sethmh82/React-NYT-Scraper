//fa04f54aaf1a421fac8f1fdf734fbd3e


var nytapi = {
  runQuery: function(keyword, start, end)  {
    return get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: 
      {
          'api-key': 'fa04f54aaf1a421fac8f1fdf734fbd3e',
          'q': keyword,
          'begin_date': start,
          'end_date': end
      }
})

    .then(function(results){
      return results.data.response;
    });
  },

  getSaved: function(){
    return get('/api/saved').then(function(results){
    return results;
    })
  },
}
module.exports = nytapi;
