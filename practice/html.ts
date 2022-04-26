//html변수는 기본적으로 element | null 이기 떄문에 union type이다. 따라서
// narrawing or assertion 방법을 사용해야 한다.
let 제목 = document.querySelector("#title");
if (제목 != null) {
	제목.innerHTML = "반갑다 친구야";
}

//instancof를 사용하는 narrowing 방법
if (제목 instanceof HTMLElement) {
	제목.innerHTML = "반갑다 친구야아";
}

//assertion 사용하기

let 제목1 = document.querySelector("#title") as HTMLElement;

제목1.innerHTML = "반갑습니다. 이현걸입니다.";

// optional chaning 연산자

let 제목2 = document.querySelector("#title");
if (제목2?.innerHTML != undefined) {
	제목2.innerHTML = "반갑소";
}

//html 태그 별 정확한 타입명칭
// a 태그는 HTMLAnchorElement
// img 태그는 HTMLImageElement
// h4 태그는 HTMLHeadingElement

let 링크 = document.querySelector("#link");
if (링크 instanceof HTMLAnchorElement) {
	링크.href = "https://kakao.com";
}

let 이미지 = document.getElementById("#image");
if (이미지 instanceof HTMLImageElement) {
	이미지.src = "new.jpg";
}

let 링크1 = document.querySelectorAll(".naver");
console.log(링크1);
for (let i = 0; i < 3; i++) {
	let a = 링크1[i];
	if (a instanceof HTMLAnchorElement) {
		a.href = "https://kakao.com";
	}
}
