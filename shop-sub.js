getStorage();
handleFavButtons();
handleOrderButtons();

//Trumpet Range slider images
const value = document.getElementById("field");
let rangeImg = document.getElementById("rangeImg");
const notes = ["https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bc88956b2f715bb477_72-D.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd2ac3c30b02ae8dfb_73-Eb.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd3a337d344e1a0590_74-E.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd974c634c912a197f_75-F.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd7b4e2c80b152673a_76-F%23.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bdbf2915435b23e7f9_77-G.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bdd027965a1b17f5fc_78-Ab.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bdcb0c2d1a441e1fd0_79-A.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bdd02796990117f5fb_80-Bb.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd88956b0b6e5bb48d_81-B.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346be974c6309d52a1981_82-C.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd9062351b422a111d_83-Db.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346be58368b593ea26d53_84-D.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd88956b3a865bb48e_85-Eb.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd3a337d1c211a0599_86-E.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346be974c6323682a1985_87-F.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bed0279691ca17f5fd_88-F%23.png",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bea087c6193b25c72f_89-G.png"];

rangeImg.src = "https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bea087c6193b25c72f_89-G.png"

value.addEventListener('input', () => { rangeImg.src = notes[value.value - 72]; hideTrumpetRangeTag(); });

// hide the trumpet range tag
function hideTrumpetRangeTag() {
	const tagTexts = document.querySelectorAll('.tag-text');
	for (tag of tagTexts) {
		console.log(tag.innerHTML);
		if (tag.innerHTML.includes("--")) {
			tag.parentElement.style.display = "none"; // Hide the parent element of the tag
		}
	}
}

window.addEventListener("load", function (event) {
	hideTrumpetRangeTag();
});
