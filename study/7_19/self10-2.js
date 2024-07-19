/*
매개변수로 배열을 전달받아 배열의 요소 중에서 가장 큰 수를 찾아 반환하는 함수를 만들어 보세요. 이때, 배열 안의 데이터는 모두 0보다 큰 정수라고 가정합니다.
*/
const arr = [1, 4, 3, 9, 6];

function max(arr) {
    const array = arr.sort((a, b) => (b - a))
    return array[0];
}
console.log(max(arr))