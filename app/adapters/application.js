import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from '../config/environment';

export default Adapter.extend({
  init() {
    this._super(...arguments);
    
    let localDb = config.emberPouch.localDb;
  
    let db = new PouchDB(localDb, config.emberPouch.localDbOptions);

    this.set('db', db);
  },
});
