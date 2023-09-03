
window.addEventListener('scroll',()=>{
    
    let navbar= document.getElementById('menu-navbar')

    if(window.scrollY > 303.2){
       navbar.classList.add('fixed') // add either fixed property or sticky property 
       //both work for desired output
       
    }else{
        navbar.classList.remove('fixed')
    }
})