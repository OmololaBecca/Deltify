  const navToggle= document.getElementById('nav-toggle');
  const navlist =document.getElementById('navlist');

  function addToggle(){
    navlist.classList.add('clicked')
    navlist.style ="display:flex"
  }

  function removeToggle(){
    navlist.classList.remove('clicked')
    navlist.style= "display:none"
  }

  navToggle.addEventListener('click', ()=> {
    const isClicked= navlist.classList.contains('clicked')
    if(isClicked){
      removeToggle()

    }else{
      addToggle()
    }
    

  })
