var userID = document.querySelector('#UserID');
var statusOfUserID = document.querySelector('#statusOfUserID')

userID.addEventListener('focusout', leaveUserID);
function leaveUserID() {
  if (userID.value.length >= 5 && userID.value.length <= 12) {
    statusOfUserID.textContent = 'UserID hợp lệ'
  }
  else {
    statusOfUserID.textContent = "UserID không hợp lệ"
  }
}

var passWord = document.querySelector('#Password')
var statusOfPassword = document.querySelector('#statusOfPassword')
passWord.addEventListener('focusout', leavePassword);
function leavePassword() {
  if (passWord.value.length >= 7 && passWord.value.length <= 12) {
    statusOfPassword.textContent = 'Password hợp lệ'
  }
  else {
    statusOfPassword.textContent = 'Password không hợp lệ'
  }
}

var Name = document.querySelector('.Name');
var statusofName = document.querySelector('.statusofName')

Name.addEventListener('focusout', leaveName);
function leaveName() {
  if (isNaN(Name.value)) {
    statusofName.textContent = 'Tên hợp lệ'
  }
  else {
    statusofName.textContent = 'Tên không hợp lệ'
  }
}

var Code = document.querySelector('#Code')
var statusofCode = document.querySelector('#statusofCode')

Code.addEventListener('focusout', leaveCode);
function leaveCode() {
  if (!isNaN(Code.value) && Code.value != null) {
    statusofCode.textContent = 'Code hợp lệ'
  }
  else {
    statusofCode.textContent = 'Code không hợp lệ'
  }
}

var email = document.getElementById('Email');
var statusofEmail = document.getElementById('statusofEmail')

email.addEventListener('focusout', checkEmail);
function checkEmail() {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) {
    statusofEmail.textContent = 'Email không hợp lệ';
    return false;
  }
  else {
    statusofEmail.textContent = 'Email hợp lệ'
  }
}


var Country = document.querySelector('select');
var statusOfCountry = document.getElementById('statusOfCountry')

function leaveCountry() {
  var option = Country.options[Country.selectedIndex];
  if (option.value !== 'None') {
    statusOfCountry.textContent = 'Hợp lệ'
  } else {
    statusOfCountry.textContent = 'Vui lòng chọn'
  }
}
Country.addEventListener('focusout', leaveCountry);

var Sex = document.querySelector('#sex');
var statusOfSex = document.getElementById('statusOfSex')
var x = document.getElementById('Male');
var y = document.getElementById('Female');
Sex.addEventListener('focusout', leaveSex);
function leaveSex() {
  if (x !== null || y !== null) {
    statusOfSex.textContent = 'Ok'
  }
  else {
    statusOfSex.textContent = 'Vui lòng chọn'
  }
}

var Sex = document.querySelector('.language');
var statusOfLanguage = document.getElementById('statusOfLanguage')
var a = document.getElementById('English');
var b = document.getElementById('Non-English');
Sex.addEventListener('focusout', leaveLanguage);
function leaveLanguage() {
  if (a !== null || b !== null) {
    statusOfLanguage.textContent = 'Ok'
  }
  else {
    statusOfLanguage.textContent = 'Vui lòng chọn'
  }
}

const handleSubmit = () => {
  console.log("Submitting...")
  userID.addEventListener('focusout', leaveUserID());
  passWord.addEventListener('focusout', leavePassword());
  Name.addEventListener('focusout', leaveName());
  Code.addEventListener('focusout', leaveCode());
  email.addEventListener('focusout', checkEmail());
  Country.addEventListener('focusout', leaveCountry());
  Sex.addEventListener('focusout', leaveSex());

}