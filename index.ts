//웹 브라우저는 ts파일을 읽지 못한다. 그래서 js 파일로 변환해야 함 -> 컴파일 한다!
// 터미널에 tsc -w 을 입력하면 ts -> js로 자동변환함!

//간단한 변수 타입 지정
//앞으로 이름에 문자만 들어올 수 있음
let 이름: string = "Lee";
// 이름 = 123;
이름 = "23";

//배열이 들어가는데 각 요소 타입은 string이어야 함!
let 생일: string[] = ["kim", "park"];
let 성명: { name: string } = { name: "choi" };
//name의 타입이 string이 아니어도 사용할 수 있도록 하는 옵션임!
let 성함: { name?: string } = { name: "choi" };

//유니온 타입. 하나의 변수에 여러 타입이 들어올 수 있게 함!
let 문자: string | number = "kim";
//타입명을 작명한다. 보통 첫글자는 대문자로 함!
type 내타입 = string | number;

let 문자1: 내타입 = 123;
let 문자2: 내타입 = "문자";

//변수 타입은 number, 리턴 값의 타입도 number
function 함수9(x: number): number {
	return x * 2;
}
console.log(함수9(123));
// 함수("문자");

//튜플타입 : 셀 수 있는 수량의 짝
type Member = [number, boolean];
let john: Member = [123, true];

type Crew = {
	name: string;
};

//글자로 된 모든 object 속성의 타입은 :string 이다.
type Crew1 = {
	[key: string]: string;
};

let jane: Crew = { name: "jane" };

//클래스 문법에서 타입스크립트 적용
class User {
	name;
	constructor(name: string) {
		this.name = name;
	}
}
