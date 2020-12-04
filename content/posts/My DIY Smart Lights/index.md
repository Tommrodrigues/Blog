---
title: My DIY Smart Lights
author: Tom Rodrigues
date: 2020-04-21
hero: ./images/hero.jpg
excerpt: Smart lights are the easiest and most fun way of getting into home automation, but they can be expensive!
---

Smart lights are easily the most ubiquitous smart-home products. They look great, come in all shapes and sizes, and can be a gateway drug for further home automation.

However, as I outlined in my post about [My $99 Apple Smart Home](/my-dollar99-apple-smart-home), not all of us are willing to foot the [$100+ price tag](https://www2.meethue.com/) that comes with many of these smart devices.

This is what led me on my quest to design and build my very own smart light for around $10 using some cheap electronics and [Homebridge](https://github.com/homebridge/homebridge).

This post outlines how I achieved my goal, see [here](https://github.com/Tommrodrigues/homebridge-web-rgb/tree/master/examples) for more of a technical how-to.

## LED strips

There are two main types of LED strips you can buy:

- Non-addressable
- Addressable

Both use three channels to control colour and brightness: red, green, and blue.

![image](./images/lights.jpg)

The main difference is that addressable LED strips let you control each individual LED along the whole length, whilst a non-addressable strip acts as one.

Addressable strips are typically more expensive as a result, but other than the additional functionality, there isn't much difference between the two.

## Pulse-width modulation

Non-addressable LEDs are typically controlled by a method called [pulse-width modulation](https://learn.sparkfun.com/tutorials/pulse-width-modulation/all) (PWM).

Put simply, it's a way of tricking your eyes into seeing changes in colour and brightness.

![image](./images/cube.png)

Each colour channel can turn on and off very quickly, and the proportion of 'on time' versus 'off time' is referred to as the duty cycle.

As an example, if a signal spends half of the time on and the other half off (50% duty cycle), it would appear half as bright.

Doing this with each of the colour channels enables you to control how much of each colour you want in the mix, allowing you to choose any colour and brightness you want.

E.g. if all three channels are on in equal amounts, the result will be white light of varying brightness.

## The controller

To achieve pulse width modulation with something like [NodeMCU](https://www.nodemcu.com/index_en.html), you need attach a transistor which can convey the controller's PWM to the LED strip using the correct voltages. See [here](https://github.com/Tommrodrigues/homebridge-web-rgb/tree/master/examples) for the circuit and code.

However, getting the correct parts and soldering everything together can be an unnecessary hassle.

Thankfully, there are some cheap Wi-Fi LED controllers which have the necessary hardware and circuitry baked in, so we can just modify the software to get what we want. See [here](https://github.com/pauloromeira/Sonoff-Tasmota/wiki/MagicHome-LED-strip-controller) for how to reprogram one such controller.

![image](./images/cube.png)

After (re)programming the controller and connecting it to a cheap $5 LED strip, the software manages all the PWM for you.

The information is relayed back to the [homebridge-web-rgb](https://github.com/Tommrodrigues/homebridge-web-rgb) plugin, so all you need to do is set a colour and brightness of your choice in [Apple HomeKit](https://www.apple.com/ios/home/) — the rest will be taken care of.

## Conclusion

Building your own smart light is really cheap, easy, and fun to do.

It can add a lot of character to any room you put it in, and it can be tons of fun to play around with various colours.

Making your own smart light can save you more than $100, and is totally scalable.

The same concepts explained here can be ported to other cheap lights like Wi-Fi bulbs and mood lights.

## Links

- [Smart Lights](https://github.com/Tommrodrigues/homebridge-web-rgb/tree/master/examples)
- [homebridge-web-rgb](https://github.com/Tommrodrigues/homebridge-web-rgb)
- [Reprogramming cheap controllers](https://github.com/pauloromeira/Sonoff-Tasmota/wiki/MagicHome-LED-strip-controller)
- [My $99 Apple Smart Home](/my-dollar99-apple-smart-home)
- [Pulse-width modulation](https://learn.sparkfun.com/tutorials/pulse-width-modulation/all)

P.S. Buy your parts from AliExpress, it's way cheaper than Amazon!
