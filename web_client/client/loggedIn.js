var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var IntlMixin = ReactIntl.IntlMixin;

var Leftmenu = require('templates/leftmenu');
var AppFooter = require('templates/footer');
var HeaderBar = require('templates/headerbar');

var LoggedIn = React.createClass({
    mixins: [IntlMixin],
    onToggle: function(){
        if(!this.refs.menutoogle.isCollapsed()){
            $('body').addClass('leftpanel-collapsed');
            this.refs.menutoogle.collapsed();
            this.refs.leftmenu.collapsed();
        }else{
            $('body').removeClass('leftpanel-collapsed');
            this.refs.menutoogle.unCollapsed();
            this.refs.leftmenu.unCollapsed();
        }
    },
    render: function(){
        return (
            <Section>
                <Panel className="leftpanel">
                    <Panel className="logopanel">
                        <Image src="images/logo-1.png" style={{width: '210', height: '38'}}/>
                    </Panel>
                    <Inner className="leftpanelinner">
                        <Leftmenu ref="leftmenu"/>
                    </Inner>
                </Panel>
                <Panel className="mainpanel">

                    <HeaderBar>
                        <MenuToggle onClick={this.onToggle} ref="menutoogle"/>
                    </HeaderBar>

                    <RouteHandler/>

                    <AppFooter/>

                </Panel>
            </Section>
        )
    }
});

module.exports = LoggedIn;