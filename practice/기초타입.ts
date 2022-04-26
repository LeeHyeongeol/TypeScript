let 첫글자: string = "Lee";
첫글자 = "seo";

let 나이3: number = 27;
나이3 = 27;

let 결혼했니: boolean = true;
결혼했니: false;

let 집이있니: undefined = undefined;
console.log(집이있니);

let 회원들: ["kim", "park"];

let 회원들1: string[] = ["kim", "park"];
let 회원들2: string[] = ["kim", "park"];
let 회원들3: { name: string; date: number } = { name: "Lee", date: 10 };

// 팁. 타입지정은 명시하지 않아도 초기값의 타입을 자동으로 인식한다.

// let 회원들4:string = "park"
let 회원들4 = "park";

let 회원들5: [1, 2, 3];

// 연습문제
let project = {
	member: ["kim", "park"],
	days: 30,
	started: true,
};

let project2: {
	member: string[];
	days: number;
	started: boolean;
} = {
	member: ["kim", "park"],
	days: 30,
	started: true,
};
