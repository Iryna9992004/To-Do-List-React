console.log("Sidebar");
const menuIcon=document.querySelector('.menu-icon');

if(menuIcon){
const menu=document.querySelector('.side-nav');
  menuIcon.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
    menu.classList.toggle('_active');
  });
}