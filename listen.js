getStorage();

//"Listen Now" button function
const listenNowBtn = document.getElementById("listenButton");


listenNowBtn.addEventListener("click", () => {
	const firstTrack = document.querySelector(".track");
	firstTrack.click();
});

//.is-current
//Trumpet Range slider images
const value = document.getElementById("field");
let rangeImg = document.getElementById("rangeImg");
const notes = ["https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bc88956b2f715bb477_72-D.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd2ac3c30b02ae8dfb_73-Eb.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd3a337d344e1a0590_74-E.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd974c634c912a197f_75-F.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd7b4e2c80b152673a_76-F%23.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bdbf2915435b23e7f9_77-G.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bdd027965a1b17f5fc_78-Ab.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bdcb0c2d1a441e1fd0_79-A.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bdd02796990117f5fb_80-Bb.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd88956b0b6e5bb48d_81-B.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346be974c6309d52a1981_82-C.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd9062351b422a111d_83-Db.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346be58368b593ea26d53_84-D.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd88956b3a865bb48e_85-Eb.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bd3a337d1c211a0599_86-E.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346be974c6323682a1985_87-F.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bed0279691ca17f5fd_88-F%23.avif",
"https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bea087c6193b25c72f_89-G.avif"];

rangeImg.src = "https://uploads-ssl.webflow.com/640788df21cddc9b2f29bc16/645346bea087c6193b25c72f_89-G.png"

value.addEventListener('input', () => {rangeImg.src = notes[value.value - 72]});

// Handle favorite items
const favButtons = document.querySelectorAll('.fav-button');
favButtons.forEach(button => {
	button.addEventListener('click', function(e) {
		
		const item = button.closest('.item');
		const title = item.dataset.title;
		const url = item.dataset.url;
		const composer = item.dataset.composer;
		const arranger = item.dataset.arranger;
		const price = item.dataset.price;
		const sku = item.dataset.sku;

		let favoriteItem = new FavoriteItem(title, url, composer, arranger, price, sku);
		
		if (item.classList.contains('is-favorite')) {
			item.classList.remove('is-favorite');
			localStorage.removeItem(title);
			this.src = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68783b97f7f86dbb71aeef0c_heart-regular%20(1).svg";
		} else {
			item.classList.add('is-favorite');
			localStorage.setItem(title, JSON.stringify(favoriteItem));
			this.src = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68783b6bd8c41c933269ad27_heart-solid%20(1).svg";
		}
	});
});