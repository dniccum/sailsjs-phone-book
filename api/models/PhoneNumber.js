/**
 * Number.js
 *
 * @description :: Server-side logic for managing phone numbers
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    phoneNumber: {
      type: 'string',
      required: true,
      minLength: 10,
      maxLength: 12
    },
    label: {
      type: 'string',
      minLength: 3,
      maxLength: 30,
      defaultsTo: 'Work'
    },
    person: {
      model: 'person'
    }
  }
};
