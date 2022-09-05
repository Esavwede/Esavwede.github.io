

const navigation = document.getElementById("navigation-container")
const menuBar = document.getElementById("menu-icon-container")
const menuBar2 = document.getElementById("not-fixed")
const pageNameElement = document.getElementById("page-name")
const pageName = pageNameElement.innerHTML 


function showNumber() 
{
    window.alert('My number 08081848029')
}

function showMenuManager() 
{
    if( pageName !== 'home' && pageName !== 'cv' )
    {
        showMenu2() 
        return 
    }

        showMenu() 
}   


function closeMenuManager()
{

    if( pageName !== 'home' && pageName !== 'cv' )
    {
        closeMenu2() 
        return 
    }

    closeMenu() 

}



function showMenu()
{
    menuBar.style.display = 'none'
    navigation.style.display = 'block' 
}

function showMenu2()
{
    menuBar2.style.display = 'none'
    navigation.style.display = 'block' 
}


function closeMenu()
{
    menuBar.style.display = 'flex'
    navigation.style.display = 'none' 
}


function closeMenu2()
{
    menuBar2.style.display = 'flex'
    navigation.style.display = 'none' 
}


navigation.addEventListener("click", closeMenuManager )