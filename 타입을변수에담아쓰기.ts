//동물을 작성할 때 타입이 너무 길다.
let 동물: string | number | undefined;

//Animal이라는 타입을 선언 type alias(타입변수) 라고 함
type Animal = string | number | undefined;

// let 식물: { name: string; age: number } = { name: "kim", age: 27 };

type plant = { name: string; age: number };

let 식물: plant = { name: "kim", age: 27 };

// const는 등호로 재할당을 금지하지만, const로 담은 object 수정은 자유롭게 가능
const 출생지역 = { region: "seoul" };

//const는 변수의 재할당을 금지하지만 객체속성을 변경할 수 있다.
//readonly는 객체속성까지도 변경하지 못하게 하는 속성이다.
type Girlfriend = {
	readonly name: string;
};

const 여친: Girlfriend = {
	name: "윤주",
};
//readonly 속성으로 인해 객체속성을 변경할 수 없다.
// 여친.name = "혜림";

//타입을 합쳐서 사용하기
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let Position: NewType = { x: 190, y: 100 };

//같은 이름의 type은 재정의가 불가능하다.
// type PositionX = { x: string };
