# Quiz9-4. 
### 다음 중 조건문에 대한 설명으로 옳은 것을 고르세요.

1. if 문은 반드시 else 문과 함께 사용해야 합니다.
2. if 문은 1개 이상의 else if 문을 포함해야 합니다.
3. switch 문은 1개 이상의 default 문을 포함해야 합니다.
4. if 문은 조건을 식으로 작성하고 switch 문은 값으로 작성합니다.
5. switch 문의 case 문에는 반드시 break 문을 함께 사용해야 합니다

## 정답: 4

<br/><br/><br/>

# Quiz9-5.
### 반복문을 사용해 1부터 100까지의 합을 출력하는 코드를 작성해 보세요.

## 정답
```javascript
let sum = 0
for(let i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);
```

<br/><br/><br/>

# Quiz-10-2.
### 다음 중 코드에서 사용한 함수 정의 방법을 모두 고르세요.
```javascript
const add = function(){};
```

1. 함수 표현식
2. 함수 선언문
3. 화살표 함수
4. 네이밍 함수
5. 익명 함수

## 정답: 1, 5

<br/><br/><br/> 

# Quiz10-3
### 코드에서 max 변수의 출력값이 배열 중 가장 큰 숫자가 될 수 있도록 getArrayNumber() 함수를 완성하세요. 이때, 배열 요소는 반드시 숫자형이라고 가정합니다.
```javascript
function getArrayMaxNumber(arr) { /*함수 코드를 완성하세요.*/}
const max = getArrayMaxNumber([10, 50, 30]);
console.log(max);
```

## 정답: 
```javascript
function getArrayMaxNumber(arr) {
    return Math.max(...arr)
}
const max = getArrayMaxNumber([10, 50, 30]);
console.log(max);
```

<br/><br/><br/>

# Quiz10-4
### 다음 중 코드를 실행했을 때 콘솔창에 출력될 값을 고르세요.
```javascript
var text = "outside";
function printScope(){
  console.log(text);
  var text = "inside";
};
printScope();
```

## 정답: 4

<br/><br/><br/> 

# Quiz10-5
### 다음 코드를 실행하면 출력될 변수 result의 값을 고르세요.
```javascript
const result = (function(a, b){
  function init(){
    return doSum(a, b);
  }
  function doSum(a, b){
    return a + b;
  }
  return init();
})(10, 20);
console.log(result);
```

1. ndefined
2. null
3. 50
4. 30
5. SyntaxError

## 정답 4번