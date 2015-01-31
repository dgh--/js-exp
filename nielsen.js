var leslie = {};
var nielsen = function (properties) {
    var that = {};
    var id_number = properties['id_number'];
    //that.name = properties['name'];
    that.say_name = function() {
        return properties.name;

    }
    this[id_number] = that;
}

nielsen.call(leslie, {'id_number':0, name:'Columbo'});
nielsen.call(leslie, {'id_number':1, name:'Airplane'});
nielsen.call(leslie, {'id_number':2, name:'The Naked Gun'});

console.info(leslie);

    
