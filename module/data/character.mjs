import ShadowlordsActorBase from "./actor-base.mjs";

export default class ShadowlordsCharacter extends ShadowlordsActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.attributes = new fields.SchemaField({
      defense: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 10 })
      }),
    });

    schema.occupation = new fields.StringField({ required: true, blank: true });
    schema.origin = new fields.StringField({ required: true, blank: true });

    // Iterate over ability names and create a new SchemaField for each.
    schema.abilities = new fields.SchemaField(Object.keys(CONFIG.SHADOWLORDS.abilities).reduce((obj, ability) => {
      obj[ability] = new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        mod: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        label: new fields.StringField({ required: true, blank: true })
      });
      return obj;
    }, {}));

    return schema;
  }

  prepareDerivedData() {
    // Loop through ability scores, and add their modifiers to our sheet output.
    for (const key in this.abilities) {
      // Calculate the modifier using d20 rules.
      this.abilities[key].mod =
        this.abilities[key].value >= 16 && this.abilities[key].value <= 18 ? 2 :
          this.abilities[key].value >= 13 && this.abilities[key].value <= 15 ? 1 : 0;
      // Handle ability label localization.
      this.abilities[key].label = game.i18n.localize(CONFIG.SHADOWLORDS.abilities[key]) ?? key;
    }

    // Calculate defense value based on the dex modifier.
    this.attributes.defense.value = 10 + this.abilities.dex.mod;
  }



  getRollData() {
    const data = {};

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    if (this.abilities) {
      for (let [k, v] of Object.entries(this.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    return data
  }
}