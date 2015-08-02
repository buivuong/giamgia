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

var Client_MessageCenter = require('client/messageCenter/components/core');
var Client_MessageCenter_Compose = require('client/messageCenter/components/compose');

var Client_Consultation = require('client/consultation/components/core');
var Client_Consultation_View = require('client/consultation/components/view');

var routes = (
    <Route handler={App} name="app" path="/">
        <Route handler={Client} name="client">
            <Route handler={Client_LoggedIn} name="client_loggedIn" path="loggedIn">
                <DefaultRoute handler={Client_Home}/>
                <Route handler={Client_Home} name="client_home" path="home"/>
                <Route handler={Client_MessageCenter} name="client_messageCenter" path="message-center">
                    <Route handler={Client_MessageCenter_Compose} name="client_messageCenter_compose" path="compose"/>
                </Route>
                <Route handler={Client_Consultation} name="client_consultation" path="consultation">
                    <DefaultRoute handler={Client_Consultation_View}/>
                    <Route handler={Client_Consultation_View} name="client_consultation_view" path="view"/>
                </Route>
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