import {signInUser, createUser} from "./firebaseApi";
import {startSession} from "./session";

const loginBtn = document.querySelector('.sign-up-btn');
const backdropModalLogin = document.querySelector('.backdrop_login');
const closeloginModalBtn = document.querySelector('.modal_login-close');
const formLogin = document.querySelector('.login_form');


loginBtn.addEventListener('click', onClickBtnlogin);
closeloginModalBtn.addEventListener('click', onClickBtnlogin);
backdropModalLogin.addEventListener('click', closeClickBackdrop)
formLogin.addEventListener('submit', onSubmit);


function onClickBtnlogin() {
document.addEventListener('keydown', onCloseModalEsc);
    onToggleModal()
}

function closeClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onToggleModal()
  }
}

function onCloseModalEsc(e) {
  if (e.key === 'Escape') {
    onToggleModal()
    document.removeEventListener('keydown', onCloseModalEsc);
  }
}


function onToggleModal() {
    backdropModalLogin.classList.toggle('js-backdrop-login');
}


async function onSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value
  
    try {
    let loginResponse = await signInUser(email, password);
    startSession(loginResponse.user);
      console.log(loginResponse);
      onToggleModal()
  } catch (error) {
    console.error(error.message);
    setError(error.message);
  }
}
