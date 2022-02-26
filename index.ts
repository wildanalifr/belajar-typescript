// Basic Type
let id: number = 5
let company: string = 'wildan'
let isPublished: boolean = true
let x: any = true
x = 'wildan'
x = 12

//Array & tupples
let data: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, 2, true]

//Tuple
let person: [number, string, boolean] = [1, '2', true]
let employee: [number, string][]

employee = [
  [1, 'satu'],
  [2, 'dua'],
  [3, 'tiga'],
]

//Union
let nomor: string | number = 22
nomor = '22'

//Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up) //0

// Objects
type User = {
  id: number
  name: string
  age?: number
}

const user: User = {
  id: 1,
  name: 'wildan',
}

// Type Assertion
let cid: any = 1
let customer_id = <number>cid
// customer_id = true ==> error

// Functions

const addNum = (x: number, y: number): number => {
  return x + y
}

const logMsg = (message: string | number): void => {
  console.log(message)
}

logMsg('true')

//Interfaces

interface CostumerInterface {
  id: number
  name: string
}

const constumer1: CostumerInterface = {
  id: 1,
  name: 'halo',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => {
  return x + y
}

// OOP

class Person {
  id: number
  name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name}`
  }
}

const wildan = new Person(1, 'wildan')
console.log(wildan.register())
