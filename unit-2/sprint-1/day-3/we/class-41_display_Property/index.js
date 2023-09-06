
window.addEventListener('scroll',()=>{
    
    let para1= document.getElementById('sp5')

    if(window.scrollY > 1000){
       para1.classList.add('element_none')// add either fixed property or sticky property 
       //both work for desired output
       
    }else{
        para1.classList.remove('element_none')
    }
})