var Nerd = function (data) {  
    this.data = data;
}

Nerd.prototype.data = {}

Nerd.prototype.changeName = function (name) {  
    this.data.name = name;
}

Nerd.findById = function (id, callback) {  
    db.get('nerds', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Nerd(data));
    });
}

module.exports = Nerd;
