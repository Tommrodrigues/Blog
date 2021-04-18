---
title: My DIY Smart Misting System
author: Tom Rodrigues
date: 2020-07-11
hero: ./images/hero.jpg
excerpt: Misting systems are a great way to cool down outside spaces during the heat of summer. Making our won smart misting system is cheap and easy.
---

Misting systems are a must-have if you want to be able to sit outside in the heat of summer, and they create a great atmosphere to be around in.

Many companies offer smart misting system installations, but, as I outlined in my post about [My $99 Apple Smart Home](/my-dollar99-apple-smart-home), not all of us are willing to foot the large price tag.

In fact, making your own misting system is cheap and easy. With the help of [Homebridge](https://github.com/homebridge/homebridge) and some cheap electronics, you can make the whole system smart for less than $10.

This post outlines how I achieved my goal, see [here](https://github.com/Tommrodrigues/homebridge-web-valve/tree/master/examples) for more of a technical how-to.

## The system

Creating a misting system is super simple. All you need is some way of supplying water and having it forced through a small nozzle.

Many shops offer misting kits that contain tubing, nozzle heads, and some fittings. Purchase enough tubing for the area you want to cover, then get enough nozzles to have one every 2 feet or so.

![image](./images/hose.jpg)

For small to medium-sized systems, the pressure supplied by a water faucet should be sufficient. But, for larger systems, it's wise to have a pump to pressurise the water further.

Similarly, using municipal water should be fine unless the mineral content is especially high. If that is the case, you should purchase an inline mineral filter to prevent the blocking of your tubing and nozzles.

## Implementation

Once you've got the system set up and connected to a water supply, making it smart is very simple.

It's undesirable to have the misters on constantly, so some form of modulation is ideal. In my experience, I found 10 seconds on, and 20 seconds off, was best to keep cool without getting soaked.

To achieve this, hook up a solenoid valve to a [NodeMCU](https://www.nodemcu.com/index_en.html) which will manage everything and communicate with the [homebridge-web-valve](https://github.com/Tommrodrigues/homebridge-web-valve) plugin, so all you need to do is set the desired state in [Apple HomeKit](https://www.apple.com/ios/home/).

## Conclusion

Making your own smart misting system is ultimately a quick and easy project, and is a great way to add character to outdoor spaces.

The project is totally scalable, so you can cover as much area as you want. Similarly, you can adjust the modulation times to whatever you like best.

## Links

- [Smart Misting System](https://github.com/Tommrodrigues/homebridge-web-valve/tree/master/examples)
- [homebridge-web-valve](https://github.com/Tommrodrigues/homebridge-web-valve)
- [My $99 Apple Smart Home](/my-dollar99-apple-smart-home)

P.S. Buy your parts from AliExpress, it’s way cheaper than Amazon!
