// 타입을 설정하는 또 다른 방법 interface
interface Square {
	color: string;
	width: number;
}

//interface는 중복선언이 가능.
interface Student {
	name: string;
}
interface Student {
	age: number;
}
//Student : {name : string, score : number}

//Student 타입을 Teacher 타입에 복사해서 name의 타입 설정을 대체한다.
interface Teacher extends Student {
	age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };
let 네모 = { color: "red", width: 100 };

// interface가 아니더라도 다른 타입을 복사해서 사용할 수 있다.
type Animal1 = { name: string };
type Cat1 = { age: number } & Animal1;

//숙제1

interface Marchandise {
	brand: string;
	serialNumber: number;
	model: string[];
}

let 상품: Marchandise = {
	brand: "samsung",
	serialNumber: 1360,
	model: ["TV", "phone"],
};

//숙제2
interface CartItem {
	product: string;
	price: number;
}

let 장바구니: CartItem[] = [
	{ product: "청소기", price: 7000 },
	{ product: "삼다수", price: 8000 },
];

interface newCartItem extends CartItem {
	card: boolean;
}

let 새로운장바구니: newCartItem[] = [
	{ product: "청소기", price: 7500, card: false },
];

// 숙제4
interface MultiFunc {
	plus: (a: number, b: number) => number;
	minus: (a: number, b: number) => number;
}

let 더하고빼기: MultiFunc = {
	plus(a, b) {
		return a + b;
	},
	minus(a, b) {
		return a - b;
	},
};
