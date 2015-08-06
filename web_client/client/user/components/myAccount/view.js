var MyAccount = require('client/templates/myAccount');
var View  = React.createClass({
	onClickTab: function(keyRef){
		console.log(keyRef);
	},
	render: function(){
		return (
			<div>
				<Wrap className="general-wrap">
					<MyAccount ref="myAccount" onClickTab={this.onClickTab}/>
				</Wrap>
			</div>
			);
	}
});
module.exports = View;