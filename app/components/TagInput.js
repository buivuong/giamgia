var React = require('react');
var config = require('Config');

var baseUrl = config.baseServerUrlAdmin+'shop_tags/';

var TagInput = React.createClass({
	propTypes: {
		idx: React.PropTypes.string
	},
	getInitialState: function(){
		return {
			tag_items: [],
			pre_list: []
		}
	},
	pre_list: [],
	componentWillMount: function(){
		$.get(baseUrl+'all')
		.done(function(response){
			this.pre_list = response.data;
		}.bind(this))
		.fail(function(error){})
	},
	onChangeTag: function(event){
		$(React.findDOMNode(this.refs.input)).attr('size', event.target.value.length);

		var pre_list = this.filterTagItems(event.target.value);

		if(pre_list.length === 0){
			$(this.getDOMNode()).find('.tt-dropdown-menu').css({display: 'none'});
		}else{
			$(this.getDOMNode()).find('.tt-dropdown-menu').css({display: 'block'});
		}

		this.setState({pre_list: pre_list});
	},
	checkSameTagItem: function(item){
		var flag = false;

		for(var i = 0; i < this.state.tag_items.length; i++){
			if(this.state.tag_items[i].text === item){
				flag = true;
				break;
			}
		}
		return flag;
	},
	filterTagItems: function(item){
		var return_array = [];
		for(var i = 0; i < this.pre_list.length; i++){
			if(this.pre_list[i].name.toString().indexOf(item) !== -1)
				return_array.push(this.pre_list[i]);
		}

		return return_array;
	},
	onChangeKeyDownTag: function(event){
		if(event.keyCode === 13){
			if(!_.isEmpty(event.target.value.toString().trim())){
				if(!this.checkSameTagItem(event.target.value)){
					var tag_item = {text: event.target.value};
					var tag_items = $.extend([], this.state.tag_items);
					tag_items.push(tag_item);
					$(React.findDOMNode(this.refs.input)).val('');
					this.setState({tag_items: tag_items});
				}else
					$(React.findDOMNode(this.refs.input)).val('');
				
			}
		}else if(event.keyCode === 8){
			if(_.isEmpty(event.target.value))
				this.removeTag(null, this.state.tag_items.length-1);
		}
	},
	componentDidMount: function(){
		$(this.getDOMNode()).on('click', function(event){
			$(React.findDOMNode(this.refs.input)).focus();
		}.bind(this))
	},
	removeTag: function(event, i){
		var tag_items = $.extend([], this.state.tag_items);
		tag_items.splice(i, 1);
		this.setState({tag_items: tag_items});
	},
	render: function(){


		return (
			<span>
				<div className="materialize-tags">
					{
						this.state.tag_items.map(function(tag_item, i){
							return (<span className="tag badge" key={i}>
										{tag_item.text}
										<span className="mdi-content-clear right" data-role="remove" 
											onClick={this.removeTag.bind(this, i)} id={this.props.idx+'_'+i}/>
									</span>);
						}, this)
					}
					<input type="text" ref="input" placeholder="" size="1" onChange={this.onChangeTag} onKeyDown={this.onChangeKeyDownTag}/>
					<div className="tt-dropdown-menu" style={{display: 'none'}}>
					{
						this.state.pre_list.map(function(l, i){
							return (
								<div className="tt-suggestion" key={i}>
									{l.name}
								</div>
							);
						})
					}
					</div>
				</div>
	            <input type="text" id={this.props.idx} placeholder="" style={{display: 'none'}}/>
	        </span>
		);
	}
});
/* END MAIN MODULE */

module.exports = TagInput;