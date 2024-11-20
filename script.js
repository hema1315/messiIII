const colorBox = document.getElementById("colorBox");

// مجموعة ألوان لتغييرها عند النقر
const colors = ["#007BFF", "#28a745", "#ffc107", "#dc3545", "#17a2b8"];

let currentColorIndex = 0;

// وظيفة لتغيير اللون عند النقر
colorBox.addEventListener("click", () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    colorBox.style.backgroundColor = colors[currentColorIndex];
});
