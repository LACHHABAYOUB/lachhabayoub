"use strict";

import{person} from "./model/Person";

const persons = [
    new person ("Ana Smith" , "1998-12-15"),
    new person ("Bob Jone" , "1945-11-16"),
    new person ("Carlos Slim Helu" , "1976-09-24")
]

for (let per of persons){
    console.log(per.toString()) ;  
}