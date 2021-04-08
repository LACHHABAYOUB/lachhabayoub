
"Use Strict"

export class person{

    constructor(name , dateofbirth){
        this.name=name;
        this.dateofbirth=dateofbirth;
    }

    get name(){
        return this._name;
    }

    set name(value){
         this._name=value;
    }


    get dateofbirth(){
        return this._dateofbirth;
    }

    set name(value){
         this._dateofbirth=value;
    }

    toString(){
        return `{Name : ${this.name} ,dateOfBirth : ${this.dateofbirth}}`
    }
}