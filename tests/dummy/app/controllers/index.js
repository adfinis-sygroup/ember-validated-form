import Ember from 'ember';
import UserValidations from 'dummy/validations/user';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  UserValidations,

  colors: [
    { name: 'Red', color: 'red' },
    { name: 'Green', color: 'green' },
    { name: 'Blue', color: 'blue' }
  ],
  countries: ['United States', 'United Kingdom', 'Switzerland', 'Other'],
  genders: [
    {
      key: 'm',
      label: 'Male'
    },
    {
      key: 'f',
      label: 'Female'
    }
  ],

  /* eslint-disable no-console*/
  submit: task(function*(model) {
    console.log('saving', model);
    yield timeout(1000);
    console.log('saved!');
  }),

  actions: {
    cancel() {
      console.log('cancel');
    }
  }
});
