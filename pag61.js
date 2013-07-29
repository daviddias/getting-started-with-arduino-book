var five = require("johnny-five")
  , board = new five.Board()

board.on("ready", function() {
  // Get the controller of the led	
  led = new five.Led({
    pin: 13
  })

  // Get the controller of the photoresistor (also called LDR)
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  // Save state of led
  var state = false

  photoresistor.on("read", function( err, value ) {
    console.log( value, this.normalized );
    if(this.normalized < 60){ // I'm using 60 because default light was 80 in the room I tested
      led.off()
    }
    else{
      led.on()
    }
  });
})

