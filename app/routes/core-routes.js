var React = require('react/addons'),
    ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = function(app){
  app.get('/', function(req,res){
    //render to string generates markup from your component
    var reactHtml = React.renderToString(ReactApp({}));

    //render the html to the ejs template
    //console.log(reactHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
  });
};
