function 함수(x: number | string) {
	if (typeof x === "string") {
		return x + "1";
	} else {
		return x + 1;
	}
}

function 내함수1(x: number | string) {
	let array: number[] = [];
	//Narrowing
	// if (typeof x === "number") {
	//assertion은 반드시 변수타입이 여러개인 경우에 하나로 정할 때만 사용한다.
	array[0] = x as number;
}

//타입을 임의로 바꾸기 위해 사용하면 안된다.
// let 이름: string = "kim";
// 이름 as number;
