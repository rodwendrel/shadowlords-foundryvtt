import ShadowlordsItemBase from "./item-base.mjs";

export default class ShadowlordsSpell extends ShadowlordsItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.cost = new fields.NumberField({ required: true, nullable: false, integer: true, initial: 1, min: 1 });
    schema.roll = new fields.SchemaField({
      diceNum: new fields.NumberField({ ...requiredInteger, initial: 3, min: 3 }),
      diceSize: new fields.StringField({ initial: "d6" }),
      diceBonus: new fields.StringField({ initial: "+@str.mod" })
    })

    return schema;
  }

  prepareDerivedData() {
    const roll = this.roll;

    this.formula = `${roll.diceNum}${roll.diceSize}${roll.diceBonus}`
  }
}