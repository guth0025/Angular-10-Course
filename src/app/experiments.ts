// let age: number = 'too old'
// console.log(`Age is ${age}`)

// function printPerson(name:string, age:number){
//     console.log(`Name: ${name} age: ${age}`)
// }
// printPerson('Billy', 8)

// function isMinimumAge(age:number) : boolean {
//     return age >= 21
// }

// console.log(`Is min age: ${isMinimumAge(22)}`)
class Product{
    //You can declare and instantiate variables at the same time in constructors with typescript
    constructor(
         public id: number,
         public price: number,
         public title: string
         ){}
    printDetails(){
        console.log(`Title: ${this.title}`)
        console.log(`ID: ${this.id}`)
        console.log(`Price: ${this.price}`)
    }

}

// let p = new Product(100,39.95,'Baseball Gloves')

// p.printDetails()

let database= new Map<number, Product>()
let p1 = new Product(100,39.95,'Baseball Gloves')
let p2 = new Product(350,129.95,'Golf Club')
database.set(p1.id, p1)
database.set(p2.id,p2)

database.forEach((p, key) => {
    console.log(`Key is: ${key}`)
    p.printDetails()
})

function getOrDefault<K, V>(
    key: K,
    map: Map<K, V>,
    defaultValue:V) : V {
        let data: V = map.get(key)

        if (data === undefined){
            return defaultValue
        }else{
            return data
        }
    }

    let p3 = getOrDefault(11, database, new Product(0, 0.0, "Unknown"))
    p3.printDetails()
