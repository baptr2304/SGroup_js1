
function largestEven(arr) {
    let max = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max)
    return max;
}

function fibo(n) {
    if (n == 0 || n == 1)
        return 1;
    return fibo(n - 1) + fibo(n - 2);
}



function ex1() {
    let arr
    if (document.getElementById("input1").value == "") {
        alert("You must type values")
        return
    }
    arr = document.getElementById("input1").value.split(",")
    alert(largestEven(arr))
}
function ex2() {
    let n
    if (document.getElementById("input2").value == "") {
        alert("You must type values")
        return
    }
    if (document.getElementById("input2").value < 0) {
        alert("You must type positive numbers")
        return
    }
    n = document.getElementById("input2").value
    alert(fibo(n))
}
