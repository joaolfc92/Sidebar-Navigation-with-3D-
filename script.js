
var header = document.getElementById('header');
var mainContent = document.getElementById('main')
var menu = document.getElementById('menu')


menu.addEventListener('click', ()=>{
   header.classList.toggle('active');
   mainContent.classList.toggle('active');
})


window.onclick = (event) =>{
    if(event.target.matches('.active')){
        if(header.classList.contains('active')){
            header.classList.remove('active')
            mainContent.classList.remove('active')
        }
    }
}