var LabelError = require('components/label/LabelError');
var Valid = require('valid');

var FormRTE = React.createClass({
	$root: null,
    focus: 0,
    isClickedForm: 0,
	propTypes: {
		label: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		required: React.PropTypes.bool,
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));

		var placeholder = (is.undefined(this.props.placeholder))?this.props.label:this.props.placeholder;

		if(this.props.required)
			this.$root.addClass('required');

		this.$root.find('textarea').wysiwyg({
            onKeyUp: function(key, character, shiftkey, altkey, ctrlkey, metakey){
                var html = this.$root.find('textarea').wysiwyg('shell').getHTML();

                if(this.focus || this.isClickedForm){
                    var error = Valid.getClientError(this.props.validate, html);
                    if(is.not.empty(error)){
                        this.addError(error);
                    }else{
                        this.clearError();
                    }
                }
            }.bind(this),
			toolbar: 'top',
			buttons: {
				bold: {
					title: 'Bold (Ctrl+B)',
					image: '\uf032',
					hotkey: 'b'
				},
				italic: {
                    title: 'Italic (Ctrl+I)',
                    image: '\uf033',
                    hotkey: 'i'
                },
                underline: {
                    title: 'Underline (Ctrl+U)',
                    image: '\uf0cd',
                    hotkey: 'u'
                },
                strikethrough: {
                    title: 'Strikethrough (Ctrl+S)',
                    image: '\uf0cc',
                    hotkey: 's'
                },
                forecolor: {
                    title: 'Text color',
                    image: '\uf1fc'
                },
                highlight: {
                    title: 'Background color',
                    image: '\uf043'
                },
                alignleft: {
                    title: 'Left',
                    image: '\uf036',
                },
                aligncenter: {
                    title: 'Center',
                    image: '\uf037'
                },
                alignright: {
                    title: 'Right',
                    image: '\uf038'
                },
                alignjustify: {
                    title: 'Justify',
                    image: '\uf039'
                },
                subscript: {
                    title: 'Subscript',
                    image: '\uf12c'
                },
                superscript: {
                    title: 'Superscript',
                    image: '\uf12b'
                },
                indent: {
                    title: 'Indent',
                    image: '\uf03c'
                },
                outdent: {
                    title: 'Outdent',
                    image: '\uf03b'
                },
                orderedList: {
                    title: 'Ordered list',
                    image: '\uf0cb'
                },
                unorderedList: {
                    title: 'Unordered list',
                    image: '\uf0ca'
                },
                removeformat: {
                    title: 'Remove format',
                    image: '\uf12d'
                }
			},
			submit: {
                title: 'Submit',
                image: '\uf00c'
            }
		});
	},
    getHTML: function(){
        return this.$root.find('textarea').wysiwyg('shell').getHTML();
    },
    clear: function(){
        this.$root.find('textarea').wysiwyg('shell').setHTML('');
    },
    clearError: function(){
        this.$root.removeClass('error');
        this.refs.label_error.hide();
    },
    addError: function(message){
        this.$root.addClass('error');
        this.refs.label_error.open(message);
    },
    onFocusInput: function(event){
        this.focus = 1;
        return this.focus;
    },
    clickForm: function(){
        this.isClickedForm = 1;
    },
	render: function(){
        var placeholder = (is.undefined(this.props.placeholder))?this.props.label:this.props.placeholder;

		return (
			<div className="field">
        		<label>{this.props.label}</label>
				<textarea onFocus={this.onFocusInput} placeholder={placeholder}/>
                <LabelError message="" ref="label_error"/>
			</div>
		)
	}
});

module.exports = FormRTE;