const $form = document.querySelector('#login-form');
const $input = document.querySelector('#login-form input');
const $button = document.querySelector('#login-form button');
function submitClick() {
  //   event.preventDefault();
  const loginId = $input.value;
  if (!loginId) {
    console.log('아이디를 입력 해주세요.');
    return;
  } else if (loginId.length > 10) {
    console.log('아이디는 10글자 이하 입니다.');
    return;
  }
  console.log(loginId);
}

$form.addEventListener('submit', submitClick);
