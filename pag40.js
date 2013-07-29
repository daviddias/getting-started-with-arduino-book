var five = require("johnny-five")
  , board = new five.Board()

board.on("ready", function() {
  // Get the controller of the led	
  led = new five.Led({
    pin: 13
  })

  // Get the controller of the button
  button = new five.Button(7);

  // Button event listeners 
  button.on("down", function() {
    console.log("down")
    led.on()
  })

  button.on("hold", function() {
    console.log("hold")
    led.on()
  })

  button.on("up", function() {   // "up" the button is released
    console.log("up")
    led.off()
  })

})

