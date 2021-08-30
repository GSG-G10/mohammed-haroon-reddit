const url = new URL(document.URL)
const username = document.querySelector('.username')
const name = document.querySelector('.name')
const email = document.querySelector('.email')


fetch('/checkuser')
  .then(response => response.json())
  .then(data => {
      if(data.status === true){
          if (document.cookie != ''){
            fetch(`/profiledata/${url.pathname.split('/')[2]}`,{method: 'GET'})

            .then(response => response.json())
            .then(data => {
                console.log(data[0]);
                username.textContent = `${data[0].username}`;
                name.textContent = `${data[0].name}`;
                email.textContent = `${data[0].email}`;
            })
            .catch(err => console.log(err))
          }
      }else{
        console.log('no user found')
      }
  });

