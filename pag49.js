var five = require("johnny-five")
  , board = new five.Board()

board.on("ready", function() {
  // Get the controller of the led	
  led = new five.Led({
    pin: 13
  })

  // Get the controller of the button
  button = new five.Button(7);

  // Save state of led
  var state = false
  
  // Button event listeners 
  button.on("down", function() {
    if (state) {
      led.off()
      state = false      
    } else {
      led.on()
      state = true
    }
  })
})

// Notes:
// This code is the solution for pag45, 47 and 49, since 
// node is event driven, only one event is made by each
// interaction, the johnny-five, firmatta, node-serial
// thing takes care of solving the flutuations and so
// on, described in the book