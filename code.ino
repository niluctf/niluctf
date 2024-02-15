#include <Servo.h>

Servo tap_servo;

int sensor_pin = 4;
int tap_servo_pin =5;

void setup() {
    pinMode(sensor_pin,INPUT);
    tap_servo.attach(tap_servo_pin);
}

void loop() {
    int val = digitalRead(sensor_pin);
    if (val == 0) {
        tap_servo.write(0);
    }
    if (val == 1) {
        tap_servo.write(180);
    }
}
