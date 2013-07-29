var five = require("johnny-five")
  , board = new five.Board()

board.on("ready", function() {
  // Get the controller of the led	
  led = new five.Led({
    pin: 9
  })

  // Get the controller of the button
  button = new five.Button(8);

  var state = false
  var brightness = 128
  var changeBrightness



  // Button event listeners 
  button.on("down", function() {
    led.fade(brightness,1) 
  })

  // Change the level of brightness on hold
  button.on("hold", function() {
    changeBrightness = setInterval(function(){
      brightness++
      if (brightness>254){
        brightness = 0
      }
    },10)
  })

  button.on("up", function() {   // "up" the button is released
    if(changeBrightness){ //Stop changing the level of brightness
      clearInterval(changeBrightness)
    }
    led.off()
  })
})


