const successNotification = () =>{
    const errors = document.querySelectorAll(".error");
    const success = document.querySelector(".success")

    const all_errors = [...errors]
     
  if(all_errors.every((error) => error.textContent == "")){

    success.style.opacity = "1";
    success.scrollIntoView({
      behavior: "smooth"
    })

   setTimeout(() =>{
    success.style.opacity = "0";
   }, 2000);
   
}else{
    success.style.opacity = "0";
}
}

const validateForm = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => input.classList.remove("invalid"));

  const textareas = document.querySelectorAll("textarea");
  textareas.forEach((value) => {
    value.classList.remove("invalid");
  });

  const firstName = document.querySelector(".first-name");
  const firsterror = document.querySelector(".firsterro");

  if (firstName.value == "") {
    firstName.classList.add("invalid");
    firsterror.textContent = "This field is required";
  }

  firstName.addEventListener("input", () => {
    firstName.classList.remove("invalid");
    firsterror.textContent = "";
  });

  
  const lastName = document.querySelector(".last-name");
  const lastnameerror = document.querySelector(".lasterror");

  if (lastName.value == "") {
    lastName.classList.add("invalid");
    lastnameerror.textContent = "This field is required";
  }

  lastName.addEventListener("input", () => {
    lastName.classList.remove("invalid");
    lastnameerror.textContent = "";
  });

  const emalA = document.querySelector(".email");
  const emalierror = document.querySelector(".emailerro");

  if (emalA.value == "") {
    emalA.classList.add("invalid");
    emalierror.textContent = "This field is required";
  }

  emalA.addEventListener("input", () => {
    emalA.classList.remove("invalid");
    emalierror.textContent = "";
  });

  const textArea = document.querySelector("#text_area");
  const texterror = document.querySelector(".textareeor");

  if (textArea.value == "") {
    textArea.classList.add("invalid");
    texterror.textContent = "This field is required";
  }

  textArea.addEventListener("input", () => {
    textArea.classList.remove("invalid");
    texterror.textContent = "";
  });

  const buttonerror = document.querySelector(".butterror");
  if (
    !(
      button1.classList.contains("selected") ||
      button2.classList.contains("selected")
    )
  ) {
    buttonerror.textContent = "Please select a query type";
  }
  button1.addEventListener("click", () =>{
    buttonerror.textContent = ""
  })

   button2.addEventListener("click", () =>{
    buttonerror.textContent = ""
  })



const consenterror = document.querySelector(".consenterror");

if(consentGiven.style.display !== "block"){
    consenterror.textContent =
    "To submit this form, Please consent to being contacted";
}else{
    consenterror.textContent = "";
}
};

document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
  successNotification()
});



const button1 = document.querySelector(".btnn1");
const button2 = document.querySelector(".btnn2");
const butt_img = document.querySelectorAll("button span img");

button1.addEventListener("click", () => {

  button1.classList.add("selected");
  butt_img[0].style.display = "block";
  

  button2.classList.remove("selected");
  butt_img[1].style.display = "none";
  
  

});

button2.addEventListener("click", () => {

  button2.classList.add("selected");
  butt_img[1].style.display = "block";

  button1.classList.remove("selected");
  butt_img[0].style.display = "none";

  buttonerror.textContent = ""

});

const consent = document.querySelector(".consent");
const consentGiven = document.querySelector(".consent-click img");
const consenterror = document.querySelector(".consenterror");

consent.addEventListener("click", ()=>{
    if(consentGiven.style.display == "block"){
        consentGiven.style.display = "none"
    }else{
        consentGiven.style.display = "block"
        consenterror.textContent = ""
    }
})
