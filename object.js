// singleton object
// Object.create


// object literals

const sym = Symbol

const obj = {
  name: "my name", 
  "in quotes": "some value",
  [sym]: "symbol value",
  haha: 102
}

// ways to access obj
console.log(obj.name)
console.log(obj["in quotes"])
console.log(obj[sym])

// change value
obj["in quotes"] = "new value"
console.log(obj["in quotes"])

// freeze or restrict change in an object
Object.freeze(/*obj*/) // does not throws an error but prevent any changes

// function as an object method

obj.fun = function () {
  console.log("hehe function")
}

console.log(obj.fun()) // retruns an undefined
obj.fun() // does not return undefined

// object function accessing object value
obj.fun2 = function(){
  console.log(`hehe new fun with ${this.haha}`)
}

console.log(obj.fun2())
obj.fun2()
