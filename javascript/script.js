var e = document.querySelector(".navbar-items")

function handleToggle(){
e.classList.toggle("toggle-off")
}
function handleNew(e){
  var id = 'new-'+ e
  
  var info = document.getElementById(id)
  info.classList.toggle("news-off")
}