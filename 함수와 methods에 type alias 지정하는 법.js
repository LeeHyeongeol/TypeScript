// 화살표함수의 기본공식
// (파라미터) => {}
// function(파라미터){}
//중괄호 안에 return 밖에 없으면 중괄호를 생략할 수 있음
var ABC = function (x, y) {
    return x + y;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
}
function MakeFunction(a, func1, func2) {
    var result1 = func1(a);
    var result2 = func2(result1);
    console.log(result2);
}
