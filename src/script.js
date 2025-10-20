let addbtn = document.querySelector('#addbtn');
let maininput = document.querySelector('#maininput');
let divcontainer = document.querySelector('.inputs'); // parent div
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
  // clone the child div
  const newDiv = inputdiv.cloneNode(true);
  newDiv.style.marginBottom="8px";
  
  // change the text inside the cloned div
  newDiv.querySelector('.kire').innerText = maininput.value;

  // add the new value to the array
  value.push(maininput.value);

  // clear input
  maininput.value = "";

  // ✅ append the cloned div into the parent container
  divcontainer.appendChild(newDiv);
  }
});
