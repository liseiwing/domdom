// window.onload = function() {
// 	document.getElementById("#ti").css
// }

var str = '我的个人作品展示';
var i = 0;

function typing() {
	var mine = document.getElementById('mine');
	if (i <= str.length) {
		mine.innerHTML = str.slice(0, i++) + '_';
		setTimeout('typing()', 500);
	} else {
	i = 1;
	setTimeout('typing()', 3000);
	mine.innerHTML = str;
	}
}
typing();
