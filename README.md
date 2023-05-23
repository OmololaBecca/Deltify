const navToggle = document.getElementById('nav-toggle')
const navList = document.getElementById('navlist')

function classToggle() {
    navList.style = "display: flex"
    navList.classList.add("clicked")
  }

  function removeToggle(){
    navList.style = "display: none"
    navList.classList.remove("clicked")
  }


navToggle.addEventListener("click", () => {
  const isClicked = navList.classList.contains("clicked")
  if(isClicked){
    removeToggle()
  }else{
    classToggle()
  }
})