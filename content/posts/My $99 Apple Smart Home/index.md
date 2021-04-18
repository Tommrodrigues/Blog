---
title: My $99 Apple Smart Home
author: Tom Rodrigues
date: 2020-04-16
hero: ./images/hero.jpg
excerpt: With a growing smart home tech market, many of us want to get involved but are put off by the high price tags. What if you could automate your home for less than $100?
---

If you'd told me 2 years ago that I could make my home smart for under $99, I wouldn't have believed you. But, over the last year and a half, I've achieved just that.

Back when [Apple's HomeKit](https://www.apple.com/ios/home/) was released in 2014, the idea that I could control my entire home with my voice made me realise I was living in the future.

Yet, it became increasingly clear that HomeKit had two key limitations:

1. High cost
2. Lack of accessories

Was I really expected to pay $50 for a smart plug, $80 for an LED strip or $150 for a smart thermostat? Automating my home would've cost thousands. Even if I were willing to pay, the products available were very limited.

Of course, as time went on, more HomeKit accessories came to market so the lack of accessories became less of a concern, but the high prices persisted.
So, without any broken promises or hidden catches, I'll walk you through how I made my smart home for less than $99.

Ready? Let's go.

## The journey

My dreams of becoming a budget Tony Stark had been totally ruined until earlier last year when I learnt about [Homebridge](https://github.com/homebridge/homebridge).

I couldn't quite believe it, Homebridge promised to add HomeKit support to pretty much anything you could think of. People were thrilled they could add HomeKit support to their pre-existing, but currently unsupported, smart devices into the Apple ecosystem.

At the same time, there was another group of people (me included) who saw another great opportunity: given a bit of time and effort, you could automate your home for a fraction of the cost.

![image](./images/typing.jpg)

## My first project

Let's be clear, the start was tricky. I had practically no programming knowledge, so I knew achieving my aim would be an uphill battle. But, whilst it might've been difficult at the start, I knew it would be a great opportunity to build some useful skills. Plus, if this article inspires you to try out some of these projects, you don't have to learn a thing if you don't want to — you can find links to the projects mentioned here at the bottom of the article!

Here's what it took weeks of frustration and trial and error to work out:
- You can run Homebridge on a $30 [Raspberry Pi](https://opensource.com/resources/raspberry-pi) (see [here](https://medium.com/r/?url=https%3A%2F%2Fgist.github.com%2FTommrodrigues%2Fc2de35f0dec0235c8600cfed29b59c1e) for my guide)
- You can then use a $2 [NodeMCU](https://www.nodemcu.com/index_en.html) (a Wi-Fi compatible [Arduino](https://opensource.com/resources/what-arduino)) to control devices around your home

My first project was fairly simple: smart outlets.

You can buy 5 cheap RF outlets for about $25, plug one into an outlet, then control anything that plugs into it with the included remote.

But who really wants to have to run around the house with a flimsy remote every day at sunset, switching on their lights, then remembering to switch them off before they go to bed?

My idea was that I could connect the NodeMCU to an RF transmitter and have it control all the lights for me, instead of having to use the remote.

![image](./images/programming.jpg)

After reading a lot of articles and watching loads of tutorials, I eventually got it to work: I could turn the light on in the HomeKit app and it would turn on in real life!

I set up 5 of the outlets around my home to control various lights. That is, 5 'smart' outlets for around $28 (the price of the outlets, plus about $3 for the NodeMCU and transmitter). Buying 5 official HomeKit outlets would cost upwards of $200.

My budget Tony Stark dream was becoming a reality: I scheduled lights to come on at certain times and could even ask Siri to control them. I was hooked. Plus, I'd saved more than $170!

## Expanding

After the success of the first project, I was keen to automate even more of my home. I dived in head-first and became increasingly confident programming NodeMCUs and writing my own Homebridge plugins.

![image](./images/programming2.jpg)

It was great, not only had I automated my home for a fraction of the cost, butI'd also learnt to program in multiple languages and how to build IoT devices.

Currently, I have the following DIY devices in my home:

- 5x Smart outlets for $28
- 4x 5m smart LED strips for $36 ($9 each)
- 2x Smart garage/gate openers for $10 ($5 each)
- 1x Smart thermostat for $10
- 1x Smart sprinkler system for $9
- 1x Smart misting system for $6

This adds up to around $99! Even more interesting, purchasing the commercially available versions of the accessories would've cost the following:

- 5x iHome Smart Outlets for $200 ($40 each)
- 4x Philips Hue Lightstrip Plus 5m for $320 ($80 each)
- 2x Insignia Door Controllers for $100 ($50 each)
- 1x Ecobee3 Lite for $190
- 1x Rachio 3 for $230
- 1x Eve Aqua for $100

All of this amounts to around $1140. Take that in for a second… **I'd saved more than $1000** — I'd paid less than a 10th of the commercial price, and had virtually the same functionality.

![image](./images/money.jpg)

## Conclusion

DIY home automation is a no-brainer. Not only will you see the immense savings I did, but you can also skip the time and effort I put in at the start.

Links to all the completed projects mentioned in this article can be found below.

If a guy with no prior programming knowledge can save more than $1000, then you can too.


## Links

- [Raspberry Pi Homebridge](https://gist.github.com/Tommrodrigues/c2de35f0dec0235c8600cfed29b59c1e)
- [Smart outlets](https://github.com/Tommrodrigues/homebridge-nodemcu-rf)
- [Smart LED strips](https://github.com/Tommrodrigues/homebridge-web-rgb/tree/master/examples)
- [Smart Garage opener](https://github.com/Tommrodrigues/homebridge-http-garage/tree/master/examples)
- [Smart Gate opener](https://github.com/Tommrodrigues/homebridge-http-lock-mechanism/tree/master/examples)
- [Smart Thermostat](https://github.com/Tommrodrigues/homebridge-web-boiler)
- [Smart Sprinklers](https://github.com/Tommrodrigues/homebridge-web-sprinklers)
- [Smart Misting system](https://github.com/Tommrodrigues/homebridge-web-valve)

P.S. Buy your parts from AliExpress, it's way cheaper than Amazon!
