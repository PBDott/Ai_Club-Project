# Quiz11-2.
### 다음 코드를 실행한 후 마지막에 변수 studentObject에 할당된 객체의 키를 배열로 나열한 값을 고르세요.
```javascript
const studentObj = {
  name:"John", 
  age:20,
};
studentObj.gender = "female";
delete studentObj.age; 
```

1. ['name', 'age', 'gender']
2, ['age', 'gender']
3. ['name', 'gender']
4. ['name', 'age']
5. ['age']

## 정답: 3

<br/><br/><br/>

# Quiz11-3.
### 다음 배열의 요소 중 가장 큰 수를 출력하는 코드를 완성하세요.
```javascript
const arr = [10, 120, 30, 50, 20];
// 여기에 코드를 작성하세요.
```

## 정답
```javascript
const arr = [10, 120, 30, 50, 20];
const array = arr.sort((a, b) => b - a);
console.log(array[0]);
 
```

<br/><br/><br/>

# Quiz-11-4.
### 메서드를 호출할 때마다 웹 브라우저의 스크롤을 가로 방향으로 200px, 세로 방향으로 400px씩 계속 이동하게 하려고 합니다. A에 들어갈 내용으로 맞는 것을 고르세요.
```javascript
window.(A)(200, 400);
```

1. open
2. close
3. location
4. scrollBy
5. scrollTo

## 정답: 4

<br/><br/><br/> 

# Quiz12-1
### 다음 중 문서 객체 모델에 대한 설명으로 올바르지 않은 것을 고르세요.

1. 문서 객체 모델은 HTML 구성 요소를 객체화한 모델 구조를 의미합니다.
2. 문서 객체 모델은 웹 브라우저가 HTML 문서를 해석하는 과정에서 생성됩니다.
3. 문서 객체 모델은 자바스크립트 언어 사양에 내장되어 있는 객체 모델입니다.
4. 문서 객체 모델을 조작해서 웹 브라우저에 표시되는 화면에 새로운 요소를 추가하거나 기존 구성 요소를 변경할 수 있습니다.
5. 자바스크립트는 웹 브라우저에 화면이 표시된 후에 문서 객체 모델을 조작할 수 있습니다.

## 정답: 3