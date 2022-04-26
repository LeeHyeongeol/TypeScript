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

// 숙제1. type alias 두개를 합치고 중복된 속성이 있는 경우는?
// 중복된 속성만 허용함.
type Homework1 = string | number;
type Homework2 = number | boolean;

type Homework3 = Homework1 & Homework2;

const NewHomework: Homework3 = 12324;

//숙제2 다음 조건을 만족하는 type 만들고 테스트
type car = {
	color?: string;
	size: number;
	readonly position: number[];
};

const HyunDai: car = {
	color: "blue",
	size: 190,
	position: [12, 39, 9],
};

// 숙제3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보라

type Inspection = {
	name: string;
	phone: number;
	email: string;
};

const info: Inspection = {
	name: "Lee",
	phone: 78682345677,
	email: "test@test.com",
};

// 숙제4. 다음을 만족하는 type alias를 만들어보십시오

type adult = {
	adult: boolean;
};
type Inspection1 = Inspection & adult;

const person: Inspection1 = {
	name: "Lee",
	phone: 34395049,
	email: "wooga@wooga.com",
	adult: true,
};
