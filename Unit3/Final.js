function expl() {
  let name = prompt("What's your name?");
  if (!name) {
    name = prompt("👻Please insert your name!👻");
  } else {
    name;
  }
  let city = prompt("Where are you from?");
  let emoji = prompt("What's your fav emoji?");
  let email = prompt(
    "Leave us your email (it'll be in safe hands, no spam, we promise!)"
  );

  alert(
    emoji + " Thanks " + name + emoji + " We'll be in touch soon! " + emoji
  );
}

let explore1 = document.querySelector(".explore");
explore1.addEventListener("click", expl);
