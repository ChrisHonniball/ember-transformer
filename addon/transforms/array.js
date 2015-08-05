import DS from 'ember-data';
import { parseArray } from 'ember-transformer/utils/functions';

export default DS.Transform.extend({
  deserialize(serialized) {
    if(!serialized) {
      return serialized;
    }
    
    serialized = parseArray(serialized);
    
    return serialized;
  },

  serialize(deserialized) {
    return deserialized;
  }
});
