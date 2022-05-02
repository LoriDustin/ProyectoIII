let menu = document.querySelector('#menu-bars');
let home = document.querySelector('.nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    home.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    home.classList.remove('active');
}


document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});