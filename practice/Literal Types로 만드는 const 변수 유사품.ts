let 접니다: "대머리" | "솔로";

function 하암수(a: "hello"): 1 | 0 {
	return 1;
}
하암수("hello");

function 게임(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
	return ["가위"];
}
함수("가위");

//자료를 여러개 저장할 수 있는 타입
var 자료 = {
	name: "kim",
	//as const를 쓰면 readonly를 자동으로 적용.
} as const;

자료.name;

// kim이라는 자료만 들어오는게 아닌, kim이라는 타입 즉 string만 들어올 수 있다.
//literal type을 적용하고 싶을 때 사용
function 내함수(a: "kim") {}
내함수(자료.name);
