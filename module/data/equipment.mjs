import ShadowlordsItemBase from "./item-base.mjs";

export default class ShadowlordsEquipment extends ShadowlordsItemBase {

    static defineSchema() {
        const fields = foundry.data.fields;
        const requiredInteger = { required: true, nullable: false, integer: true };
        const schema = super.defineSchema();

        schema.quantity = new fields.NumberField({ ...requiredInteger, initial: 1, min: 1 });
        // schema.roll = new fields.SchemaField({
        //     diceNum: new fields.NumberField({ ...requiredInteger, initial: 3, min: 1 }),
        //     diceSize: new fields.StringField({ initial: "d6" }),
        //     diceBonus: new fields.StringField({ initial: "+@str.mod" }),
        // })
        // schema.damage = new fields.SchemaField({
        //     diceNum: new fields.NumberField({ ...requiredInteger, initial: 1, min: 1 }),
        //     diceSize: new fields.StringField({ initial: "d6" }),
        //     diceBonus: new fields.StringField({ initial: "+@str.mod" }),
        // })
        // schema.description = new fields.StringField({ required: true, blank: true });
        // schema.feature = new fields.StringField({ blank: true });
        // schema.type = new fields.StringField({ blank: true });
        // schema.cost = new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 });

        // schema.rollFormula = new fields.StringField({ blank: true });
        // schema.damageFormula = new fields.StringField({ blank: true });

        console.log("ASAASAS" + foundry.data.fields);
        
        return schema;
    }

    // preparedDerivedData() {
    //     const roll = this.roll;
    //     const damage = this.damage;

    //     this.rollFormula = `${roll.diceNum}${roll.diceSize}${roll.diceBonus}`;
    //     this.damageFormula = `${damage.diceNum}${damage.diceSize}${damage.diceBonus}`;
    // }
}