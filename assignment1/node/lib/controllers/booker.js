'use strict';

const Models = require('../models/');

module.exports = {
  all: (request, reply) => {
    var options = {};
    // TODO: escape strings
    if (request.query.limit)
      options['limit'] = request.query.limit;

    if (request.query.offset)
      options['offset'] = request.query.offset;

    if (request.query.sort) {
      var order_by = request.query.sort == 'DESC' ? 'DESC' : 'ASC';
      options['order'] = [['id', order_by]];
    }

    Models.Booker
      .findAll(options)
      .then((result) => {
       'use strict';
        reply({
            bookers: result
        }).code(200);
    });
  },
  find: (request, reply) => {
    Models.Booker
      .findOne({
        where: {
          id: request.params.id
        }
      })
      .then((result) => {
       'use strict';
        if (result) {
          reply({
              booker: result
          }).code(200);
        } else {
          reply({
              error: "not found"
          }).code(404);
        }
    });
  }
};

