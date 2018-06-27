# ember debugging

simple ember app to display a bug

there are two ways to add tags.
The first button adds a tag with `this.store.createRecord('tag', {name: '...', post});`
and the second sets the `post` after the createRecord.
Saving the tag and then deleting it will not work with the first button, but will work with the second.

I believe this is due to createRecord creating two `Model` instances for the same InternalModel in `getRecord`
Where the second button has time to set the record for the InternalModel so further getRecord calls will all share that one record.
