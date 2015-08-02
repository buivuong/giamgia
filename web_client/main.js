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
var NotFoundRoute = Router.NotFoundRoute;

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
            <RouteHandler/>
        )
    }
});

var Client = require('client/app');
var Client_LoggedIn = require('client/loggedIn');
var Client_Home = require('client/home/components/home');
var Client_Notfound = require('client/notFound');

var routes = (
    <Route handler={App} name="app" path="/">
        <Route handler={Client} name="client">
            <Route handler={Client_LoggedIn} name="client_loggedIn" path="loggedIn">
                <DefaultRoute handler={Client_Home}/>
                <Route handler={Client_Home} name="client_home" path="home"/>
                <NotFoundRoute handler={Client_Notfound}/>
            </Route>
        </Route>
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