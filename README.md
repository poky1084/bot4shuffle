# bot4shuffle<br /> 
a javascript bot for Shuffle.com casino.
the strategy script must be coded in javascript, and not Lua script. 

# Videos: <br /> 
install extension: https://vimeo.com/954086250 <br />

# Info: <br />
Please favourite the repo in case you liked/used it. Thank you!

<b>Discord</b>: fisk_992 <br />
<b>Stake</b>: poky1084 <br />
<b>Telegram:</b>: @poky_1084


# Use: <br />

<b>functions:</b> `resetseed('clientseed'), resetstats(), vault(amount), log('text'), start(), stop(), resetAll(), resetChart(), deleteLogs()`

!!the strategy must be in `dobet()` method, and `dobet()` must be declared as shown below!!
```javascript
nextbet = 0.00001 //in crypto format, not USD
chance = 98

dobet = function(){
 //strategy code
}

or:

function dobet(){
 //strategy code
}
```


<b>Plinko: </b>
```javascript
game = "plinko"
rows = 8
risk = "low" 
```
<b>Keno:</b>
```javascript
game = "keno"
numbers = [1,2,3,4,5,6,7,8]
risk = "low" 
```
<b>Mines:</b>
```javascript
game = "mines"
fields = [1,2,3,4,5,6,7,8]
mines = 3 
```
<b>Limbo:</b>
```javascript
game = "limbo"
chance = 49.5
nextbet = 0 
```
<b>Dice:</b>
```javascript
game = "dice"
chance = 49.5
nextbet = 0
bethigh = false
 ```
<b>Wheel:</b>
```javascript
game = "wheel"
nextbet = 0
risk = "low"
segments = "10"
 ```
<b>Crash:</b>
```javascript
game = "crash"
target = 1.5
chance = 99 / target
nextbet = 0 
```



