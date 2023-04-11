// Menu and navbar behavior

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

// end




function calculate() {

  // links

  Name = document.form.Name.value;

  phonenumber = document.form.phonenumber.value;

  ptype = document.form.ptype.selectedIndex;
  ptype = document.form.ptype.options[ptype].value;

  crusttype = document.form.crusttype.selectedIndex;
  crusttype = document.form.crusttype.options[crusttype].value;

  toppings = document.form.toppings.selectedIndex;
  toppings = document.form.toppings.options[toppings].value;

  delivery = document.form.delivery.selectedIndex;
  delivery = document.form.delivery.options[delivery].value;

  location = document.form.location.value;







  // invalid phone number alert

  if ( phonenumber <=0 || phonenumber >12){
      alert('Please enter correct phone number')
   }
   if(ptype == null){
     alert('please select a pizza type')
   }
   if(crusttype== null){
     alert('please select crust type')
   }

  if ( toppings == null){
    alert('please select topping')
  }


  }
