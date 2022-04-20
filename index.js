//웹 브라우저는 ts파일을 읽지 못한다. 그래서 js 파일로 변환해야 함 -> 컴파일 한다!
// 터미널에 tsc -w 을 입력하면 ts -> js로 자동변환함!
//간단한 변수 타입 지정
//앞으로 이름에 문자만 들어올 수 있음
var 이름 = "Lee";
// 이름 = 123;
이름 = "23";
//배열이 들어가는데 각 요소 타입은 string이어야 함!
var 생일 = ["kim", "park"];
var 성명 = { name: "choi" };
//name의 타입이 string이 아니어도 사용할 수 있도록 하는 옵션임!
var 성함 = { name: "choi" };
//유니온 타입. 하나의 변수에 여러 타입이 들어올 수 있게 함!
var 문자 = "kim";
var 문자1 = 123;
var 문자2 = "문자";
//변수 타입은 number, 리턴 값의 타입도 number
function 함수(x) {
    return x * 2;
}
함수(123);
var john = [123, true];
var jane = { name: "jane" };
//클래스 문법에서 타입스크립트 적용
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
