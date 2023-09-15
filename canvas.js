

///  New Canvas 

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")


var canvasWidth = window.innerWidth 
var canvasHeight = window.innerHeight * ( 1 / 2 )
// Presets 
canvas.width = canvasWidth
canvas.height = canvasHeight



// Fill Canvas 
function fillCanvas()
{
    try 
    {
        ctx.save() 

                ctx.fillStyle = "black"
                ctx.fillRect(0,0,canvasWidth, canvasHeight)
        
        ctx.restore() 
    }   
    catch(e)
    {
        console.log(' Error occured while filling Canvas ')
        console.log(e) 
    }
}



// Shapes 
function fillRect(rect)
{
    try 
    {
        ctx.save() 

            const {  fillStyle, x, y, w, h } = rect 
            ctx.fillStyle = fillStyle
            ctx.fillRect(x,  y,  w, h)

        ctx.restore() 
    }
    catch(e)
    {
        console.log('Error Occured while filling Rect ')
        console.log(e) 
    }
}

function fillCircle( circle ) 
{
    try 
    {
        ctx.save() 


            const { x, y, r, fillStyle } = circle 

            ctx.fillStyle = fillStyle
            ctx.beginPath() 
            ctx.arc( x , y, r, 0, 360, false ) 
            ctx.fill() 

        ctx.restore() 
    }
    catch(e)
    {
        console.log(" Error occured while drawing Circle ")
        console.log(e)
    }
}

function fillCircles() 
{
    try 
    {
        for( let i = 0; i < circles.length; i++ )
        {
            fillCircle( circles[i] )
        }
    }
    catch(e)
    {
        console.log(' Error occured while trying to fill random circles ') 
        console.log(e)
    }
}

const circleFillStyles = ['white','#83DEFF']

    // max Circle Radius 
function getMaxRadius()
{
    try 
    {
        const canvasWidth = canvas.width 
      
        return ( canvasWidth ) * ( 1 / 6 )
    }
    catch(e)
    {
        console.log("Error occured while getting maximum circle radius ")
        console.log("Error")
    }
}


function createRandomCircle()
{

    var radius = null 
    const maxRadius = getMaxRadius() 
    try 
    {
        
        const fillStyle = circleFillStyles[ Math.floor( Math.random() * circleFillStyles.length )]
        const x = Math.floor( Math.random() * ( canvasWidth - maxRadius)  )  
        const y = Math.floor( Math.random() * ( canvasHeight - maxRadius) )
        radius = Math.floor( Math.random() * maxRadius )

        if( radius < 10 )
        {
            radius = 10 
        }

        const circle = { x: x, y: y, r: radius, fillStyle: fillStyle }
        return circle  
    }
    catch(e)
    {
        console.log("Error occured while creating random Circle ")
        console.log(e)
    }
}


function createRandomCircles(x)
{
    try 
    {   

        for( let i = 0; i < x; i++ )
        {
            circles.push( createRandomCircle() )
        }
    }
    catch(e)
    {
        console.log(`Error occured while creating ${x} random Circles`)
        console.log(e) 
    }
}


var percentageIncrementCount = 0 
const circleIncrementPercentage = 1.5
var centerCirclePercentageIncrease = 2
var centerCircle = { x: ( canvasWidth / 2 ), y: ( canvasHeight / 2 ), r: 1, fillStyle: "black" }


function fillCenterCircle()
{
    try 
    {
        fillCircle( centerCircle )

    }
    catch(e)
    { 
        console.log(' Error occured while filling center circle ')
        console.log(e)
    }
}

function checkCenterCircleScreenFill()
{
    try 
    {
        if( centerCircle.r > ( (canvasWidth / 2 ) - 100 )  && centerCircle.r > ( ( canvasHeight / 2 ) - 100 ) )
        {   
            return true 
        }

        return false 
    }
    catch(e)
    {
        console.log('Error occured while checking center circle screen fill ')
        console.log(e) 
    }
}

function moveTextLeft()
{
    try 
    {

    }
    catch(e)
    {
        console.log("Error occured while moving text to left ")
        console.log(e) 
    }
}


function incrementCenterCircleRadius()
{
    try 
    {   
        centerCircle.r += centerCirclePercentageIncrease
    }
    catch(e)
    {
        console.log('Error occured while filling center circle ')
        console.log(e) 
    }
}


function checkCirclesPercentageIncrement()
{
    try 
    {
        if( percentageIncrementCount > 40 )
        {
            return true 
        }
            return false 
    }
    catch(e)
    {
        console.log('Error occured while checking circle percentage increment ')
        console.log(e) 
    }
}


function increaseCirclesRadius()
{
    try 
    {
        for( let i = 0; i < circles.length; i++ )
        {
            const increment =  ( circles[i].r ) * ( circleIncrementPercentage / 100 )
            circles[i].r += increment 
        }
    }
    catch(e)
    {
        console.log("Error occured while increasing circle radius ")
        console.log(e) 
    }
}


