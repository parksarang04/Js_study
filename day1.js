//-----------키워드-------------//
var a = 1;  // var = 재선언o, 재할당o
let b = 2;  // let = 재선언x, 재할당o (var 대신 많이 씀)
const c = 3; // 재선언x, 재할당x

// 원시타입 = 단 하나의 값만 가지는 타입/ number, string, bool, null, undefined
// 비원시타입 = 하나의 값이 아닌 여러가지 값을 가짐 / 객체를 비원시타입이라 한다.

let num = 1;
let str = '가';
let bool = true;
let null1 = null;
let und = undefined;

// typeof = 예약어 (변수의 대한 타입을 알 수 있다)
console.log(typeof num);
console.log(typeof str);
console.log(typeof null1);
console.log(typeof und);
console.log(typeof bool);

// undefined = 알 수 없는 값, 할당하기 전
// null = 없는 값, 존재하지 않는 값

// NaN-------연산 관련한 연산이 실패했을 때 나오는 값 (하나의 타입)



//------------연산자------------//
// 1.대입 연산자
let A = 1;

// 2.산술 연산자
let B = 1+2;
// 3.복합 대입 연산자
A +=1;

// 4.증감 연산자

A++; // 후위 = 반복문에 많이 씀
++A; // 전위
// 5.논리 연산자
//&& || NOT!

// 6.비교 연산자
// <, >, <=, >=, ===
console.log(1===1);
console.log(1==="1");
console.log(1=="1"); // 문자열이든 값으로 보든 값은 같지만 타입이 다르다. ==은 타입을 보지않고 값만 본다.
// != 값만 / !== 값과 타입 비교


//------------복작합 연산자------------//
// 1. null 병합 연산자 키워드 = ??
// => ??기준으로 왼쪽 오른쪽 값 중에 null이나 undefined 아닌 값을 출력
// 둘 다 값이 존재한다면 무조건 왼쪽 값 출력
let Q;
let Q1 =10;
let Q2 = 20;
console.log(Q2??Q1)

// 2. Typeof 연산자

// 3. 삼항 연산자
// => 연산하는 항이 세개.
// 조건식 ? 참 : 거짓
let res = 10 % 3 === 0 ? "Wkr" : "ghf";

console.log(res);
