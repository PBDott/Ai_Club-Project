for(let i = 100; i < 1000; i++) {
    let hundreds = Math.floor(i / 100); // 백의 자리
    let tens = Math.floor(i / 10) % 10; // 십의 자리
    let units = i % 10; // 일의 자리
    if(hundreds ** 3 + tens ** 3 + units ** 3 == i) {
        console.log(i);
    } 
}
