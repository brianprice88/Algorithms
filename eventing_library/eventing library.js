var mixEvents = function(obj) {
  obj.events = {};
  obj.on = function(name, callback) {
  	callback = callback.bind(obj);
    if (!obj.events[name]) {obj.events[name] = []}
    obj.events[name].push(callback)
  }
  obj.trigger = function(name) {
    var args = [...arguments].slice(1)
    if (obj.events[name]) {
    for (var i = 0; i < obj.events[name].length; i++) {
      obj.events[name][i](args);
    }
    }
  }
  return obj;
};
