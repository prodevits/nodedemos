// const assert =require('assert');
const Student=require("../models/student");

describe('Createing Records',()=>{
    it('saves a user',()=>{
       // assert(1+1===2);
       const stu=new Student({
           name:'Raman',
           age:22,
           marks:56.9
       });

       stu.save();
    })
});