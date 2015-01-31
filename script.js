var Button = function (properties) {
	// dict args reqd: dom_object 
	var that = {}, id;
	that.id = $(properties.dom_object).attr('id');
	that.dom_object= properties.dom_object;
	that.position = $(that.dom_object).attr('position');
	that.hide = function() {
		if that['position'] === 'top' {
			$(that.dom_object).html('Up');
			//$(that.dom_object).next('[data-hidden="element"]').slideUp('fast');
		} else if that['position'] === 'bottom' {
			$(that.dom_object).html('Down');
            //$(that.dom_object).next('[data-hidden="element"]').slideDown('fast');
		}
		var index = this['displayed_lists'].indexOf(that['id']);
		if (index > -1) {
			this['displayed_lists'].splice(index, 1);
		}
	};
	that.show = function() {
		if that[position] === 'top' {
			$(that.dom_object).html('Down');
            //$(that.dom_object).next('[data-hidden="element"]').slideDown('fast');
		} else if that[position] === 'bottom' {
			$(that.dom_object).html('Up');
			//$(that.dom_object).next('[data-hidden="element"]').slideUp('fast');
		}
		this['displayed_lists'].push(that.id);
	};
	this[id] = that;
}

var toggleControls = (function() {
	var buttons = {};
	// create instance of Button where this === buttons
	var button_helper_func = Button.bind(buttons);
	buttons['displayed_lists'] = [];
	var selector = '.box'; // Will's selector was:
	// var selector = '[data-hidden="control"]';
	var data_hidden_controls = $(selector);
	var current_element;
	for (var i = 0; i < data_hidden_controls.length; i++) {
		current_element = data_hidden_controls[i]
		//Button.call(buttons, {'dom_object': current_element});
		button_helper_func({'dom_object': current_element});
	}
	return function() {
		var id = $(this).attr('id');

		if (displayed_lists.length > 0) {
			for (var i = 0; i < displayed_lists.length; i++) {
				buttons[displayed_lists[i]].hide();
			}
		}
		buttons[id].show();
	}
})();

$('[data-hidden="control"]').on('click', toggleControls);
$('.box').on('click', toggleControls);