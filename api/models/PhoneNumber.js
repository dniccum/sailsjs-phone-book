/**
 * Number.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
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
      required: true,
      minLength: 3,
      maxLength: 30,
      defaultsTo: 'Work'
    },
    person: {
      model: 'person'
    }
  }
};
