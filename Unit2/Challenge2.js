function changeCity() {
  let city = prompt("Which city do you live in?");
  let temperature = prompt("Which temperature is it?");

  let h1 = document.querySelector("h1");

  if (temperature >= 0) {
    h1.innerHTML = `😊<br /> Currently ${temperature}° in ${city}`;
  } else {
    h1.innerHTML = `😢<br /> Currently ${temperature}° in ${city}`;
  }
}

let changeCityBtn = document.querySelector("button");

changeCityBtn.addEventListener("click", changeCity);
