basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    false,
    true
    )
    if (dht11_dht22.readDataSuccessful()) {
        basic.showIcon(IconNames.Happy)
        serial.writeValue("temp", dht11_dht22.readData(dataType.temperature))
        serial.writeValue("hum", dht11_dht22.readData(dataType.humidity))
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
