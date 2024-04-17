function inicio() {
     window.scrollTo(0, 0)
}

let hambVer = false
let hamburgerMenu = document.getElementById('mobileNav')
function hamburger() {
     if (hambVer == true){
          hamburgerMenu.style.display = 'none'
          hambVer = false
     } else {
          hamburgerMenu.style.display = 'flex'
          hambVer = true
     }
}


function home() {
     window.scrollTo({top: 0, behavior: 'smooth'})
     hamburgerMenu.style.display = 'none'
}

function project() {
     let project = document.getElementById('middle')
     project.scrollIntoView({behavior: 'smooth'})
     hamburgerMenu.style.display = 'none'
}

function about() {
     let about = document.getElementById('last')
     about.scrollIntoView({behavior: 'smooth'})
     hamburgerMenu.style.display = 'none'
}