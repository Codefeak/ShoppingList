
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

// const doneItemsList = [];

const addData = () => {
  const itemsData = document.getElementById('to-do-list-content');
  // console.dir(doneData.childNodes[1]);
  // itemsData.innerHTML = "";
    for(let i = 0; i < items.length; i++){
      if(items[i].stats=true){
        let listDiv = document.createElement('div');
        listDiv.className = "to-do-list";
        listDiv.id = "item-con-0"+i;

        let inputDiv= document.createElement('input');
        inputDiv.type="checkbox";
        inputDiv.id = "item-0"+i;
        inputDiv.addEventListener('click', checkedItem);

        let labelDiv = document.createElement('label');
        labelDiv.htmlFor = inputDiv.id;
        let paraDiv = document.createElement('p');
        let paraDiv1 = document.createElement('p');
        paraDiv1.className = "delete";
        itemsData.appendChild(listDiv);
        labelDiv.innerHTML = items[i].name;

        listDiv.appendChild(inputDiv);
        listDiv.appendChild(labelDiv);

        paraDiv.innerHTML = items[i].qty;
        listDiv.appendChild(paraDiv);

        items[i].stat = true;
        paraDiv1.innerHTML = "X";
        paraDiv1.id = inputDiv.id;
        paraDiv1.type = "button";
        paraDiv1.addEventListener('click', deleteItem);
        listDiv.appendChild(paraDiv1);
        }
  }
};


const addNewData = () => {
  const itemsData = document.getElementById('to-do-list-content');
  const itemName = document.getElementById('in-item-name').value;
  const itemQty = document.getElementById('in-item-qty').value;
  items.push({name:itemName,qty:itemQty, stat:true,});
  // addData();
  let i = items.length-1
  let listDiv = document.createElement('div');
  listDiv.className = "to-do-list";
  listDiv.id = "item-con-0"+i;

  let inputDiv= document.createElement('input');
  inputDiv.type="checkbox";
  inputDiv.id = "item-0"+i;
  inputDiv.addEventListener('click', checkedItem);

  let labelDiv = document.createElement('label');
  labelDiv.htmlFor = inputDiv.id;
  let paraDiv = document.createElement('p');
  let paraDiv1 = document.createElement('p');
  paraDiv1.className = "delete";
  itemsData.appendChild(listDiv);
  labelDiv.innerHTML = itemName;

  listDiv.appendChild(inputDiv);
  listDiv.appendChild(labelDiv);

  paraDiv.innerHTML = itemQty;
  listDiv.appendChild(paraDiv);

  // items[i].stat = true;
  paraDiv1.innerHTML = "X";
  paraDiv1.id = inputDiv.id;
  paraDiv1.type = "button";
  paraDiv1.addEventListener('click', deleteItem);
  listDiv.appendChild(paraDiv1);
  document.getElementById('in-item-name').value ="";
  document.getElementById('in-item-qty').value="";
};


const deleteItem = (event) => {
  const currentId = event.target.id;
  const parentDiv = document.getElementById(currentId).parentElement;
  console.log(parentDiv);
  parentDiv.remove();
};

const checkedItem = (event) => {
  const itemsDataLoc = document.getElementById('to-do-list-content');
  const doneLocation = document.getElementById('done-container');
  let newLocation = document.createElement('div');

  doneLocation.appendChild(newLocation);
  newLocation.className = "done-list";
  // newLocation.id =

  const childElement = itemsDataLoc.firstChild.firstChild;
  const currentId = event.target.id;

  event.target.style.display = "none";
  const undo = document.createElement('p');
  undo.innerText = "<ך";

  event.target.parentElement.prepend(undo);

  console.dir(event.target);
  const parentDiv = document.getElementById(currentId).parentElement;
  newLocation.id = parentDiv.id;

  const tempValue = parentDiv.innerHTML;

  // const inputDiv = input.querySelector('input');
  parentDiv.remove();
  newLocation.innerHTML= tempValue;
  newLocation.firstChild.addEventListener('click', handleUndo);
  newLocation.lastChild.addEventListener('click', deleteItem);
  console.dir(newLocation.childNodes[2].innerText);
  // if (items.name == newLocation.childNodes[2].innerText){
  //   continue;
  // }
  // console.dir();
}

// const handleClick = (event) => {
//   console.log(event.parentElement);
//   if (event.target.firstChild ){
//     handleUndo();
//   }
//   if (event.target.lastChild.className = 'delete' ){
//     deleteItem();
//   }
// }

const toggleDone = () => {
  const temp = document.getElementById('done-container');
  temp.style.display === 'none' ? temp.style.display ='block' : temp.style.display ='none';
}

function handleUndo(event) {
  const itemsDataLoc = document.getElementById('to-do-list-content');
  const doneLocation = document.getElementById('done-container');
  let newLocation = document.createElement('div');

  itemsDataLoc.appendChild(newLocation);
  newLocation.className = "done-list";

  const childElement = doneLocation.firstChild.firstChild;

  event.target.style.display = "none";
  event.target.nextSibling.style.display = "inline-block";
  console.log(event.target.nextSibling);

  console.dir(event.target.tagName);
  const parentDiv =event.target.parentElement;
  newLocation.id = parentDiv.id;

  const tempValue = parentDiv.innerHTML;

  // const inputDiv = input.querySelector('input');
  parentDiv.innerHTML= "";
  newLocation.innerHTML= tempValue;
  newLocation.firstChild.remove();
  newLocation.className="to-do-list";
  newLocation.lastChild.addEventListener('click', deleteItem);
  newLocation.firstChild.addEventListener('click', checkedItem);
}
