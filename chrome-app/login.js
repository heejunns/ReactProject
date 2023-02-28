const $loginForm = document.querySelector('#login-form');
const $joinForm = document.querySelector('#join-form');
const $loginId = document.querySelector('#login');
const $loginPassword = document.querySelector('#password');
const $loginButton = document.querySelector('#loginButton');
const $joinButton = document.querySelector('#joinMembership');
const $idCheckButton = document.querySelector('#idCheck');
const $joinSuccessButton = document.querySelector('#joinSuccess');
const $joinId = document.querySelector('#joinId');
const $joinPassword = document.querySelector('#joinPassword');
const $loginScreen = document.querySelector('#loginScreen');
const $logoutButton = document.querySelector('#logoutButton');

const $loginSucess = document.querySelector('#loginsuccess');

const Hidden_ClassName = 'hidden';

let currentId = null;

function submitClick(event) {
  //
  event.preventDefault();
  const loginId = $loginId.value;
  const loginPassword = $loginPassword.value;
  if (!localStorage.getItem(loginId)) {
    alert('아이디가 일치하지 않습니다.');
    return;
  } else if (localStorage.getItem(loginId) !== loginPassword) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }
  $loginForm.classList.add(Hidden_ClassName);
  printLoginSuccess(loginId);
  localStorage.setItem('username', loginId);
  currentId = loginId;
}

function printLoginSuccess(username) {
  $loginScreen.classList.remove(Hidden_ClassName);
  $loginSucess.textContent = `당신의 아이디는 ${username} 입니다.`;
}

// const user = localStorage.getItem('username');

function clickIdCheck(event) {
  event.preventDefault();

  if (localStorage.getItem($joinId.value) == null) {
    console.log('중복되는 아이디가 없습니다. 회원가입 가능!');
  } else {
    console.log('중복되는 아이디가 있습니다. 다시 입력해 주세요.');
  }
}

function clickJoinSuccess(event) {
  event.preventDefault();
  localStorage.setItem($joinId.value, $joinPassword.value);
  console.log(localStorage);
  $joinForm.classList.add(Hidden_ClassName);
  $loginForm.classList.remove(Hidden_ClassName);
}

function clickJoinButton() {
  $loginForm.classList.add(Hidden_ClassName);
  $joinForm.classList.remove(Hidden_ClassName);
  $idCheckButton.addEventListener('click', clickIdCheck);
  $joinSuccessButton.addEventListener('click', clickJoinSuccess);
}

function clickLogOut() {
  $loginScreen.classList.add(Hidden_ClassName);
  $loginForm.classList.remove(Hidden_ClassName);
}

$logoutButton.addEventListener('click', clickLogOut);
if (currentId == null) {
  $loginForm.classList.remove(Hidden_ClassName);
  $loginForm.addEventListener('submit', submitClick);
  $joinButton.addEventListener('click', clickJoinButton);
} else {
  // currentId 가 있다면
  printLoginSuccess(currentId);
}
