const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
    circle.addEventListener("click", ({ target }) => {
        const { backgroundColor } = getComputedStyle(target);
        document.body.style.backgroundColor = backgroundColor;
    })
});

const resetBtn = document.getElementById("resetBtn");
const defaultBackground = getComputedStyle(document.body).backgroundColor;

// Sembunyikan tombol reset di awal
resetBtn.style.display = "none";

// Tampilkan tombol reset saat user klik salah satu circle
document.querySelectorAll(".circle").forEach((circle) => {
  circle.addEventListener("click", ({ target }) => {
    const { backgroundColor } = getComputedStyle(target);
    document.body.style.backgroundColor = backgroundColor;

    // Munculkan tombol reset
    resetBtn.style.display = "inline-block";
  });
});

// Saat tombol reset diklik
resetBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = defaultBackground;

  // Sembunyikan tombol kembali
  resetBtn.style.display = "none";
});

