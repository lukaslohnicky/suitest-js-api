const {makeModifierComposer} = require('../utils/makeComposer');
const composers = require('../constants/composer');

/**
 * Defines abandon method.
 */
const abandonComposer = makeModifierComposer(composers.ABANDON, ['abandon'], meta => ({
	...meta,
	isAbandoned: true,
}), {registerClone: false});

module.exports = abandonComposer;
