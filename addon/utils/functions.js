import Ember from 'ember';

function parseObject(obj) {
  // Loop through object and create items as necessary
  for(var prop in obj){
    if( !obj.hasOwnProperty(prop) ){ continue; }
    switch(Object.prototype.toString.call(obj[prop])) {
      case '[object Object]':
        obj[prop] = parseObject(obj[prop]);
      break;

      case '[object Array]':
        obj[prop] = parseArray(obj[prop]);
      break;

      default:
        // Don't alter the item.
      break;
    }
  }
  
  return Ember.Object.create(obj);
}

function parseArray(array) {
  array.forEach(function(item, _i) {
    switch(Object.prototype.toString.call(array[_i])) {
      case '[object Object]':
        array[_i] = parseObject(array[_i]);
      break;

      case '[object Array]':
        array[_i] = parseArray(array[_i]);
      break;

      default:
        // Don't alter the item.
      break;
    }
  });
  
  return array;
}

export { parseObject, parseArray };
