
export class ItemData {

    units:string[] = ['oz', 'lbs', 'ct'];
    types:string[] = ['Fridge Item', 'Pantry/Cabinet Item']

    name:string;
    image:string;
    quantity:number;
    unit:string;
    type:string;

    constructor(name:string, image:string, quantity:number, unit_i:number, type_i:number) {
        this.name = name;
        this.image = image;
        this.quantity = quantity;
        this.unit = this.units[unit_i];
        this.type = this.types[type_i];
        
    }
}