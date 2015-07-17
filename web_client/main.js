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

require('datetimepicker.css');
require('datetimepicker');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var initData = require('languages/gb');
var DropLang = require('components/dropdown/DropLang');
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

var Dev = require('dev/components/app');
var DevHome = require('dev/components/home');
var DevAdd = require('dev/components/add');

var Client = require('client/app');
var Client_Home = require('client/home/view');
var Client_Login = require('client/users/components/login');

var routes = (
    <Route handler={App} name="app" path="/">
        <DefaultRoute handler={Client_Home}/>
        <Route handler={Client} name="client">
            <DefaultRoute handler={Client_Home}/>
            <Route handler={Client_Home} name="client_home" path="home"/>
            <Route handler={Client_Login} name="client_login" path="login"/>
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