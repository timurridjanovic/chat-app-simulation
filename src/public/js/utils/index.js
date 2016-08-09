'use strict';

export function toCamelCase(str) {
	if (typeof str !== 'string') throw new Error('this function only accepts strings');
	return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
}
