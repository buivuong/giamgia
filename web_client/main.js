require('jquery');
require('jquery-migrate');
require('jquery-serialize');
require('is_js');

require('all.css');

require('bootstrap');
require('cookies');
require('toggle');

require('wysiwyg-editor.css');
require('wysiwyg');
require('wysiwyg-editor');

require('jquery-mask-input');

require('datetimepicker.css');
require('datetimepicker');

require('select2.css');
require('select2');

require('spinner.css');
require('custom.css');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var Config = require('config');
var initData = require('languages/'+Config.lang);
var IntlMixin = ReactIntl.IntlMixin;

var App = React.createClass({
    mixins: [IntlMixin],
    contextTypes: {
        router: React.PropTypes.func
    },
    getInitialState: function(){
        return {locale: initData};
    },
    onLocaleChange: function(locale){
        this.setState({locale: locale});
        renderApp(locale);
    },
    onChangeLang: function(value){
        this.onLocaleChange(require('languages/'+value));
    },
    render: function(){
        return (
            <div>
                <RouteHandler/>
            </div>
        )
    }
});

var Test = require('test/test');

var routes = (
    <Route handler={App} name="app" path="/">
        <DefaultRoute handler={Test}/>
        <Route handler={Test} name="test"/>
    </Route>
);

var CurrentHandler = null;

function renderApp(locale){
    if(CurrentHandler){
        React.render(<CurrentHandler {...locale}/>, document.body);
    }
}

Router.run(routes, function(Handler){
    CurrentHandler = Handler;
    renderApp(initData);
})