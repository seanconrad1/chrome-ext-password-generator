// assign elements to variables
let input = document.getElementsByTagName("input")[0];
let button = document.getElementById("copy-button");
let checkbox1 = document.getElementById("special-characters");
let checkbox2 = document.getElementById("numbers");
let slider = document.getElementById("slider");
let sliderValue = document.getElementById("password-size");
sliderValue.innerHTML = slider.value;

// state
let myResult;
let myObject = {
  specialCharacters: true,
  numbers: true,
  size: 15,
};

// Create list of randomizable chars and numbers
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!@#$%^&*(){}[]-=+_:;<>,.?/`~";
const numbers = "0123456789";

function getRandomPassword(obj) {
  button.innerHTML = `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="clipboard">
    <path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path>
  </svg>`;
  let result = "";
  let myStringSelection = "";

  if (obj.specialCharacters && obj.numbers) {
    myStringSelection = characters + specialCharacters + numbers;
  } else if (obj.specialCharacters && obj.numbers === false) {
    myStringSelection = characters + specialCharacters;
  } else if (obj.numbers && obj.specialCharacters === false) {
    myStringSelection = characters + numbers;
  } else {
    myStringSelection = characters;
  }

  for (let i = 0; i < obj.size; i++) {
    result += myStringSelection.charAt(
      Math.floor(Math.random() * myStringSelection.length)
    );
  }

  input.value = result;
}

button.addEventListener("click", handleButtonClick);

checkbox1.addEventListener("change", function () {
  if (this.checked) {
    myObject.specialCharacters = true;
    getRandomPassword(myObject);
  } else {
    myObject.specialCharacters = false;
    getRandomPassword(myObject);
  }
});

checkbox2.addEventListener("change", function () {
  if (this.checked) {
    myObject.numbers = true;
    getRandomPassword(myObject);
  } else {
    myObject.numbers = false;
    getRandomPassword(myObject);
  }
});

slider.oninput = function () {
  sliderValue.innerHTML = this.value;
  myObject.size = this.value;
  getRandomPassword(myObject);
};

function handleButtonClick() {
  console.log(input.value);
  navigator.clipboard.writeText(input.value);
  // button.innerText = "Copied!";
  button.innerHTML = `<svg aria-hidden="true" fill="#71db2a" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="success">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
    </svg>`;

  button;
}

getRandomPassword(myObject);
