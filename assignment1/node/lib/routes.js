'use strict';

const Booker = require('./controllers/booker');
const Venue = require('./controllers/venue');
const Booking = require('./controllers/booking');

module.exports = [
  {
    method: 'GET',
    path: '/bookers',
    handler: Booker.all,
    config: {
      description: 'Gets all bookers'
    }
  },
  { 
    method: 'GET',
    path: '/booker/{id}',
    handler: Booker.find,
    config: {
      description: 'Get booker by id'
    }
  },
  {
    method: 'GET',
    path: '/venues',
    handler: Venue.all,
    config: {
      description: 'Gets all venues'
    }
  },
  { 
    method: 'GET',
    path: '/venue/{id}',
    handler: Venue.find,
    config: {
      description: 'Get venue by id'
    }
  },
  {
    method: 'GET',
    path: '/bookings',
    handler: Booking.all,
    config: {
      description: 'Gets all bookings'
    }
  },
  { 
    method: 'GET',
    path: '/booking/{id}',
    handler: Booking.find,
    config: {
      description: 'Get booking by id'
    }
  }
];
