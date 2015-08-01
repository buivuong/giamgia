var Pagination = React.createClass({
	listCount: 0,
	pages: 0,
	prev: null,
	next: null,
	page: 1,
	propTypes: {
		listCount: React.PropTypes.number,
		listDisplay: React.PropTypes.number,
		onClickPage: React.PropTypes.func
	},
	componentDidMount: function(){
		this.pages = 0;
		this.listCount = 0;
		this.prev = $(React.findDOMNode(this.refs.prev));
		this.next = $(React.findDOMNode(this.refs.next));

		if(this.listCount > 0 && this.listDisplay > 0){
			this.pages = Math.ceil(nextProps.listCount/nextProps.listDisplay);
		}else{
			this.prev.attr('disabled', true);
			this.next.attr('disabled', true);
		}
	},
	componentWillReceiveProps: function(nextProps){
		if(nextProps.listCount !== this.listCount){
			this.listCount = nextProps.listCount;
			this.pages = Math.ceil(nextProps.listCount/nextProps.listDisplay);

			if(this.pages > 1){
				this.next.attr('disabled', false);
			}
		}
	},
	onPage: function(type, event){
		switch(type){
			case 'prev':
				if(this.page === this.pages)
					this.next.attr('disabled', false);

				if(this.page === 2){
					this.prev.attr('disabled', true);
				}

				this.page--;
				break;
			case 'next':
				if(this.page === 1)
					this.prev.attr('disabled', false);

				if(this.page === this.pages-1)
					this.next.attr('disabled', true);

				this.page++;
				break;
		}

		this.props.onClickPage(this.page);
	},
	render: function(){
		return (
			<div className="btn-group">
                <button className="btn btn-sm btn-white" ref="prev" onClick={this.onPage.bind(this, 'prev')}>
                	<i className="glyphicon glyphicon-chevron-left"/>
                </button>
                <button className="btn btn-sm btn-white" ref="next" onClick={this.onPage.bind(this, 'next')}>
                	<i className="glyphicon glyphicon-chevron-right"/>
                </button>
            </div>
		)
	}
});

module.exports = Pagination;