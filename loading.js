var Loading = function() {
	var modal = document.createElement("div");
	var loading = document.createElement("div");
	var loadingbar = document.createElement("div");
	var loadingtext = document.createElement("div");
	loadingtext.innerHTML = 0;

	this.countToLoad = 0;
	this.loadedCount = 0

	this.objectLoaded = function() {
		this.loadedCount++;
		this.setCompletion((this.loadedCount / this.countToLoad)*100);

		if (this.loadedCount >= this.countToLoad) {
			document.body.removeChild(modal);
			this.onFinished();
		}
	}

	this.onFinished = function() {

	}

	this.setCompletion = function(percent) {
		if (percent > 100) {
			percent = 100;
			return;
		}
		this.unBlur(((100-percent) / 100) * 25);
		this.displayPercentage(percent);
	}

	var styles = {
		modal: {
			position:"fixed",
			top:0,
			bottom:0,
			right:0,
			left:0,
			background:"rgb(0,0,0)",
			background:"rgba(0,0,0,0.7)",
			zIndex:999999999
		},
		loading: {
			border:"11px solid #fff",
			position:"fixed",
			top:"50%",
			boxShadow:"0 0 5px rgba(0,0,0,0.3)",
			left:"50%",
			height:"320px",
			borderBottomWidth: "61px",
			borderRadius:"4px",
			width:"240px",
			marginLeft:"-131px",
			marginTop:"-200px"
		},
		loadingbar: {
			position:"absolute",
			right:0,
			color:"#222222",
			fontSize:"30px",
			left:0,
			bottom:0,
			height:"100%",
			webkitTransition:"all 2s",
			webkitFilter:"blur(25px)",
			webkitTransform:"translateZ(0)",
			mozTransform:"translateZ(0)",
			transform:"translateZ(0)",
			background:"url(http://ckingchristmas.s3.amazonaws.com/cat.gif)",
			backgroundPosition: "center bottom",
		},
		loadingtext: {
			position:"absolute",
			right:0,
			color:"#222222",
			fontSize:"30px",
			left:0,
			bottom:"-100%",
			height:"96%",
			textAlign: "center"
		}
	}

	var updateHtml = function(element, end, strAfter) {
		var start = parseInt(element.innerHTML, 10);
		start++;

		if (start === end || start > end) {
			start = end;
		}


		element.innerHTML = parseInt(start, 10)+strAfter;

		if (start === end || start > end) {
			start = end;
			return;
		}

		htmlUpdate = setTimeout(function() {
			updateHtml(element, end, strAfter);
		}, 50);
	}


	var addStyles = function(element, styles) {
		for (var i in styles) {
			element.style[i] = styles[i];
		}
	}

	this.unBlur = function(size) {
		console.log(size);
		size = parseInt(size, 10);
		loadingbar.style.webkitFilter = "blur("+size+"px)";
	}

	this.displayPercentage = function(percentage) {
		updateHtml(loadingtext, percentage, " %");
	}

	this.displayPercentage(0);

	addStyles(modal, styles.modal);
	addStyles(loading, styles.loading);
	addStyles(loadingbar, styles.loadingbar);
	addStyles(loadingtext, styles.loadingtext);

	modal.appendChild(loading);
	loading.appendChild(loadingbar);
	loading.appendChild(loadingtext);

	document.body.appendChild(modal);

	return this;
}