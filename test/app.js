var d1 = new Date();
var n1 = d1.getTime();

const data=require('./data.json');

//get emp records for Feb 2020
const emps=data.filter( e=>{
    return e.date.indexOf('Feb')>=0 && e.date.indexOf('2020')>0
})



var totalMaleBasic=0;
var totalFemaleBasic=0;

var totalMaleOvertime=0;
var totalFemaleOvertime=0;



function calculate(empid){     
    const empData=emps.filter( e =>{
        return e.emp_id==empid;
    });

    let days=0;
    let overtimeHours=0;    
    const per_day_salary =empData[0].per_day_salary;
    const hourSalary=per_day_salary/8;  

    for(let emp of empData){
        if(emp.weekday>=2 && emp.weekday<=6){
            if(emp.total_hours>=8){
                days++;
                if(emp.designation=='Worker'){
                    overtimeHours=overtimeHours+emp.total_hours-8;
                }
            }else if(emp.total_hours>=4){
                days=days+0.5;
            }  
        }else  if(emp.designation=='Worker' ){
            overtimeHours+=emp.total_hours;
        }       
    }
    const basic=days*empData[0].per_day_salary;      
    const overtime =overtimeHours*hourSalary*2;
    if(empData[0].gender=='Male')
   {
    totalMaleBasic+=basic;
    totalMaleOvertime+=overtime;    
   }else{
    totalFemaleBasic+=basic;
    totalFemaleOvertime+=overtime;    
   }
}

const processedEmpids=[];
for(let e of emps){
    if(processedEmpids.indexOf(e.emp_id)==-1){
        processedEmpids.push(e.emp_id);
        calculate(e.emp_id);
    }
}





var totalBasic=totalMaleBasic+totalFemaleBasic;
var totalOvertime=totalMaleOvertime+totalFemaleOvertime;
console.log("Basic Salary=",totalBasic);
console.log("Overtime=",totalOvertime);

var totalMaleSalary=totalMaleBasic+totalMaleOvertime;
var totalFemaleSalary=totalFemaleBasic+totalFemaleOvertime;
var totalBonus=0;
if(totalMaleSalary>totalFemaleSalary){
    totalBonus=totalFemaleSalary*0.01;
}else{
    totalBonus=totalMaleSalary*0.01;
}
console.log("Bonas=",totalBonus);

const totalSalary=totalBasic+totalOvertime+totalBonus;
console.log("Total Salary=",totalSalary);
var d2 = new Date();
var n2 = d2.getTime();
console.log(n2);
console.log("Time elasped=",(n2-n1),"ms");