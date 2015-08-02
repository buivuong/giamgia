var NotFound = React.createClass({
	render: function(){
		return (
			<Span>
				<Breadcrump className="quicklink-box">
					<Link className="color-grey">
						Home
					</Link>
					<Link className="quicklink color-grey">
						404
					</Link>
				</Breadcrump>

				<Panel className="text-center padding-top-6x padding-bottom-6x">
					<Title type="h1" className="color-main fontsize-60px">
						<Bold>404</Bold>
					</Title>
					<Title type="h3" className="fontsize-36px">
						File not found
					</Title>
					<Sentence>The site configured at this address does not contain the requested file.</Sentence>
					<Sentence>If this is your site, make sure that the filename case matches the URL.</Sentence>
					<Sentence className="margin-top-4x font-size-18px"><Bold>Please refer to the menu!</Bold></Sentence>
				</Panel>
			</Span>
		)
	}
});

module.exports = NotFound;