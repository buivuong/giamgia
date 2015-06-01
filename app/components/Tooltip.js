var Tooltip = {
	/* dom, content */
	open: function(field){
		$(field.dom).tipso({
            position: 'left',
            content: field.content,
            delay: 50,
            speed: 200,
            background: 'black',
            width: 'auto'
        });
	},
    hide: function(field){
        $(field.dom).tipso('hide');
    }
};

module.exports = Tooltip;