function fillText(textContent)
{
    try 
    {
        ctx.save() 
    
            
            var { x, y, text, fillStyle, textAlign, fontSize } = textContent

       

            ctx.font = `${fontSize++}px Arial`; // Font size and font family
            ctx.fillStyle = fillStyle
            ctx.textAlign = textAlign
            ctx.textBaseline = "middle"  

            
            // Draw filled text
            ctx.fillText(text, x, y)

            if( !fillStyle )
            {
                window.alert('Yay!')
            }

            if( text === 'OGAGA' )
            {
                ogagaText.fontSize++ 

                if( fontSize >  (  getOgagaTextInitialFontSize() + 100 )  )
                {
                    ogagaText.x -= 4 
                    ogagaText.fontSize += 2
                }

                const windowWidthThreshold = canvas.width * 12
                const currentTextWidth = ctx.measureText(text).width 

        
                if( currentTextWidth > windowWidthThreshold )
                {
                    return true 
                }
            }


        ctx.restore() 
    }
    catch(e)
    {
        console.log('Error occured while filling text ') 
        console.log(e) 
    }
}



function getOgagaTextX()
{
    try 
    {
        return ( canvas.width / 2 )
    }
    catch(e)
    {
        console.log('Error occured while getting Ogaga text X')
        console.log(e)
    }
}

function getOgagaTextY()
{
    try 
    {
        return ( canvas.height/ 2 )
    }
    catch(e)
    {
        console.log('Error occured while getting Ogaga text Y')
        console.log(e)
    }
}

function getOgagaTextInitialFontSize()
{
    try 
    {
        const windowSize = window.innerWidth 

        if( windowSize < 600 )
        {
            return 50 
        }

        if( windowSize < 1100)
        {
            return 100 
        }

        return 150 


    }
    catch(e)
    {
        console.log("Error occured while getting Ogaga text initial font size ")
        console.log(e) 
    }
}


//fillCanvas() 
var circle = { x: 0, y: 0, radius: 50, fillStyle:"black"}
var rect = { x: 200, y: 200, w: 50, h: 50, fillStyle:"black" }
var ogagaText = { x: getOgagaTextX(), y: getOgagaTextY(), text:"OGAGA", fontSize: getOgagaTextInitialFontSize(), fillStyle:"white", textAlign:"center" }


fillCircle(circle)
fillRect(rect)


// Start 
var circles = [] 
createRandomCircles(10) 
fillCircles() 



var startAIntervalId = null 
var startBIntervalId = null 


function startA(){


    startAIntervalId = setInterval(() => {
        increaseCirclesRadius() 
        percentageIncrementCount++ 
        fillCanvas() 
        fillCircles()
        const centerCircleCanBeDrawn = checkCirclesPercentageIncrement() 
    
        if( centerCircleCanBeDrawn )
        {
            // draw center circle 
            const animationComplete = checkCenterCircleScreenFill() 
    
            if( animationComplete ){ 
                
                fillCanvas() 


                const animationComplete = fillText( ogagaText )
    
                if( animationComplete )
                {
    
                    percentageIncrementCount = 0
                    ogagaText.fontSize = getOgagaTextInitialFontSize()
                    ogagaText.x = getOgagaTextX() 
                    ogagaText.y = getOgagaTextY()
                    circles = []
                    createRandomCircles(10) 
                    centerCircle.r = 1 
                }
    
                    return
    
            }
    
            fillCenterCircle() 
            incrementCenterCircleRadius() 
        }
    
    
    }, 7 )
}



function startB(){

    window.alert('B started ')

    startBIntervalId = setInterval(() => {
        increaseCirclesRadius() 
        percentageIncrementCount++ 
        fillCanvas() 
        fillCircles()
        
        const centerCircleCanBeDrawn = checkCirclesPercentageIncrement() 
    
        if( centerCircleCanBeDrawn )
        {
            // draw center circle 
            const animationComplete = checkCenterCircleScreenFill() 
    
            if( animationComplete ){ 
                
                fillCanvas() 
                const animationComplete = fillText( ogagaText )
    
                console.log('B debug')
                if( animationComplete )
                {
                    window.alert('B Text Animation Complete')
                    clearInterval( startBIntervalId )
                    percentageIncrementCount = 0
                    circles = []
                    createRandomCircles(10) 
                    ogagaText.fontSize = getOgagaTextInitialFontSize() 
                    console.log( ogagaText.fontSize )
                    centerCircle.r = 1 
                    window.alert('Starting A')
                    return startA 
                }
    
                window.alert('B text animation not complete ')
                window.alert( ogagaText.fontSize )
                    return
    
            }
    
            fillCenterCircle() 
            incrementCenterCircleRadius() 
        }
        
    
    }, 7 )
}


startA() 