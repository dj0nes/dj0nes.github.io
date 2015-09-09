window.onload = function() {
	var things = document.getElementsByClassName("what-i-do")[0];
	things.addEventListener("click", function() {
		var header = document.getElementById("projects-box-header");
		var ypos = getPosition(header).y;
		TweenLite.to(window, 1, {scrollTo:{x: 0, y: ypos}, ease:Power2.easeOut});
		event.preventDefault();
	}, false);
  
};

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
  
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}