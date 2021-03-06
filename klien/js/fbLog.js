window.fbAsyncInit = function() {
    FB.init({
      appId            : '2025126734167274',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.1'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function checkLoginState(){
      FB.getLoginStatus(function(response){
          console.log(response);
          
          if (response.status === 'connected') {
              axios.post('http://localhost:3000/user/signin/facebook', response.authResponse)
              
              .then(data => {
                  console.log(data)
              })
              .catch(err => {
                  console.log(err)
              })
          } 
      })
  }

