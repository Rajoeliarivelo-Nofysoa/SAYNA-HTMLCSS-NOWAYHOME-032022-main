let btninverse = document.getElementsByClassName('btninverse')
console.log(btninverse);
for ( let i =0; i<btninverse.length;i++){
    btninverse[i].addEventListener('mouseover',()=>{
    btninverse[i].style.backgroundColor='#b11313';
    btninverse[i].style.color='white';
    btninverse[i].style.fontWeight='bold';
    btninverse[i].style.boxShadow='5px 5px 30px white';
    });
    btninverse[i].addEventListener('mouseout',()=>{
        btninverse[i].style.backgroundColor='white';
        btninverse[i].style.color='#b11313';
        btninverse[i].style.boxShadow='none';
    });
}

let icons1 = document.getElementsByClassName('icons1')
for ( let i =0; i<icons1.length;i++){
    icons1[i].addEventListener('mouseover',()=>{
    icons1[i].style.color='white';
    });
    icons1[i].addEventListener('mouseout',()=>{
    icons1[i].style.color='black';
    });
}

let menu = document.querySelectorAll('li')
console.log(menu)
menu.forEach(function(li){
li.addEventListener('mouseover',()=>{
    li.style.textDecoration='line-through';
});
li.addEventListener('mouseout',()=>{
    li.style.textDecoration='none';
});
})

$(document).ready(function(){
    $(".box").animate({
        left:'30px'
    }, "slow");
    $(".description").fadeIn(4000);
})