'use strict';

const expect = require('chai').expect;
const moment = require('moment');

const workday = require('../index');

describe('#isWorkday', function() {

    it('should return true from Monday to Friday, then otherwise', function() {
        const result = workday.isWeekday(new Date());

        const day = moment(new Date()).format('dddd');
        switch (day) {
            case 'Monday': expect(result).to.equal(true); break;
            case 'Tuesday': expect(result).to.equal(true); break;
            case 'Wednesday': expect(result).to.equal(true); break;
            case 'Thursday': expect(result).to.equal(true); break;
            case 'Friday': expect(result).to.equal(true); break;
            case 'Saturday': expect(result).to.equal(false); break;
            case 'Sunday': expect(result).to.equal(false); break;
            default: expect(result).to.equal(false);
        }
    });

});
