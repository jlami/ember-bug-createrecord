import Controller from '@ember/controller';
import {filterBy} from '@ember/object/computed';

export default Controller.extend({
  filtered: filterBy('model.tags', 'isDeleted', false),
});
  