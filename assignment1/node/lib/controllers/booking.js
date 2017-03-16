'use strict';

const Models = require('../models/');

module.exports = {
  all: (request, reply) => {
    var options = {};

    if (request.query.limit)
      options['limit'] = request.query.limit;

    if (request.query.offset)
      options['offset'] = request.query.offset;

    if (request.query.sort) {
      var order_by = request.query.sort == 'DESC' ? 'DESC' : 'ASC';
      options['order'] = [['id', order_by]];
    }

    Models.Booking
      .findAll(options)
      .then((result) => {
       'use strict';
        reply({
            bookings: result
        }).code(200);
    });
  },
  find: (request, reply) => {
    Models.Booking
      .findOne({
        where: {
          id: request.params.id
        }
      })
      .then((result) => {
       'use strict';
        
        if (result) {
          reply({
              booking: result
          }).code(200);
        } else {
          reply({
              error: "not found"
          }).code(404);
        }
    });
  }
};

