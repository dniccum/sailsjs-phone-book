/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 30
    },
    company: {
      type: 'string',
      minLength: 2,
      maxLength: 30
    },
    phoneNumbers: {
      collection: 'phoneNumber',
      via: 'person'
    }
  }
};
