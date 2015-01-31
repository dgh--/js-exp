/*
var Button = {
    shown : false,
    toggle : function () {
        this.shown = !(this.shown);
    }
};
*/

var Button = function (properties) {

    var that = {};

    that.position = properties['position'],
    that.id = properties['id'],
    that.id_number =  properties['id_number'],
    that.shown = false,
    that.toggle = function() {
        this.shown= !(this.shown);
        console.info(this.shown);
    }

    return that;
}

var fuckbutton = Button({
    'position': 'top',
    'id': 'object-1',
    'id_number': 1
});



fuckbutton.toggle();
fuckbutton.toggle();
fuckbutton.toggle();

