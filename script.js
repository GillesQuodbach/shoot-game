let container = document.querySelector(".container");
let btn = document.querySelector(".start_btn");
let scoreContainer = document.querySelector(".score");
let timeContainer = document.querySelector(".time");

btn.onclick = function () {
  let score = 0;
  let time = 30; // Changer la valeur du temps selon votre besoin
  container.innerHTML = "";

  let interval = setInterval(function showTarget() {
    // Création de la cible
    let target = document.createElement("img");
    target.id = "target";
    target.src = "/silly.png";
    container.appendChild(target);
    target.style.top =
      Math.random() * (container.offsetHeight - target.offsetHeight) + "px";
    target.style.left =
      Math.random() * (container.offsetWidth - target.offsetWidth) + "px";

    // Faire disparaître la cible
    setTimeout(function () {
      target.remove();
    }, 2000);

    // Quand on clique sur une cible
    target.addEventListener("click", function () {
      score += 1;
      target.style.display = "none";
      scoreContainer.innerHTML = `Score : ${score}`;
    });

    time -= 1;

    // Afficher les infos
    scoreContainer.innerHTML = `Score : ${score}`;
    timeContainer.innerHTML = `Temps : ${time}`;

    // Fin du jeu quand le temps est écoulé
    if (time == 0) {
      clearInterval(interval);
      container.innerHTML = "Le jeu est terminé";
    }
  }, 1000);
};
