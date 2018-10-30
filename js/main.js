function validateForm() {
  const requiredElements = document.querySelectorAll(".required");
  const phoneNumber = document.forms ["infoForm"]["phonenumber"].value;
  const email = document.forms["infoForm"]["email"].value;
  const postalcode = document.forms ["infoForm"]["postalcode"].value;
  const phoneNumberFormat = /^[+]\d{12}$/;

  for(let i = 0; i<requiredElements.length;i++){
    if (requiredElements[i].value === "") {
      alert("Required fields must be filled out");
      return false;
    }
  }

  if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
    alert("You have entered an invalid email address!");
    return false;
  }else if(!(phoneNumber.match(phoneNumberFormat))){
    alert("You have entered an invalid phone number");
    return false;
  }else if(postalcode !==""){
    if(postalcode.length !== 5 || isNaN(postalcode)){
      alert("You have entered an invalid postal code");
      return false;
    }
  }else {
    return true;
  }

}
