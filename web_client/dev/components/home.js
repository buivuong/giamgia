var DevsStore = require('dev/stores/DevsStore');
var DevsActions = require('dev/actions/DevsActions');
var LocalVideo = require('components/webrtc/LocalVideo');
var IntlMixin = ReactIntl.IntlMixin;

var Home = React.createClass({
	start: function(){
		this.refs.local_video.start();
	},
	call: function(){
		this.refs.local_video.call();
	},
	render: function(){
		return (
			<div className="ui grid">
				<div className="eight wide column">
					<LocalVideo ref="local_video"/>
				</div>
				<div className="eight wide column">
					<video autoPlay id="manh"/>
				</div>
				<button onClick={this.start}>Bắt đầu</button>
				<button onClick={this.call}>Gọi</button>
				<button>Cúp</button>
			</div>
		)
	}
});






var Home1 = React.createClass({
	mixins: [IntlMixin],
	contextTypes: {
		router: React.PropTypes.func
	},
	getInitialState: function(){
		return {
			devs: [],
			dev: {}
		}
	},
	componentDidMount: function(){
		DevsActions.list.triggerPromise()
		.then(function(response){
			this.setState({devs: response.data});
		}.bind(this))
		.catch(function(err){

		})
	},
	goToAdd: function(){
		this.context.router.transitionTo('dev_add');
	},
	showDetail: function(id, event){
		var dev = DevsStore.getDev(id);
		this.setState({dev: dev});
	},
	onChangeSearch: function(event){
		if(event.keyCode === 13){
			var devs = DevsStore.getSearch(event.target.value);
			this.setState({devs: devs});
		}
	},
	render: function(){
		var ListDevsName = this.state.devs.map(function(dev, index){
			return <li key={index}><a onClick={this.showDetail.bind(this, dev.id)}>{dev.name}</a></li>
		}.bind(this));

		return (
			<div className="ui grid">
				<div className="three wide column">
					<div className="ui segment">
						<div className="ui fluid button" onClick={this.goToAdd}>
							Thêm
						</div>
						<br/>
						<div className="ui small fluid input">
							<input onKeyDown={this.onChangeSearch} placeholder="Tìm kiếm"/>
						</div>
						<ul>
							{ListDevsName}
						</ul>
					</div>
				</div>
				<div className="thirteen wide column">
					<div className="ui segment">
						<div dangerouslySetInnerHTML={{__html: this.state.dev.content}}/>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Home;