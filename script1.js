
var autoImageHeight = null 
const heroImageMinimunHeight = 500
const heroImage = document.getElementById("hero-images")

normalizeHeroImage() 
// window.addEventListener("resize",()=>{
//   window.alert("Screen Resized")
// })


screen.orientation.addEventListener("change", normalizeHeroImage)// hello 
window.addEventListener("resize", normalizeHeroImage )

function normalizeHeroImage()
{
  try 
  {
    
          // change style to 70vh 
          heroImage.style.height = `70vh`
          autoImageHeight = window.getComputedStyle(heroImage).getPropertyValue('height');
          autoImageHeight = parseInt( autoImageHeight )
      
    
          if( autoImageHeight < heroImageMinimunHeight )
          {
            heroImage.style.height = `${heroImageMinimunHeight}px`
            console.log(' Height less than image minimun height ')
            console.log( autoImageHeight < heroImageMinimunHeight )
          }
          else 
          {
            heroImage.style.height = `70vh`
            console.log(' height not less than image minimum height ')
            console.log( autoImageHeight < heroImageMinimunHeight )
          }
    
          const heroSectionWidth = checkHeroSectionWidth() 


          
   

  }
  catch(e)
  {
      console.log(" Error occured while normalizing image ")
      console.log(e)
  }
}


function checkHeroSectionWidth()
{
  try 
  {
    var heroSectionWidth = window.getComputedStyle(heroImage).getPropertyValue('width');
    heroSectionWidth = parseInt( heroSectionWidth )
    return heroSectionWidth 
  }
  catch(e)
  {
      console.log('Error occured while checking Hero section width ')
      console.log(e)
  }
}




//********************Menu */

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const body = document.getElementById("body") 
const headerCon = document.getElementById("logo-and-menu-burger-container") 

menuToggle.addEventListener('click', () => {

// Toggle the 'open' class on the menu toggle
menuToggle.classList.toggle('open');

headerCon.classList.toggle('display-header-over')
  // Toggle the 'open' class on the menu
  menu.classList.toggle('open');


});



menu.addEventListener('click', () => {
  // Hide the menu when a menu item is clicked
  menu.classList.remove('open');
  menuToggle.classList.remove('open');
  headerCon.classList.remove('display-header-over')
});



window.addEventListener('scroll', function() {
  var contentDiv = document.getElementById('logo-and-menu-burger-container');

  if (window.scrollY === 0) {
    contentDiv.classList.remove('scrolled');
  } else {
    contentDiv.classList.add('scrolled');
  }
});
