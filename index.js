// Basic Type
var id = 5;
var company = 'wildan';
var isPublished = true;
var x = true;
x = 'wildan';
x = 12;
//Array & tupples
var data = [1, 2, 3, 4, 5];
var arr = [1, 2, true];
//Tuple
var person = [1, '2', true];
var employee;
employee = [
    [1, 'satu'],
    [2, 'dua'],
    [3, 'tiga'],
];
//Union
var nomor = 22;
nomor = '22';
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); //0
var user = {
    id: 1,
    name: 'wildan'
};
// Type Assertion
var cid = 1;
var customer_id = cid;
// customer_id = true ==> error
// Functions
var addNum = function (x, y) {
    return x + y;
};
var logMsg = function (message) {
    console.log(message);
};
logMsg('true');
var constumer1 = {
    id: 1,
    name: 'halo'
};
var add = function (x, y) {
    return x + y;
};
// OOP
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name);
    };
    return Person;
}());
var wildan = new Person(1, 'wildan');
console.log(wildan.register());
