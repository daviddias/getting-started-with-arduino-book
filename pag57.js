var five = require("johnny-five")
  , board = new five.Board()

board.on("ready", function() {
  // Get the controller of the led	
  led = new five.Led({
    pin: 9
  })

  // Interval defaults to 1000ms
  
  led.pulse(500);

  // Or you can use fade (in and out)
  // var i=0
  // var fadeIn = setInterval(function(){
  //   if(i===255){
  //     clearInterval(fadeIn)
  //     //Now let's set the fadeOut
  //     var fadeOut = setInterval(function(){
  //     if(i===0){
  //       clearInterval(fadeOut)
  //     }
  //     led.fade(i,1) 
  //     i--    
  //     },10)
  //   }
  //   led.fade(i,1) 
  //   i++    
  // },10)
})

