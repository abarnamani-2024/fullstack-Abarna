console.log("welcome")
const per={
    name:"abc",
    age:12,
    skills:['cricket','hockey','kabaddi']
}
per.dob=1999,
per.data=per.dob+per.name
console.log(per.data)
console.log(per)
console.log([per.skills[2]])

const {name,age,skills}=per
console.log(name,age)
const a=[1,2,3,4]
const b=[5,6,7,8]
console.log([...a,...b])