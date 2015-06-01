var React = require('react');
var Validation = require('Validation');
var Config = require('Config');
var Map = require('Map');
var TagInput = require('TagInput');

var Form = React.createClass({
	propTypes: {
		setLoader: React.PropTypes.func
	},
	validation: {
		validName: {id: 'admin_shop_add_name', input: null}
	},
	getInitialState: function(){
		return {
			name: null,
			addresses: []
		}
	},
	onChangeName: function(event){
		if(!_.isUndefined(event))
			this.setState({name: event.target.value});
	},
	addAddress: function(){
		var address = {text: null, main: false, lat: Config.defaultMapLocation.lat, long: Config.defaultMapLocation.long};
		var addresses = $.extend([], this.state.addresses);
		addresses.push(address);
		this.setState({addresses: addresses});
	},
	removeAddress: function(i){
		var addresses = $.extend([], this.state.addresses);
		addresses.splice(i, 1);
		this.setState({addresses: addresses});
	},
	onChangeAddresses: function(i, event){
		var addresses = $.extend([], this.state.addresses);
		addresses[i].text = event.target.value;
		this.setState({addresses: addresses});
	},
	onFocusAddresses: function(i, event){
		if(!_.isEmpty(event.target.value))
			this.refs.address_map.loadMarkerWithAddress(event.target.value);
	},
	onEnterAddresses: function(i, event){
		if(event.keyCode == 13){
			console.log(event.target.value);
			event.preventDefault();
			if(!_.isEmpty(event.target.value))
				this.refs.address_map.loadMarkerWithAddress(event.target.value);
		}
	},
	componentWillMount: function(){
		var first_address = {text: null, main: true, lat: Config.defaultMapLocation.lat, long: Config.defaultMapLocation.long};
		this.setState({addresses: [first_address]});
	},
	componentDidMount: function(){
		this.refs.address_map.load({lat: this.state.addresses[0].lat, long: this.state.addresses[0].long});
	},
	render: function(){
		return (
			<form className="col s12">
				<div className="row margin">
					<div className="col s6">
						<div className="input-field col s12">
							<input id="admin_shop_add_name" type="text" value={this.state.name} onChange={this.onChangeName} maxLength="100" placeholder="Tên cửa hàng"/>
							<label htmlFor="admin_shop_add_name">Tên cửa hàng</label>
						</div>
					</div>
					<div className="col s6">
						<div className="input-field col s12">
							<TagInput idx="admin_shop_add_shop_tags"/>
						</div>
					</div>
				</div>
			</form>
			/*<span>
				<form className="col s12">
					<div className="row margin">
						<div className="col s12">
							<div className="input-field col s12">
								<input ref="test" type="text" defaultValue="tag1,tag2,tag3"/>
							</div>
						</div>
					</div>
					<div className="row margin">
						<div className="col s6">
							<h5>
								Các địa chỉ&nbsp;&nbsp;
								<a className="btn-floating btn-small waves-effect waves-light green"
									onClick={this.addAddress}>
									<i className="mdi-content-add"></i>
								</a>
							</h5>
							{
								this.state.addresses.map(function(address, i){
									if(address.main)
										var html = (
											<span key={i}>
												<div className="input-field col l8 m7 s6">
													<input id={"admin_shop_add_address_"+i} placeholder="Nhập tên đường, quận, không nhập thành phố" type="text"
														value={this.state.addresses[i].text} onChange={this.onChangeAddresses.bind(this, i)}
														onFocus={this.onFocusAddresses.bind(this, i)}
														onBlur={this.onFocusAddresses.bind(this, i)}
														onKeyDown={this.onEnterAddresses.bind(this, i)} />
												</div>
												<div className="input-field col l4 m5 s6">
													<select className="browser-default">
														<option value="HCM">TPHCM</option>
														<option value="HN">Hà Nội</option>
														<option value="ĐN">Đà Nẵng</option>
													</select>
												</div>
											</span>
										)
									else
										var html = (
											<div className="input-field col s9" style={{position: 'relative'}} key={i}>
												<i className="normal mdi-content-remove-circle-outline"
													style={{position: 'absolute', top: '1em', left: '-1em'}}
													onClick={this.removeAddress.bind(this, i)}>
												</i>
												<input id={"admin_shop_add_address_"+i} placeholder="Nhập tên đường, quận, không nhập thành phố" type="text"
													onFocus={this.onFocusAddresses.bind(this, i)}
													onBlur={this.onFocusAddresses.bind(this, i)}
													onKeyDown={this.onEnterAddresses.bind(this, i)} />
											</div>
										);

									return html;
								}, this)
							}
						</div>
						<div className="col s6">
							<Map ref="address_map"/>
						</div>
					</div>
				</form>
			</span>*/
		);
	}
});

module.exports = Form;