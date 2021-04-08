
"Use Strict"

export class person{

    constructor(name , dateofbirth){
        this.name=name;
        this.dateofbirth=dateofbirth;
    }

    get name(){
        return this.name;
    }

    set name(value){
         this.name=value;
    }


    get dateofbirth(){
        return this.dateofbirth;
    }

    set dateofbirth(value){
         this.dateofbirth=value;
    }

    toString(){
        return `{Name : ${this.name} ,dateOfBirth : ${this.dateofbirth}}`
    }
}