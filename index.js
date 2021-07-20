function validation() {
          var username = document.getElementById("Username").value;
          var password = document.getElementById("Password").value;
          if ((username=="zeaanpithawala13@gmail.com" && password=="zeaanpithawala") || (username=="urvisingh151@gmail.com" && password=="urvisingh") || (username=="shivansh210802@gmail.com" && password=="shivanshsingh") || (username=="chiragpareek02@gmail.com" && password=="chiragpareek") || (username=="dsdhruvsharma12@gmail.com" && password=="dhruvsharma") || (username=="nandikasahani02@gmail.com" && password=="nandikasahani") || (username=="reapasricha2002@gmail.com" && password=="reapasricha") || (username=="rishurwish@gmail.com" && password=="rishabhanant") || (username=="goelrythem@gmail.com" && password=="rythemgoel") || (username=="anu17254@gmail.com" && password=="anushamahmood")){
            location.replace("https://zeaan.github.io/Food-Allergen-Database/googleform.html");
          }
          else{
            alert("Wrong Username or Password is incorrect");
          }
        }
