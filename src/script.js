let addbtn = document.querySelector('#addbtn');
let maininput = document.querySelector('#maininput');
let divcontainer = document.querySelector('.divcontainer'); // parent div
let inputdiv = document.querySelector('.input'); // child div
divcontainer.removeChild(inputdiv )
const value = [];

addbtn.addEventListener('click', () => {

  if (maininput.value === "") {
    alert('Please insert a value');
    return;
  }

  if (value.includes(maininput.value)) {
    alert('Already Exist');
    maininput.value = "";
    return;
  }
if(maininput.value!==""){
  const newDiv = inputdiv.cloneNode(true);
  newDiv.style.marginBottom="8px";

  newDiv.querySelector('.inputText').innerText = maininput.value;
  value.push(maininput.value); 

  maininput.value = "";
// dlt button
  let del=newDiv.querySelector('#delbtn')
del.addEventListener('click',()=>{
 divcontainer.removeChild(newDiv )
})
// tik button
let p= newDiv.querySelector('.inputText').innerText;
  let clear=newDiv.querySelector('#clear')

clear.addEventListener('click',()=>{
  
let inputText = newDiv.querySelector('.inputText');


  if (clear.innerHTML.includes('fa-rotate-right')) {
    
    inputText.innerHTML = p;
    clear.innerHTML = `<i class="fa-solid fa-check"></i>`;
  } else {
    
    inputText.innerHTML = `<del>${p}</del>`;
    clear.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`;
  }
})

// edit button
let editbtn=newDiv.querySelector('#edit');
editbtn.addEventListener('click',()=>{
  let inputText = newDiv.querySelector('.inputText');

  if(editbtn.innerHTML.includes('fas fa-pencil-alt')){
    inputText.innerHTML=`<input type="text" id="editInput" value="${p}" class="editInput  px-2 rounded">`;
    
    let editinput = newDiv.querySelector('#editInput');
    editinput.focus();
    editinput.style.border='none'

  editbtn.innerHTML='<i class="fa-solid fa-floppy-disk"></i>'
  }

 else if (editbtn.innerHTML.includes('fa-floppy-disk')) {
   
    let editinput = newDiv.querySelector('#editInput');
    inputText.innerText = editinput.value;

    
    editbtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
  }
})

  divcontainer.appendChild(newDiv);
  }
  

});

