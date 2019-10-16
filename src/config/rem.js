(function(doc, win) {
    var docEl = doc.documentElement;
    //判断事件
    var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    //动态修改html的font-size属性
	var recalc = function() {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
	};
    if (!doc.addEventListener) return;
    //监听事件
	win.addEventListener(resizeEvent, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);
