var NotFound = require('templates/notfound');

var NotFoundApp = React.createClass({
	onToggle: function(event){
		if(!this.refs.menutoogle.isCollapsed()){
			$('body').addClass('leftpanel-collapsed');
			this.refs.leftmenu.collapsed();
			this.refs.menutoogle.collapsed();
		}else{
			$('body').removeClass('leftpanel-collapsed');
			this.refs.leftmenu.unCollapsed();
			this.refs.menutoogle.unCollapsed();
		}
	},
	render: function(){
		return (
			<NotFound/>
		)
	}
});

module.exports = NotFoundApp;