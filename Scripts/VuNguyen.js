var ten = "Phuc An"
// ten = window.prompt("Nhap ten cua ban: ")
// var tuoi;
// tuoi = parseInt(window.prompt("Nhap tuoi cua ban: "));
// for(var i = 0; i <= 10; i ++){
//     document.write("Nam nay em ", (tuoi + i), " tuoi.<br>")
// }

var student = {
    name: "An",
    age: 18,
    gender: "male",
    address: {
        city: "Ha Noi",
        country: "Viet Nam"
    }
}
var tinh_tuoi = function(namsinh) {
    // var namsinh = parseInt(window.prompt('Nhap nam sinh: '))
    age = 2024 - namsinh
    document.write("Tuoi cua ban la: ", age, "<br>")
    return age;
}

var tuoi = tinh_tuoi(2003)
var tuoi2 = tinh_tuoi(1996)
console.log(tuoi)
console.log(tuoi2)
