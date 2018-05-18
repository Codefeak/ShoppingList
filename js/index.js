const items = [
                {
                  name:'Egg',
                  qty:15,
                },
                {
                  name:'Bread',
                  qty:1,
                },
                {name:'Detergent',
                 qty:1,
               },
                {name:'Coffee',
                 qty:1,
               },
                {name:'Avocado',
                qty:1,
                },
              ];

const doneLocation = document.getElementById('done-container');
const itemsData = document.getElementById('to-do-list-content');
document.forms[0].addEventListener('click', handleClick);

const formDataDiv = () => {
  let listDiv = document.createElement('div');
  listDiv.className = "to-do-list";
  let inputDiv= document.createElement('input');
  inputDiv.type="checkbox";
  inputDiv.addEventListener('click', handleClick);

  let labelDiv = document.createElement('label');
  let paraDiv = document.createElement('p');
  let paraDiv1 = document.createElement('p');
  paraDiv1.className = "delete";

  itemsData.appendChild(listDiv);
  listDiv.appendChild(inputDiv);
  listDiv.appendChild(labelDiv);

  listDiv.appendChild(paraDiv);
  paraDiv1.innerHTML = "X";

  paraDiv1.type = "button";
  paraDiv1.addEventListener('click', handleClick);
  // paraDiv1.addEventListener('click', deleteItem);
  listDiv.appendChild(paraDiv1);

}

const addData = () => {
  for(let i = 1; i < items.length+1; i++){
    formDataDiv();
    const currentElement = itemsData.childNodes[2+i];
    currentElement.id = 'item-con-0'+i;
    currentElement.childNodes[0].id = "item-0"+i;
    currentElement.childNodes[1].innerHTML = items[i-1].name;
    currentElement.childNodes[1].htmlFor = currentElement.childNodes[0].id;
    currentElement.childNodes[2].innerHTML = items[i-1].qty;
    currentElement.childNodes[1].id = currentElement.childNodes[0].id;
    currentElement.lastChild.id = currentElement.childNodes[0].id;
  }
}

const addNewData = (e) => {
  const itemName = document.getElementById('in-item-name').value;
  const itemQty = document.getElementById('in-item-qty').value;
  const itemArea = document.getElementById('in-item-name');
  const qtyArea = document.getElementById('in-item-qty');
  if(itemName === "" || itemQty === ""){
    if(itemName ===""){
       itemArea.style.transitionDuration = '2s';
       itemArea.style.backgroundColor='#ff000073';
       itemArea.placeholder = "Add Items Here!!!";
    }else if(itemQty===""){

       qtyArea.style.transitionDuration = '2s';
       qtyArea.style.backgroundColor='#ff000073';
    }
  }else{
    formDataDiv();
    currentElement = itemsData.lastChild;
    currentElement.id = 'item-con-0'+Math.random();
    currentElement.childNodes[1].innerHTML = itemName;
    currentElement.childNodes[1].id = currentElement.id;
    currentElement.childNodes[2].innerHTML = itemQty;
    currentElement.childNodes[2].id = currentElement.id;
    currentElement.childNodes[0].id = currentElement.id;
    currentElement.childNodes[3].id = currentElement.id;
    document.getElementById('in-item-name').value ="";
    document.getElementById('in-item-qty').value="";
    console.log(itemArea);
    itemArea.placeholder = "Item Name";
    document.forms[0].reset();
    itemArea.style.backgroundColor="transparent";
    qtyArea.style.backgroundColor='transparent';
    }
    ;
}

const toggleDone = () => {
  const doneLocation = document.getElementById('done-container');
  doneLocation.style.display === 'none' ? doneLocation.style.display ='block' : doneLocation.style.display ='none';
}

const deleteItem = (event) => {
  const currentId = event.target.id;
  console.dir (event.target);
  event.target.parentElement.remove();

};

const checkedItem = (event) => {
  let newLocation = document.createElement('div');

  doneLocation.appendChild(newLocation);
  newLocation.className = "done-list";

  const childElement = itemsData.firstChild.firstChild;
  const currentId = event.target.parentElement.id;
  event.target.style.display = "none";

  const undo = document.createElement('p');
  undo.innerText = "<ך";
  event.target.parentElement.prepend(undo);

  const parentDiv = document.getElementById(currentId);
  newLocation.id = parentDiv.id;

  const tempValue = parentDiv.innerHTML;
  parentDiv.remove();
  newLocation.innerHTML= tempValue;
  // newLocation.firstChild.addEventListener('click', handleUndo);
  // newLocation.lastChild.addEventListener('click', deleteItem);
  newLocation.addEventListener('click', handleClick);
}

function handleClick(e){
  if(e.target.id ==='add-button') addNewData(e);
  else if(e.target.className === 'delete') deleteItem(e);
  else if (e.target.innerText==="<ך") handleUndo(e);
  else if (e.target.tagName=== 'INPUT' && e.target.type==="checkbox") checkedItem(e);
  // else if (e.target.tagName === )
}

function handleUndo(event) {
  let newLocation = document.createElement('div');

  itemsData.appendChild(newLocation);
  newLocation.className = "done-list";

  const childElement = doneLocation.firstChild.firstChild;
  event.target.style.display = "none";
  event.target.nextSibling.style.display = "inline-block";

  const parentDiv =event.target.parentElement;
  newLocation.id = parentDiv.id;

  const tempValue = parentDiv.innerHTML;
  parentDiv.innerHTML= "";
  newLocation.innerHTML= tempValue;
  newLocation.firstChild.remove();
  newLocation.className="to-do-list";
  newLocation.lastChild.addEventListener('click', deleteItem);
  newLocation.firstChild.addEventListener('click', checkedItem);
}
