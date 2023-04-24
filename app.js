//bai1//
function snt(num) {
    for(let i = 2; i < num; i++) {
      if(num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  function calculateSum() {
    event.preventDefault();
  
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
  
    let sum = 0;
    for(let i = a; i <= b; i++) {
      if(snt(i)) {
        sum += i;
      }
    }
  
    document.getElementById("result").innerHTML = `Tổng các số nguyên tố trong khoảng ${a} đến ${b} là ${sum}`;
  }
  
  document.querySelector("form").addEventListener("submit", calculateSum);

  //bai2//
function numberOneTriangle() {
    let num = prompt("Nhập số nguyên trong khoảng từ 1 đến 10:");
    let result = "";
    
    if (num < 1 || num > 10) {
      result = "Số bạn nhập không hợp lệ.";
    } else {
      for (let i = 1; i <= num; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
          row += "*";
        }
        result += row + "<br>";
      }
    }
    
    document.getElementById("result").innerHTML = result;
  }
  
  numberOneTriangle();
  