"use strict";

const addTasks = document.querySelector("form");
const inputTasks = document.querySelector('input');
const listItem = document.querySelector("ul");

const taskList = [
];


// function deleteItem(){
//     let task = e.target.parentElement.previousElementSibling.innerHTML;
//     let index = taskList.indexOf(task);
//     if(index !== -1){
//         taskList.splice(index, 1);

//     }
//     populatingList();
//}
const populatingList = function (){
      listItem.innerHTML = "";
      
     taskList.forEach(function(list){
        const newList = document.createElement('li');
        const span = document.createElement('span')
        span.innerHTML = `<input type = "checkbox"/><span> ${list} </span> <button> Delete</button>`;
    
        newList.appendChild(span); 

        // span.addEventListener("click", (e) => deleteItem(e))


        listItem.appendChild(newList);

        
    })
    inputTasks.value = '';
    //const rem1 = document.createElement('')
}
populatingList();

// to add tasks from the input element
function addItem (){
    if (inputTasks.value){
        taskList.push(inputTasks.value);
        populatingList();
    }
    
    
}

addTasks.addEventListener("submit", function(e){
  e.preventDefault();
  console.log("clicked");
  addItem();
  
})
  

listItem.addEventListener('click', (e)=> {
    if(e.target.tagName === 'BUTTON'){

        console.log("how come");
     const listTem = e.target.parentElement;
        console.log(listTem);
        listItem.removeChild(listItem.firstChild);
        
        //listItem.remove(addItem)
        
       
    }
    // addItem.remove() = "";
    // taskList.remove();
})
















// btnSubmit.addEventListener('click', function(e){
//    e.preventDefault();
   
   
  

//   //   inputText.forEach(function(sentence){
//   //     for(let i = 1; i <=10; i++ ){
//   //       console.log(sentence);
//   //     }

//   //  })
   
//    // inputText.textContent = `${listAll}`
//    // listItem.style.opacity = 100;
//    // console.log('hi');
// })

