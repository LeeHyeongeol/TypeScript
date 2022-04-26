//타입 2개 이상을 합친 새로운 타입 -> 유니온 타입
let 회원: number | string | boolean = 123;

회원 = "man";
let 회원1: number[] = [1, 2, 3];
let 오브젝트: { a: number | string } = { a: 123 };

let 회원2: (number | string)[] = [1, "2", 3];

// 모든 타입의 자료형을 허용함, 일반 js 문법을 쓰고 싶을 때 사용. 하지만 버그를 정확히 발견하기 힘듬
let 이름1: any;
이름1 = 123;
// 이름1 = [];
이름1 - 1;
console.log(이름1 - 1);
// any 타입과 똑같지만
let 이름2: unknown;
이름2 = 123;
이름2 = {};
//unknown 타입은 타입스크립트 특징을 가지기 때문에 간단한 수학연산도 number타입이 맞아야 계산 가능하다.
// 이름2 - 1;
let 나이: unknown;
let 나이1: unknown = -1;

// 숙제;
let 어레이: (string | number)[] = [1, "2", 3];
let 오브젝트1: { data: string | number } = { data: "123" };

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// 숙제2
let 학교: {
	score: (number | boolean)[];
	teacher: string;
	friend: string | string[];
} = {
	score: [100, 97, 84],
	teacher: "Phil",
	friend: "John",
};

학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
