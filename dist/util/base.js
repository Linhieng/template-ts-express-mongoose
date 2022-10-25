"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.formatNum = void 0;
function formatNum(n, digit = 2) {
    const _digit = digit;
    let num = '' + n;
    if (digit > 5)
        return num;
    while (digit-- > 0)
        num = '0' + num;
    return num.substring(num.length - _digit);
}
exports.formatNum = formatNum;
function formatDate(date, format) {
    const year = date.getFullYear();
    const mon = formatNum((date.getMonth() + 1));
    const day = formatNum((date.getDay()));
    const h = formatNum((date.getHours()));
    const m = formatNum((date.getMinutes()));
    const s = formatNum((date.getSeconds()));
    if (format === undefined)
        return `${year}-${mon}-${day} ${h}:${m}:${s}`;
    return `${year}-${mon}-${day} ${h}:${m}:${s}`;
}
exports.formatDate = formatDate;
