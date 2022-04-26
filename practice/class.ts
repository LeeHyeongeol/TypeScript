class Person1 {
	//컴파일러가 초기값에 맞춰 타입설정을 자동으로 해준다.
	// data: number = 0; 보단 data = 0;
	// data = 0;

	name: string;
	constructor(a: string) {
		this.name = a;
	}

	함수(a: string) {
		console.log("안녕" + a);
	}
}

let 사람1 = new Person1("Choi");
let 사람2 = new Person1("Lee");
사람1.함수("안녕");

console.log();

// 숙제1

class Car {
	model: string;
	price: number;
	constructor(a: string, b: number) {
		this.model = a;
		this.price = b;
	}
	tax() {
		console.log(this.price / 10);
	}
}
let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

//숙제2

class Word {
	num;
	str;

	constructor(...param: any[]) {
		let 숫자들: number[] = [];
		let 문자들: string[] = [];

		param.forEach((i) => {
			if (typeof i === "string") {
				문자들.push(i);
			} else {
				숫자들.push(i);
			}
		});

		this.num = 숫자들;
		this.str = 문자들;
	}
}

let obj = new Word("kim", 3, 5, "park");
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


