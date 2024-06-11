
export class RecipeData {
    
    id:string;
    title:string;
    image:string;
    prep_time: number;
    cook_time: number;
    rating: number;
    contains: string;

    ingredients_list:string[];
    instructions:string[];

    constructor(id:string,title:string, image:string, prep_time:number, cook_time:number, rating:number, ingredients:string[], instructions:string[], contains: string) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.prep_time = prep_time;
        this.cook_time = cook_time;
        this.rating = rating;
        this.ingredients_list = ingredients;
        this.instructions = instructions;
        this.contains = contains

    }
}
