#include <Servo.h>

Servo motor;

int sensor_pin = 4;
int motor_pin = 5;

void setup() {
    pinMode(sensor_pin,INPUT);
    motor.attach(motor_pin);
}

void loop() {
    int val = digitalRead(sensor_pin);
    if (val == 0) {
        motor.write(0);
    }
    if (val == 1) {
        motor.write(180);
    }
}
