# Quiz12-2.
### 다음 코드에서 p 요소 노드를 선택하는 방법으로 올바르지 않은 것을 고르세요.
```html
<body>
  <div class="box1">
    <p id="text">Select Text</p>
  </div>
</body>
```

1. document.getElementById("#text")
2. document.querySelector("p")
3. document.querySelector(".box1 > p")
4. document.querySelectorAll("p")[0]
5. document.querySelectorAll("div")[0].firstElementChild

## 정답: 1

<br/><br/><br/>

# Quiz12-3.
### 다음과 같은 코드가 있을 때, p 태그의 fz20 클래스 속성을 삭제하고, sample text를 change text로 변경하고 싶다면 (가), (나)에 들어갈 내용으로 맞게 짝지어진 것을 고르세요.
```html
<p id="text" class="red-color fz20">sample text</p>
<script>
  const pEl = document.querySelector("#text");
  pEl.(가) = "change text"; 
  pEl.(나);
</script>
```

1. datase - removeClass("fz20")
2. datase - setAttribute("fz20")
3. innerHTML - toggleClass()
4. innerTex - classList.remove("fz20")
5. textConten - removeClass("fz20")

## 정답: 4

<br/><br/><br/>

# Quiz-12-4.
### HTML 문서에 img 태그를 추가하려고 합니다. 이때, 이미지 경로는 ‘sample.jpg’, 이미지 설명은 ‘샘플 이미지’라고 지정하려고 할 때, 다음 코드의 A, B, C, D에 들어 갈 내용으로 알맞은 것을 고르세요.
```html
<script>
  const img = document.(A);
  img.(B) = "sample.jpg";
  img.(C) = "샘플 이미지";
  document.body.(D)(img);
</script>
```

1. createAttribute('img') - al - src - createTextNode
2. createAttribute('img') - src - al - setAttributeNode
3. createElement('img') - al - src - append
4. createElement('img') - src - al - appendChild
5. createTextNode('img') - al - src - removeChild

## 정답: 4

<br/><br/><br/> 

# Quiz12-5
### 다음 코드의 입력 항목 중 나이 항목의 값을 가져오는 코드를 고르세요.
```html
<form name="frm1">
  <label for="uname">이름</label>
  <input type="text" id="uname" name="uname">
  <label for="age">나이</label>
  <input type="text" id="age" name="age">
  <button type="submit">전송</button>
</form>
```

1. document.frm1.age.value
2. document.forms.age.value
3. document.forms[0].uname.value
4. document.frm1.elements[0].value
5. document.forms[0].elements[0].value

## 정답: 1

<br/><br/><br/> 

# Quiz12-6
### 버튼을 더블 클릭하면 경고창이 출력되게 코드를 작성해 주세요. 이때, 경고창의 메시지는 아무거나 상관없습니다.
```html
<button>클릭</button>
<script>
  document.querySelecotor("button").addEventListener("dblclick", function() {
    alert("더블 클릭");
  })
</script>
```

## 정답: 3


<br/><br/><br/> 

# Quiz12-7
### a 태그를 클릭해도 페이지가 이동하지 않도록 기본 이벤트를 제거하는 코드를 다음과 같이 작성했을 때 (가), (나)에 들어갈 내용으로 알맞은 것을 고르세요.
```html
<a href="https://www.gilbut.co.kr">길벗</a>
<script>
  const aEl = document.querySelector("a");
  aEl.addEventListener("click", function((가)){
     e.(나);
  })
</script>
```

1. even - preventDefault()
2. even - this
3. e - clientX
4. e - keyCode
5. e - preventDefault()

## 정답: 5