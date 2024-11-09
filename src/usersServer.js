function Users(){
  let fName = document.getElementById("inpt1");
        let lName = document.getElementById("inpt2");
        let email = document.getElementById("inpt3");
        let pass = document.getElementById("inpt4");
        let country = document.getElementById("inpt5");

        let arrProject;
          if(localStorage.product != null){
            arrProject = JSON.parse(localStorage.product);
          }else{
            arrProject = [];
          }
          
          let opProject = {
            firstName: fName.value,
            lastName: lName.value,
            Email: email.value,
            Password: pass.value,
            Country: country.value,
          }
          arrProject.push(opProject);
          localStorage.setItem("product",JSON.stringify(arrProject))
          console.log(arrProject);
          
          console.log(fName.value);
          console.log(lName.value);
          console.log(email.value);
          console.log(pass.value);
          console.log(country.value);
}

export default Users;