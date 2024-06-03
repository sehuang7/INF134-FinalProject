
var units:string[] = ['oz', 'lbs', 'ct'];
var types:string[] = ['Fridge Item', 'Pantry/Cabinet Item']

export class ItemData {

    name:string;
    image:string;
    quantity:number;
    unit:string;
    type:string;

    constructor(name:string, image:string, quantity:number, unit_i:number, type_i:number) {
        this.name = name;
        this.image = image;
        this.quantity = quantity;
        this.unit = units[unit_i];
        this.type = types[type_i];
        
    }
}