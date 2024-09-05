let ourForm = document.getElementById("ourForm");
let ourFild = document.getElementById("ourFild");
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createItem(ourFild.value)
});

function createItem(formData){
  let ourHtml = `<li class="pt-2">${formData} <button onclick="deleteItem(this)" class="bg-green-400 px-4 mx-4 rounded-full">Delete</button></li>`
  ourList.insertAdjacentHTML("beforeend", ourHtml)
  ourFild.value = ""
  ourFild.focus()
}


function deleteItem(toDelete){
  toDelete.parentElement.remove()
}
