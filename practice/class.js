var Person1 = /** @class */ (function () {
    function Person1(a) {
        this.name = a;
    }
    Person1.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Person1;
}());
var 사람1 = new Person1("Choi");
var 사람2 = new Person1("Lee");
사람1.함수("안녕");
console.log();
// 숙제1
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        console.log(this.price / 10);
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
//숙제2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
// class Word {
// 	//
// 	num;
// 	str;
// 	constructor(...param) {
// 		let 숫자들: number[] = [];
// 		let 문자들: string[] = [];
// 		param.forEach((i) => {
// 			if (typeof i === "string") {
// 				문자들.push(i);
// 			} else {
// 				숫자들.push(i);
// 			}
// 		});
// 		this.num = 숫자들;
// 		this.str = 문자들;
// 	}
// }
// let obj = new Word("kim", 3, 5, "park");
// console.log(obj.num);
// console.log(obj.str);
