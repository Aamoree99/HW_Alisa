document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.fontWeight = 'bold';
  });
  link.addEventListener('mouseout', () => {
    link.style.fontWeight = 'normal';
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});
