const data = document.getElementById("name");
const btn = document.querySelector("form");
const para = document.getElementById("para");
btn.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = data.value;
  if (
    input == "pavan" ||
    input == "Pavan" ||
    input == "pavan kumar" ||
    input == "Pavan Kumar" ||
    input == "pavankumar" ||
    input == "Pavankumar" ||
    input == "Chowdaiah" ||
    input == "Murari" ||
    input == "murari" ||
    input == "RamaMurariReddy" ||
    input == "ramamurarireddy" ||
    input == "Rama Murari Reddy" ||
    input == "Rama murari reddy" ||
    input == "rama murari reddy" ||
    input == "Praveen" ||
    input == "praveen"
  ) {
    const out =
      "Hello " +
      input +
      " you are the most worst person in the world I ever seen because you spoke always lies whenever you are talked with your friends. As a google i know that how many girls lifes you destroyed but you didn't feel regrate That's why you are most worst loafer dongry person in the world.";
    para.textContent = out;
    input.value = "";
  } else {
    para.textContent = "Stupid Enter your name Only...";
    input.value = "";
  }
});
