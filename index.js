'use strict';

const moment = require('moment');

// class WorkingTime {
//     constructor(open, close, isUse) {
//         this.open = open;
//         this.close = close;
//         this.isUse = isUse;
//     }
// }
//
// var wt, workday = {};

// function isWeekday(value) {
//     const day = moment(value).format('dddd');
//
//     switch (day) {
//         case 'Monday': return true; break;
//         case 'Senin': return true; break;
//         case 'Tuesday': return true; break;
//         case 'Selasa': return true; break;
//         case 'Wednesday': return true; break;
//         case 'Rabu': return true; break;
//         case 'Thursday': return true; break;
//         case 'Kamis': return true; break;
//         case 'Friday': return true; break;
//         case 'Jumat': return true; break;
//         default: return false;
//     }
//
//     return false;
// }

// function isWorkTime(value) {
//     const time = moment(value).hour();
//
//     if (wt.isUse === false) return true;
//     if ((time < wt.open) || (time >= wt.close)) return false;
//     return true;
// }

// function isWorking(value) {
//     if (isWeekday(value) === false) return false;
//     if (isWorkTime(value) === false) return false;
//
//     return true;
// }

// function setWorkingTime(open, close) {
//     if ((open === 0) && (close === 0))
//         wt = new WorkingTime(0, 0, false);
//     else
//         wt = new WorkingTime(open, close, true);
// }

// const dt = moment(new Date());
// console.log(isWeekday(dt));

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

// exports.workday = workday;

// exports.workday = function(value) {
//     return workday;
    // setWorkingTime(0, 0);
    //
    // console.log(isWeekday(value));
    // console.log(isWorkTime(value));
    // console.log(isWorking(value));
// }
