//변수타입은 number, 리턴값의 타입도 number로 정함
function 함수1(x) {
    return x * 2;
}
함수1(30);
//함수에서 void 타입 활용 가능
//void 타입 메소드에서 return은 값을 반환하는 것이 아니라, 메소드를 종료함을 의미한다.
function 함수2(x) {
    return;
}
//타입스크립트에서는 함수에 변수를 반드시 선언해야 함,
//변수를 옵션으로 설정하면 반드시 변수를 할당하지 않아도 된다.
함수2();
//x는 유니온타입이기 때문에 nnumber 타입만 허용하는 엄격한 규칙에 위반된다. 따라서 계산이 안됨
function 함수3(x) {
    if (x)
        : number;
    {
        console.log(x + 3);
    }
}
함수3(2);
