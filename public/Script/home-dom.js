const lognBtn = document.querySelector('.login')
const signup = document.querySelector('.sign-up')
const bgOverlay = document.querySelector('.bg-overlay');
const logOutForm = document.querySelector('.log-out-form')
const faUserAlt = document.querySelector('.fa-user-alt')
const userNameDom = document.querySelector('.user-name-dom')

function openForm() {
  document.getElementById("myForm").style.display = "block";
  bgOverlay.style.display = 'block'

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  bgOverlay.style.display = 'none'

}

fetch('/checkuser')
  .then(response => response.json())
  .then(data => {
      if(data.status === true){
          if (document.cookie != ''){
            lognBtn.textContent = 'create post'
            lognBtn.removeAttribute('href')
            logOutForm.style.display = 'block'
            lognBtn.setAttribute("onclick","openForm()");
            signup.style.display = 'none';
            faUserAlt.style.display = 'none'
            userNameDom.textContent = document.cookie.split('=')[1]
            console.log(document.cookie.split('=')[1])

          }
      }else{
        console.log('not login')
      }
  });


