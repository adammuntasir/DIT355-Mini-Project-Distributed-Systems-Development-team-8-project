# Dentistimo

## What?
A software that keeps track of the availaiblity of free time-slots for dentists in Gothenburg, where the client uses a browser-based application to visualize the locations of the dentists and book a specific dentist by clicking on the marker on the map. A confirmation of the booking will be displayed to the client according to the availablity otherwise a rejection will be displayed.

## Why?
In order to automatically get a list of available dentists according to the time window set by the client.

## How?
The visualiser recieves the dentists registry over the MQTT-protocol.

## Technologies used
*  MQTT with HiveMQ broker
*  MapBox
*  Node.js

## Developers
* Leila Bencheikh
* Maab Mohammedali
* Mila Mehrvarz
* Muntasir Adam
* Ramzi Abu Zahra

## Software Architecture


<br>
<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7V3tk5o4GP9r%2FOgOCSTAx%2Bq215lrZ7bTvbvefWMVlSsKh7i79q%2B%2FRIiaENaoQJBlO1MlIC%2FJ7%2Fe85XnCwBwvX39LvHjxNZr64QAa09eBeT%2BAEAFgkQ%2Fass1agO3aWcs8CaZZm3Fo%2BB788vMDWesmmPrrvC1rSqMoTIOYb5xEq5U%2FSbk2L0miF%2F6wWRROuYbYm%2FuFhu8TLyy2%2FhVM00XW6kD70P7ZD%2BYLdmWA3WzP0mMH50%2ByXnjT6OWoyfw4MMdJFKXZt%2BXr2A9p7%2FH98qlk7%2F7GEn%2BVqvzgn2fgOU%2Fz%2BPfnFXC2Hz%2F%2FMB7%2FGOZnefbCTf7AA4hDcr5RTG853eb9gP%2Fb0PscLb1kHqwG5geyF8ev5H9j%2F785ooPjv6ZDLwzm%2BUETcnd%2Bku2bRat0uN4NMd0F7PxH7OTk2zz%2FDLPPT7HY1oLbepLewhln8ZYx%2BRIWt8bRMo5WdDxZM%2F8TsXeeCreWXHtv3e34T1FCODle%2BJOf5Abe6ETZ00%2BD50p69mrsVDzMsoffPStrhdyVYD6S96E%2Fo%2FujZz%2BZhTupNguItDFHi3RJPu4B7bMkih8JPnwqnoz8%2FnIJD%2Bz92ckpCEhKhRrYi0qiZPxo6afJlhyS%2FwBjJ%2FtJrl8cC2fbLwdhbVu5BF4cCeq9WPZyBTHfn%2FsgQ8mXXIyeIVKhRKQKvUhUQUy%2FTvZ8N0f%2F%2Bmm6ZSrGYQ173WJd2n%2FlYr%2B0U0GhC6GsB%2FO2xA%2B9NHjm9aWsV%2FPrPUQBFXDsYkNocSNo8SeIZrM1AZA4KPubvnyczF719arvfXT8n8F6Q27kV6%2F3uqL3htiwObFpurAgtU252K5L8Vk3oPjMXvENUXGcxnDw4UgEk81R1aS7TgL85T%2Btg9SXM1gAWdNURBZPRYttH%2BEIOBIguXUxEaszcRlNN7StWRqiNtGQHz27KRrabbY%2Fe0PvJjv%2BIYhLZKTsodtu4wDT4Kgpde6ZbOOde1iTZHVuwMax2yRcNdk47ulxSqLNaupPc%2FxGSbqI5tHKC79EUZyjfDdK%2BaB4mzTiOeCvph%2FoDAPZXJGBzlo%2B7aiyO%2BX6p59OFmwj2iQT%2F8FPAvJofvI99ibBap7vTHdMKtkpB4Y%2FLcxbCLwiD7u75mlLMGVELjsOlBC1YtWLkKB8807LflU9SNgcU1MoWXjhbBwkk7CIFTJ0yfYH3bhDbPPvo002M4YplNIk%2BrmfjQIi0i7HizYcAFcQE8yZPQEE0rHe9uiwmB6wrgUqsokyASrkNEG8pmP7siC%2BCmUx3fOSeDEPCaZo93aCt46zuctZ8EqxNkp8ouy9p92Z6ZjmD0Yug0YDdE%2BRuEnDYOWP99OeBYlTh0Y2keDqOBJXR6JOQF2eDpBE21vvzH7fPK0nSfBUFo7T7M8CA3GD7LJtbf4skMXqW%2BXQZjhsi9GlyaMFkghg68n4sHkKg%2FWinVw0ET%2B96RpFJDVMRUn0sGVUtHoqEovqBqnYbr1oQ5Pnoqmbi1DBf9HMRbfn4hBKfIfWc7HVahEAW9CL%2BrkocUTaxcVTffo%2BuCjxJCriYgVELJziSzQPJm1koGu1joBnpB9oImCrkg90EVDBf7iVyLz%2FGqQ%2F2CXJ96OALdm6fz067H77JhcrieazWNjJMC4smSG6ElOifWwj%2Fgw1R%2FOhQtbD7UXzGcaMlmDM0osxrBljsqQNAWPdnwaATNKwUbAkyr%2FJWQBT4mHdqlKpkbxMQJ8kr1liqVxJXgBMLNAXN0pfU8FJuz0VUSdiVGeGa0OMrRkxCjNP3Rf4ACAgDINuia%2Fg7fUS%2Fwz%2B4nr4W5jAss07aB%2F%2Bmc2yuWHnU4%2F837sMd9jGnNtggLcdB7qxB2nepo5GRZApwNauCY2WJboPDWsTBRf1HWgT0xaHQbc2UXDrem2yn1Q%2BTfSSab8r%2Beu4ojJpmL4K2d%2B3rz6qND%2BUHc56AFOYpWgaMApp6N2X9y5smfNgNZz33aS4Pxh%2FFmLGXm78Qa3Gn8X6WJPxJ64U0rQsYDHSbimP3W8PeNptNTENoWqJZKirHEyFXLCmwaQQyOy%2BYsEFe1C3YunLzuqoDnJcbpjBfl2LE2y7oNAo7xL1QqMzL3RAV3bKSqUCktk1rals7mTBdV%2Fprqnj773U%2B%2BytpmG%2FplFX1jQClsMXnjnMUdO3mB9SsNq1F%2Fwj4%2B1%2BLXRiFyv%2BkcQkbn2WfbsrXgBifgYzsKHuSlDU%2BkpQVOJxvqssX9RXglbNRdcVqrL1c7H1paCoLwUlnSCZdG49F1tb%2BAJs3DoeKsxea%2BZhSUj%2FffGw4dnjNgYHVdakysXVydA%2BLvF6rk0ScpEY21eLNlaGk4aDyDefZcCMTX2IcfUiBivMZ3d%2FNgi44gwvlmjmJqeDcF%2BWUi1%2F6ykyIDadYNJhW2OSMpYEsron%2Fw95Kq4FB1yeisHqabXkqbAKQ115KsQi5Ve9bVyb9CUvO6HgCsOgXZv0JS9K2gSqEr2mIgMbCNqkaf6%2BiyKXKhGj7HHWhRgxpNQ0YvqylN0wmG3zHzpclnKw%2F2xo8fYfMwf1mH%2BuXvOvkATRuDDoZJGLpjxldWOkngIYgCzNzkRfAbMbBtEm1K1abJnKb09qYCK9h64kPnb76Sp5uHqzIrvXb1%2B%2FPT6S%2FZ%2BJqvj6jXwZUW2YqHeDIJLblho6tIV3EgCTKZLj910abFnYZl54aXfIPj%2BqG8TMPs9sLdd13zTIZZa9aKAfWXKGY%2FK2XB7vfcNA221dbvOftNJUq5RrMvmHFuaNNMdRM9IkZ0IuGS%2FDQo6BsQWASBoTk%2B42DIht10W2mJxbUvxSlS3oKASWb4UuIuh59wOfgc%2Fq4QQMVtWUjzt2TMriw99l6KLO6R0%2B%2BjvnInVjq8PB8XZhy%2BFlFQBiXps6nCAuh1PxvHUjqEMLE7%2BxKAB2zlLu10XbKtO8Tj2ryQ4tocABKb54rjLQdXLN4ha8sbI2wCABMGazr6x0%2BgWIM4tZGAaWXKsrnubIouaZo02fX8W3h9I3QDyQISC9QkAbrchBX7wt59ZnJy%2Fx4ml4gh%2FxjLjjKIySgwqiLr3QVEAGHa5g4oUf8h3LYDoNyyDGS6x6XlFIPBneuTHZmiDHaeRMvB9jwKwNA7JYdxUYGG3WhGLrNR3%2FrC6ix0GJOWpLSoZNtuxnIyhgZmvlKHhMvNU6Jvq%2FlwUCBoSXAgDI1vnWBwLYRbvunEnUg8txvArZ25md6nbiSfvPVc3iLHtx67WGIhJCb5aim9zcK63dPs%2BTDhQU4hmGpBytUVPS7XAoS53hJ4nr1lMMMAQOujPMozimEJdCBrwT4ubqy08VJrGajXG5nUwNvUwtmbaQdga0lh24mtdGt4R1WwCCatMEDSqsPk2VDpSwhj2gwNWrsDo0DV6QFyVi6tSUdZWKTjU9vezF51drRPuERgSXa0Qid%2B2jM0O7IIbE7I2LVSTZTCLqUR8OJ1Jh8TWa%2BvSI%2FwE%3D"> <img  src="./Component.png"><br>
*Component Diagram*

## Setup and running

### Dependencies
1. Node.js & Npm (https://nodejs.org/en/download/)
2. Git (https://git-scm.com/downloads)

### Setup
1. Move the file Global_Keys in the Documentations folder to the parent directory
2. The components (DataHanlder, DataExtractor, Pipe) can all be setup with command (npm i mqtt)
3. The component (Visualizer) can be setup with command  (npm init) then (npm i serve)
4. Go to package.json and add under scripts property, above the test subproperty the following line "dev": "serve .",



### Running

1. Run each component except for the Visualizer using Node.js by typing the following command:  (node index.js)
2. Go to Visualizer and run it by typing (npm run dev)
3. Open the port that will be displayed in the console
4. Choose website.html from the choices in the web browser

