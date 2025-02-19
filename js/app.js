const burger = document.querySelector('.burger')
const sidebar = document.querySelector('#sidebar')
const links = document.querySelectorAll('#sidebar ul li a')

burger.addEventListener('click',()=>{
    sidebar.classList.toggle('is-active')
    burger.classList.toggle('is-active') /*this will display/close the sidebar when we click on the burger*/
})

links.forEach(link => link.addEventListener('click',()=>{
    links.forEach(link => link.classList.remove('is-active')) /*this is to remove the active (is-active) of home link and shift it to the whatever the link we click on*/
    link.classList.add('is-active')
    sidebar.classList.remove('is-active')
    burger.classList.toggle('is-active')
}))

AOS.init({
    duration: 900
});


document.getElementById('read-more').addEventListener('click', () =>{
    const extracontent = document.getElementById('extra-content')
    const card = document.getElementById('card')
    const read = document.getElementById('read-more')
    
    if (extracontent.style.display === 'none' || extracontent.style.display === '') {
        extracontent.style.display = 'block'
        read.textContent = 'READ LESS'
    }
    else {
        extracontent.style.display = 'none'
        read.textContent = 'READ MORE'
    }
    card.style.height = 'auto'
    card.offsetHeight

});


document.getElementById('read-more1').addEventListener('click', () =>{
    const extracontent = document.getElementById('extra-content1')
    const card = document.getElementById('card')
    const read = document.getElementById('read-more1')
    
    if (extracontent.style.display === 'none' || extracontent.style.display === '') {
        extracontent.style.display = 'block'
        read.textContent = 'READ LESS'
    }
    else {
        extracontent.style.display = 'none'
        read.textContent = 'READ MORE'
    }
    card.style.height = 'auto'
    card.offsetHeight

});

