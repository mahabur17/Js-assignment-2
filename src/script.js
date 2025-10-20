let addbtn=document.querySelector('#addbtn')
let maininput=document.querySelector('#maininput')
let inputdiv=document.querySelector('.inputs')
let work=document.querySelector('.kire')

addbtn.addEventListener('click',()=>{
 
  if(maininput.value==""){
    alert('Please insert a value')
  }
  else{
work.innerHTML=maininput.value
 inputdiv.classList.remove('hidden');

  }
  
})