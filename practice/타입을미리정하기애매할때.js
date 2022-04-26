//타입 2개 이상을 합친 새로운 타입 -> 유니온 타입
var 회원 = 123;
회원 = "man";
var 회원1 = [1, 2, 3];
var 오브젝트 = { a: 123 };
var 회원2 = [1, "2", 3];
// 모든 타입의 자료형을 허용함, 일반 js 문법을 쓰고 싶을 때 사용. 하지만 버그를 정확히 발견하기 힘듬
var 이름1;
이름1 = 123;
// 이름1 = [];
이름1 - 1;
console.log(이름1 - 1);
// any 타입과 똑같지만
var 이름2;
이름2 = 123;
이름2 = {};
//unknown 타입은 타입스크립트 특징을 가지기 때문에 간단한 수학연산도 number타입이 맞아야 계산 가능하다.
// 이름2 - 1;
var 나이;
var 나이1 = -1;
// 숙제;
var 어레이 = [1, "2", 3];
var 오브젝트1 = { data: "123" };
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// 숙제2
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
