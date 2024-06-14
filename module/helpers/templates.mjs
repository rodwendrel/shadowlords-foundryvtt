/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/shadowlords3e/templates/actor/parts/actor-features.hbs',
    'systems/shadowlords3e/templates/actor/parts/actor-items.hbs',
    'systems/shadowlords3e/templates/actor/parts/actor-spells.hbs',
    'systems/shadowlords3e/templates/actor/parts/actor-effects.hbs',
    'systems/shadowlords3e/templates/actor/parts/actor-equipments.hbs',

    // Item partials
    'systems/shadowlords3e/templates/item/parts/item-effects.hbs',
  ]);
};
