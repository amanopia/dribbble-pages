const header = document.querySelector(".hidden-container");

header.style.background = "#fe8c44";
header.style.transition = "all 0.6s cubic-bezier(.63,.12,.03,.98)";

setTimeout(() => {
  header.style.top = "50%";
}, 100);

setTimeout(() => {
  header.style.width = "100.5%";
  header.style.height = "100.9%";
  header.style.background = "#1e1d1d";
}, 600);
