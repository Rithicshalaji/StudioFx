function validation(){
  if(document.Formfill.Username.value==""){
    document.getElementById("result").innerHTML="Enter Username*";
    return false;
  }
  
  else if(document.Formfill.Email.value==""){
    document.getElementById("result").innerHTML="Enter Your Email*";
    return false;
  }
  else if(document.Formfill.Password.value==""){
    document.getElementById("result").innerHTML="Enter Your Password";
    return false;
  }
  else if(document.Formfill.CPassword.value.length<6){
    document.getElementById("result").innerHTML="Password must be 6-digits";
    return false;
  }
  else if(document.Formfill.CPassword.value==""){
    document.getElementById("result").innerHTML="Enter Confirm Password";
    return false;
  }
  else if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
    document.getElementById("result").innerHTML="Password does'nt matched";
    return false;
  }
 
}

let imgBx = document.querySelectorAll('.imgBx');
let gcontentBx = document.querySelectorAll('.gcontentBx')

for (let i=0; i<imgBx.length; i++){
  imgBx[i].addEventListener('mouseover', function(){
    for (let i=0; i<gcontentBx.length; i++){
      gcontentBx[i].className = 'gcontentBx';
    }
    document.getElementById(this.dataset.id).className = 'gcontentBx active';

    for (let i=0; i<imgBx.length; i++){
      imgBx[i].className = 'imgBx';
    }
    this.className = 'imgBx active';
  })

}


AOS.init({
        offset: 200,
        duration: 1000
    });
