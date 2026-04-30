//------------함수------------//
  // 1. 함수 선언
  function Sarang(){console.log('김우진 바보')}

  function Sarang(){console.log('q박')}
  // 2. 함수 표현식(익명)
  //변수에 함수를 담을 수 있다
  const A = function (){console.log('배고파요')}

  // 3. 화살표 함수
  const B = () => {console.log('배고파요2')}

  // 4. 콜백 함수(응용) 자기 자신이 아닌 다른 함수에서 인수로서 전달되는 함수
  const C = (callback) => {
    for (let i =0; i < 5; i++)
    {
      callback(i)
    }
  }
//  C((i)=>{console.log(i)})

//------------객체------------//
// 1. 객체 생성자(잘 안씀)
 const D = new Object()

// 2. 객체 리터럴
 const E = {}
 const name = '라'
 // 2-1 객체 프로포티(객체 속성)
 const person = {
  name: '박',
  age: 26,
  job:null,
  etc:{},
  hi : function () {console.log(this.name)}
 }
person.hi()

 // 호출방법 1. 점 표기법
//  console.log(person.hi())
 // 호출방법 1. 괄호 표기법
//  console.log (person['name'])

 const T = (a) => {
  console.log(person[`${a}`])
 } //템플릿 리터럴 = 문자열 안에서 변수를 사용할 수 있게 해줌 ${}
//  T('')

 person.hobby = '놀기'  //추가
 person.name = '바행복' //변경
 delete person.name     //삭제
//  console.log(person.name)



//------------배열------------//
// 1. 배열 생성자
const array = new Array()

// 2. 배열 리터럴
const array2=[]

const array3 = ['안녕',24,null,undefined,{},[],() => {}]

array3[0] = '밥'
// console.log(array3[0])

// console.log(array3.pop())
// console.log(array3.push('f'))
// console.log(array3)

