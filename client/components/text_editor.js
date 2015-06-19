var React = require('react');

var Editor = React.createClass({
	componentDidMount: function(){
		var root = $(React.findDOMNode(this));

		root.wysiwyg({
			toolbar: 'top-selection',
			buttons: {
				insertimage: {
                    title: 'Chọn ảnh',
                    image: '\uf030',
                    showselection: true
                }
			}
		});
	},
	render: function(){
		return (
			<textarea></textarea>
		)
	}
});

module.exports = Editor;