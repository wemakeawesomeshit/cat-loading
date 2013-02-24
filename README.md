#cat-loader

cat object loader. [demo](http://rawgithub.com/wemakeawesomeshit/cat-loading/master/index.html)

##usage

```javascript
var options = {
  text: "{VAL} %", // or "Loading"

  modal: {
    background:"rgba(0,0,0,0.7)",
    zIndex: 9999999999
  },

  blur: true,

  className: "wmas-loading"
};

// this renders the loading object
var loading = new Loading(options);

// set the number of objects to load
loading.countToLoad = 23; 

// set up the callback when complete
loading.onFinished = function(){
  clearInterval(t);
}

// called when an object is loaded
loading.objectLoaded();
```