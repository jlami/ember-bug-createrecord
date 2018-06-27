
import DS from "ember-data";
const {attr, belongsTo/*, hasMany*/} = DS;
import Model from "ember-pouch/model";


export default Model.extend({
  name: attr('string'),
  
  post: belongsTo('post'),
});
