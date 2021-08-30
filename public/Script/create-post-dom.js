const lognBtn = document.querySelector('.login')
const signup = document.querySelector('.sign-up')

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

fetch('/checkuser')
  .then(response => response.json())
  .then(data => {
      if(data.status === true){
          if (document.cookie != ''){
            lognBtn.textContent = 'create post'
            // lognBtn.href = '/create-post.html'
            lognBtn.onclick="openForm()"
            signup.style.display = 'none';
            console.log(document.cookie.split('=')[1])
          }
      }else{
        console.log('not login')
      }
  });