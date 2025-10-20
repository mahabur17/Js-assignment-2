let addbtn=document.querySelector('#addbtn')
let maininput=document.querySelector('#maininput')
let inputdiv=document.querySelector('.inputs')
let work=document.querySelector('.kire')
const value=[]


addbtn.addEventListener('click',()=>{
 
  if(maininput.value==""){
    alert('Please insert a value')
  }
  if(maininput.value!=="" && value.includes(maininput.value) ){
    alert('Already Exist')
  }
   if(maininput.value!==""){
work.innerHTML=maininput.value
value.push(maininput.value)
maininput.value=""
inputdiv.classList.remove('hidden');
  }
  
  
})