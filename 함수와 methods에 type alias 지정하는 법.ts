// 화살표함수의 기본공식
// (파라미터) => {}
// function(파라미터){}
//중괄호 안에 return 밖에 없으면 중괄호를 생략할 수 있음

type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
	return x + y;
};

//숙제1
//methods 안에 타입지정하기
type userInfo = {
	name: string;
	age: number;
	plusOne: (x: number) => number;
	changeName: () => void;
};

let 회원정보: userInfo = {
	name: "kim",
	age: 30,
	plusOne(x) {
		return x + 1;
	},
	changeName: () => {
		console.log("안녕");
	},
};

회원정보.plusOne(1);
회원정보.changeName();

//숙제2
type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
	let result = x.replace(/^0+/, "");
	return result;
};

function removeDash(x: string): number {
	let result = x.replace(/-/g, "");
	return parseFloat(result);
}

// 숙제3
type Func1 = (x: string) => string;
type Func2 = (x: string) => number;

function MakeFunction(a: string, func1: Func1, func2: Func2) {
	let result1 = func1(a);
	let result2 = func2(result1);
	console.log(result2);
}
