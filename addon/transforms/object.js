import DS from 'ember-data';
import { parseObject } from 'ember-transformer/utils/functions';

export default DS.Transform.extend({
  deserialize(serialized) {
    switch(typeof serialized) {
      case 'object':
        // Good to go...
      break;
      
      case 'boolean':
        serialized = {};
      break;
      
      case 'string':
        serialized = JSON.parse(serialized);
      break;
      
      default:
        console.log(
          "%c%s#deserialize invalid object type sent: %s",
          "color: purple", // http://www.w3schools.com/html/html_colornames.asp
          this.toString(),
          typeof serialized
        );
        
        return serialized;
    }
    
    serialized = parseObject(serialized);
    
    return serialized;
  },

  serialize(deserialized) {
    return deserialized;
  }
});
