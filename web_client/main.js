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
var DropLang = require('components/dropdown/DropLang');
var IntlMixin = ReactIntl.IntlMixin;
var Loader = require('components/loader/Common');

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

var Client = require('client/app');
var Client_Home = require('client/home/view');
var Client_Login = require('client/users/components/login/view');
var Client_Signup = require('client/users/components/signup/view');

var Client_Test = require('client/test/components/view');

var routes = (
    <Route handler={App} name="app" path="/">
        <DefaultRoute handler={Client_Home}/>
        <Route handler={Client} name="client">
            <DefaultRoute handler={Client_Home}/>
            <Route handler={Client_Home} name="client_home" path="home"/>
            <Route handler={Client_Login} name="client_login" path="login"/>
            <Route handler={Client_Signup} name="client_signup" path="signup"/>
            <Route handler={Client_Test} name="client_test" path="test"/>
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