/*show/hide skills item
const skillItems = document.querySelectorAll("section.skills .skill");

skillItems.forEach((skill) => {
  skill.querySelector(".head").addEventListener("click", () => {
    skill.querySelector(".items").classList.toggle(".show-items");
    console.log("mandeha ny code");
  });
});


$(document).ready(function () {
  $(".head").click(function () {
    $(".collapse").collapse("toggle");
  });
});
*/
function openPopup(title, badgeText, image1Src, image2Src, description) {
  // Modifier le contenu du pop-up
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-badge').innerText = badgeText;
  document.getElementById('popup-image1').src = image1Src;
  document.getElementById('popup-image2').src = image2Src;
  document.getElementById('popup-description').innerText = description;
  
  // Afficher le pop-up
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  // Cacher le pop-up
  document.getElementById('popup').style.display = 'none';
}
