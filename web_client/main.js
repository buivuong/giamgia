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

var Client_Appointment = require('client/appointment/components/core');
var Client_Appointment_View = require('client/appointment/components/view');

var Client_Register = require('client/user/components/register/view');

var Client_Session = require('client/session/components/core');
var Client_Session_Steps = require('client/session/components/steps/steps');

var Client_Login  = require('client/user/components/login/view');

var Client_My_Account = require('client/user/components/myAccount/core');
var Client_My_Account_View = require('client/user/components/myAccount/view');

var routes = (
    <Route handler={App} name="app" path="/">
        <Route handler={Client} name="client">
            <Route handler={Client_Register} name="client_register" path="register"/>
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
                <Route handler={Client_Appointment} name="client_appointment" path="appointment">
                    <DefaultRoute handler={Client_Appointment_View}/>
                    <Route handler={Client_Appointment_View} name="client_appointment_view" path="view"/>
                </Route>
                <Route handler={Client_Session} name="client_session" path="session">
                    <Route handler={Client_Session_Steps} name="client_session_steps" path="steps" />
                </Route>
                <Route handler={Client_My_Account} name="client_my_account" path="my-account" />
                    <Route handler={Client_My_Account_View} name="client_my_account_view" path="my-account-profile">
                </Route>
            </Route>
            <Route handler={Client_Login} name="client_login" path="login" />
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
    if(is.not.undefined(Cookies.get('client'))){
        var client = JSON.parse(Cookies.get('client'));
        $.ajaxSetup({
            beforeSend: function (jqXHR, settings) {
                if (settings.url.indexOf("/signalr") == -1)
                    jqXHR.setRequestHeader('Authorization', 'Bearer ' + client.guid);
                return true;
            }
        });
    } else {
        $.ajaxSetup({
            beforeSend: function (jqXHR, settings) {
                if (settings.url.indexOf("/signalr") == -1)
                    jqXHR.setRequestHeader('Authorization', '');
                return true;
            }
        });
    }
    CurrentHandler = Handler;
    renderApp(initData);
})