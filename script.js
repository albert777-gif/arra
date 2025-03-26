
let Array = ["Olma", "Banan", "Uzum", "Gilos"];

alert("Array uzunligi: " + Array.length);


let confirmDelete = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz. Rozimisiz?");


if (!confirmDelete) {
    Array.pop();
}


console.log(Array);
