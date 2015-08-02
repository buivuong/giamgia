var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var IntlMixin = ReactIntl.IntlMixin;

var App = React.createClass({
    mixins: [IntlMixin],
    render: function(){
        return (
            <RouteHandler/>
        )
    }
});

module.exports = App;