var anchors = document.getElementsByTagName("div");
var length = anchors.length;
var el;
var color = ["#009900", "#0066ff", "#ff9900", "#ff0000", "#ffff66"];
var message = document.getElementById("message");

while (length--) {
	el = anchors[length];
	el.innerHTML = el.innerHTML
		.replace(/&lt;/g, '<span class="leave">&lt;</span>')
		.replace(/&gt;/g, '<span class="leave">&gt;</span>')
		.replace(/o/g, '<span class="ornament1 ornament">o</span>')
		.replace(/O/g, '<span class="ornament0 ornament">O</span>')
		.replace(/@/g, '<span class="ornament2 ornament">@</span>')
		.replace(/\*/g, '<span class="ornament3 ornament">*</span>');
}

function change() {
	message.innerHTML = "Merry Christmas"
		.split("")
		.map((e) => {
			i = Math.floor(Math.random() * 5);
			return '<span class="ornament' + i + '-up">' + e + "</span>";
		})
		.join("");
}

window.setInterval(change, 500);
change();
var id, id2;
leaves = document.getElementsByClassName("leave");
leavenb = 0;
function lightleave() {
	leaves[leaves.length - leavenb - 1].classList.add("leave-up");
	leavenb++;
	if (leavenb === leaves.length) {
        window.clearInterval(id);
        id2 = window.setInterval(lightornament, 5);
    }
}
id = window.setInterval(lightleave, 5);

ornaments = [].slice.call(document.getElementsByClassName("ornament"));
function lightornament() {
    i = Math.floor(Math.random() * ornaments.length)
	ornament = ornaments[i];
    cl = ornament.className;
    if(cl.includes("0")) ornament.classList.add("ornament0-up")
    else if(cl.includes("1")) ornament.classList.add("ornament1-up")
    else if(cl.includes("2")) ornament.classList.add("ornament2-up")
    else if(cl.includes("3")) ornament.classList.add("ornament3-up")
    ornaments.splice(i, 1)
	if (ornaments.length == 0) window.clearInterval(id2);
}


