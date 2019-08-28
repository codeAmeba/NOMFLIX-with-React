# React based movie app with Nomad Coders

# Day 01
## 1.1 Arrow Function

- ES6에서 새롭게 추가된 기능
- ES6 이전 일반적인 형태의 함수에서는 return을 생략하면 undefined가 출력되었지만, 화살표 함수에서는 내부적으로 return을 자동으로 해주기 때문에 생략이 가능하다.
- 단,  `{}`를 사용한다면 return을 명시해줘야 한다.
- parameter가 1개일 경우에는 `()` 생략 가능.
- [화살표 함수 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)

```javascript
const beers = ['cass', 'hite', 'terra'];

// ES6 이전
const beerFilter = beers.filter(function(beer) {
  return beer.length > 4;
});
console.log(beerFilter); // [ 'terra' ]

// ES6 이후
const beerFilterVer2 = beers.filter(beer => beer.length < 5);
console.log(beerFilterVer2); // [ 'cass', 'hite' ]
```

## 1.2 Template Literals

- Template Literals는 Template와 변수, 문자열 등을 다루기에 적합한 방법이다.
- 백틱(backtracks)라고 부르는 기호를 활용하며 문자열로 출력하게 한다.
- 인자는 `${}`  이것으로 감싼다.
- [Template literals - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

```javascript
const beerBox = [
  {
    name: 'CASS',
    from: 'KOREA'
  },
  {
    name: 'STELLA',
    from: 'BELGIUM'
  },
  {
    name: 'KIRIN',
    from: 'JAPAN'
  }
];

const favBeer = beerBox.filter(beer => {
  if (beer.from === 'KOREA') {
    return console.log(`I LOVE ${beer.name}`); // <- template literals
  }
});

// I LOVE CASS
```

## 1.3 Object Destructuring

- 우리말로 **구조 분해 할당** 이라고 하며, 동일한 할당 작업을 반복해야 할 때 이를 한 번에 할 수 있게 해줌.
- 비교적 적은 코드가 사용되기 때문에 깔끔하게 보인다는 게 장점
- Object를 기반으로 생성됨.
- [구조 분해 할당 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```javascript
const beer = {
  name: 'CASS',
  from: 'KOREA',
  taste: 'FRESH',
  type: 'LAGER',
  with: {
    morning: 'CUP RA-MYEON',
    afternoon: 'PIZZA',
    evening: 'SAM-GYEOP-SAL'
  }
};

const { name, from, taste, type, with: { afternoon } } = beer;

console.log(`${name} is from ${from}, this is ${taste} ${type}. I love drink with ${afternoon}`);
// CASS is from KOREA, this is FRESH LAGER. I love drink with PIZZA
```

## 1.4 Spread Operator

- 배열이나 객체를 풀어줌(Unpack).
- [전개 구문 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```javascript
const days = ['Mon', 'Tue', 'Wed'];
const otherDays = ['Thu', 'Fri', 'Sat'];

const allDays = [days, otherDays, 'Sun'];
console.log(allDays); 
// [ [ 'Mon', 'Tue', 'Wed' ], [ 'Thu', 'Fri', 'Sat' ], 'Sun' ]

const allDaysVer2 = [...days, ...otherDays, 'Sun'];
console.log(allDaysVer2); 
// [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
```

## 1.5 Classes 

- 프로그래밍에는 크게 두 종류의 패러다임이 있다
	- 함수형 프로그래밍(Functional Programming)
	- 객체 지향 프로그래밍(OOP, Object Oriented Programming)
- 객체 지향 프로그래밍의 경우 모든 것을 객체나 클래스로 만들고, 부모 자식의 관계가 분명하다.
- Class는 청사진(Blueprint)과 같다고 생각하면 된다.
- 리액트에서 지겹도록 사용하게 됨.
- [Classes - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)

```javascript
class SmartPhone {
  constructor(name, made) {
    this.name = name;
    this.made = made;
  };
};

class Calling extends SmartPhone {
  ringRing() {
    console.log('Hello?');
  };
  intro() {
    console.log(`This phone is ${this.name}`)
  };
};

const myPhone = new SmartPhone('iphone', 'apple');
console.log(myPhone.name); 
// iphone

const yourPhone = new Calling('galaxy', 'samsung');
console.log(yourPhone.ringRing(), yourPhone.intro()); 
// Hello?
// This phone is galaxy
// undefined
```

***

# Day 02
## 1.6 Array.map

- API로부터 배열로 된 데이터를 받게 되기 때문에 배열 메서드는 중요함
- map 메서드는 해당 배열 요소에 모두 동일한 사항을 매핑하여 새로운 배열을 만들어냄
- [Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```javascript
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const drinkDays = days.map(day => `${day}: I'll drink beer`);
console.log(drinkDays);
/*
[
'Mon: I'll drink beer',
'Tue: I'll drink beer',
'Wed: I'll drink beer',
'Thu: I'll drink beer',
'Fri: I'll drink beer'
]
*/
```

## 1.7 Array.filter

- filter 메서드는 주어진 조건을 만족하는 요소만으로 새로운 배열을 만듬
- [Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript 
const numbers = [ 3, 4, 7, 32, 31, 5, 64, 12, 24, 87, 66, 59, 243, 356, 645, 210 ];
const biggerThan50 = numbers.filter(num => num > 50);
console.log(biggerThan50);
/*
[
   64,  87,  66,  59, 243, 356, 645, 210
]
*/
```

## 1.8 forEach / includes / push

### forEach
- 새로운 배열을 반환하는 map이나 filter와 다름
- 배열 각각의 요소에 접근하여 조건에 받는 요소를 반환
- 로컬 스토리지에 저장한다던가, API로 보낸다던가, 경고를 보낸다던가 하는 등의 작업에 사용
- [Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```javascript
const beers = ['cass', 'hite', 'terra', 'fitz'];
beers.forEach(beer => console.log(beer));
/*
cass
hite
terra
fitz
*/
```

### push
- 배열에 새로운 요소를 추가할 때 사용함
- [Array.prototype.push() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

```javascript
const beers = ['cass', 'hite', 'terra', 'fitz'];
beers.push('kloud');

console.log(beers);
// [ 'cass', 'hite', 'terra', 'fitz', 'kloud' ]
```

### includes
- 배열 내에 특정 요소가 존재하는 확인
- [Array.prototype.includes() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```javascript
const cars = ['BMW', 'AUDI', 'VOLVO'];

if(!cars.includes('BENZ')) {
  cars.push('BENZ');
}

console.log(cars);
// [ 'BMW', 'AUDI', 'VOLVO', 'BENZ' ]
```

## 추가) reduce

- reduce는 단순히 배열 내의 요소를 모두 합하여 하나로 만드는 역할만 하는 메서드가 아니다.
- 활용하기에 따라 무궁무진한 가능성이 있다.
- 꾸준히 반복 학습이 필요한 메서드 중 하나.
-  `배열.reduce((누적값,현재값,인덱스,요소)=>{return결과},초기값);`
- [Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

***

# [ReactJS Challenge] Day 03

## 2.0 Setting up the project

### create-react-app
- yarn 또는 npm을 사용
	- `yarn global add create-react-app`
- 간편하게 react를 시작할 수 있게 해주는 모듈
	- `create-react-app`
- 컴퓨터에 저장하기 때문에 매번 버전 확인 및 업데이트를 해야한다는 번거로움이 있음.

### npx
- 앞의 경우를  보완한 것이 npx를 통한 설치
	-  `yarn global add npx` or `npm i npx -g`
- 이것 또한 모듈이지만, 컴퓨터에 저장할 필요가 없음.
- 항상 최신 버전의 create-react-app을 받아서 실행한 뒤, 끝나면 삭제 됨
	- `npx create-react-app`

### prop-types
- prop-types 모듈 설치 필요
	- `yarn add prop-types`


## 2.1 React router part one

### Screens
- [  ] Home
- [  ] TV Shows
- [  ] Search
- [  ] Detail

### React Router
- [GitHub - ReactTraining/react-router: Declarative routing for React](https://github.com/ReactTraining/react-router)
	- [React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/guides/quick-start)
- React App에게 Home에서 시작해야 한다는 걸 알려주기 위한 도구
- React의 Routing 패키지
- DOM과 react-native에도 사용 가능함
- React Router는 컴포넌트 묶음이다.


## 2.2 React router part two

### HashRouter
- url에 해쉬태그가 들어가기 때문에 미관상 보기 좋지 않음
- `http://localhost:3000/#/home`

### BrowserRouter
- 일반적인 웹 페이지의 url
- `http://localhost:3000/home`

### Composition
- 두 개 이상의 Route를 동시에 랜더링 하는 방식
```javascript
export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/tv" component={TV} />
    <Route path="/tv/popular" render={() => <h1>popular</h1>} />
    <Route path="/search" component={Search} />
  </Router>
);
```
<img src="/images/composition.png">


### Redirect
- `<Redirect from=“*” to=“/“ />`
- 해당되는 페이지만 렌더링 되도록 함.
	- But, 경로가 겹치게 되어서 에러가 나는데 그래서 `Switch`를 사용해야 함.

### Switch
- 한 번에 오직 하나의 Route만 랜더링 할 수 있게 함.
```javascript
// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';

export default () => (
  <Router>
    <Switch> // <- Switch
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/tv/popular" render={() => <h1>popular</h1>} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" /> // <- Redirect
    </Switch>
  </Router>
);
```

### exact
- 주어진 경로와 정확히 동일할 때 설정한 컴포넌트를 보여줌.


### 참고자료
- [react-router :: 1장. 리액트 라우터 사용해보기 | VELOPERT.LOG](https://velopert.com/3417)