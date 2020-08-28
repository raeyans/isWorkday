'use strict';

const moment = require('moment');

function compareDate(list, date) {
    if (list.length > 0) {
        let dt;

        for (let counter = 0; counter < list.length; counter++) {
            dt = moment(list[counter]);
            if (dt.isSame(date)) return false;
        }
    }

    return true;
}

exports.isWeekday = function(value, list = []) {
    let day = moment(value).format('YYYY-MM-DD');
    if (compareDate(list, day) === false) return false;

    day = moment(value).format('dddd');

    switch (day) {
        case 'Monday': return true; break;
        case 'Senin': return true; break;
        case 'Tuesday': return true; break;
        case 'Selasa': return true; break;
        case 'Wednesday': return true; break;
        case 'Rabu': return true; break;
        case 'Thursday': return true; break;
        case 'Kamis': return true; break;
        case 'Friday': return true; break;
        case 'Jumat': return true; break;
        default: return false;
    }

    return false;
}

exports.isWorkTime = function(value, openTime = 0, closeTime = 0) {
    const time = moment(value).hour();

    if ((openTime === 0) && (closeTime === 0)) return true;
    if ((time < openTime) || (time >= closeTime)) return false;
    return true;
}

exports.isWorking = function(value, openTime = 0, closeTime = 0) {
    if (isWeekday(value) === false) return false;
    if (isWorkTime(value, openTime, closeTime) === false) return false;

    return true;
}
