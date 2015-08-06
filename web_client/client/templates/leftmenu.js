var Leftmenu = React.createClass({
	$root: null,
	pathName: '',
	contextTypes: {
		router: React.PropTypes.func
	},
	componentWillMount: function(){
		this.pathName = this.context.router.getCurrentPathname();
	},
	componentWillUnmount: function(){
		this.$root = null;
		this.pathName = '';
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));

		if(is.not.empty(this.pathName)  && is.not.undefined(this.pathName)){
			if(this.pathName.indexOf('consultation') !== -1 
				|| this.pathName.indexOf('health') !== -1){
				this.refs.myhealth.addClass('active');
			}
		}

		this.$root.find('a').live({
			mouseenter: function(){
				if($('body').hasClass('leftpanel-collapsed')){
					$(this).addClass('nav-hover');
					$(this).find('span').first().css({display: 'block'});
				}
			},
			mouseleave: function(){
				if($('body').hasClass('leftpanel-collapsed')){
					$(this).removeClass('nav-hover');
					$(this).find('span').first().css({display: 'none'});
				}
			}
		});
	},
	unCollapsed: function(){
		this.$root.find('a > span').css({display: 'inline-block'});
	},
	collapsed: function(){
		this.$root.find('a > span').css({display: 'none'});	
	},
	render: function(){
		return (
			<List className="nav nav-pills nav-stacked nav-bracket">
				<ListItem>
					<Link>
						<Image src="images/icon-home.png"/>
						<Span>Home</Span>
					</Link>
				</ListItem>
				<ListItem ref="myhealth">
					<Link>
						<Image src="images/icon-myheart.png"/>
						<Span>My Health</Span>
					</Link>
				</ListItem>
				<ListItem>
					<Link>
						<Image src="images/icon-mail.png"/>
						<Span>Message Center</Span>
					</Link>
				</ListItem>
				<ListItem>
					<Link>
						<Image src="images/icon-help-support.png"/>
						<Span>Help & Support</Span>
					</Link>
				</ListItem>
			</List>
		)
	}
});

module.exports = Leftmenu;