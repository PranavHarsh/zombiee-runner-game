function isTouching(a, b) {
	const aRect = a.getBoundingClientReact()
	const bRect = b.getBoundingClientReact();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left + aRect.left < bRect.width
	);
}
const avatar = document.querySelector('#zoombie');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		moveVertical(avatar, 50);
	} else if (e.key === 'ArrowUp' || e.key === 'Up') {
		moveVertical(avatar, -50);
	} else if (e.key === 'ArrowRight' || e.key === 'Right') {
		moveHorizontal(avatar, 50);
		//const currLeft = extractPos(avatar.style.left);
		//avatar.style.left = `${currLeft + 50}px`;
		avatar.style.transform = 'scale(1,1)';
	} else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		moveHorizontal(avatar, -50);
		//const currLeft = extractPos(avatar.style.left);
		//avatar.style.left = `${currLeft - 50}px`;
		avatar.style.transform = 'scale(-1,1)';
	}
	if (isTouching(avatar, coin)) moveCoin;
});

const moveVertical = (element, amount) => {
	const currTop = extractPos(element.style.top);
	element.style.top = `${currTop + amount}px`;
};
const moveHorizontal = (element, amount) => {
	const currLeft = extractPos(element.style.left);
	element.style.left = `${currLeft + amount}px`;
};

const extractPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
};

moveCoin();

//----------another section---------
//-------form events and preventDefault---------
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const zoombiesSelect = document.querySelector('#zoombies');

const formData = {};
for (let input of [ creditCardInput, termsCheckbox, zoombiesSelect ]) {
	input.addEventListener('input', ({ taget }) => {
		const { name, type, value, checked } = taget;
		formData[name] = type === 'checkbox' ? checked : value;
	});
}

//creditCardInput.addEventListener('input', (e) => {
//	formData['cc'] = e.target.value;
//});
//zoombiesSelect.addEventListener('input', (e) => {
//	formData['zoombie'] = e.target.value;
//});
//termsCheckbox.addEventListener('input', (e) => {
//	formData['agreeToTerms'] = e.target.checked;
//});

//const form = document.querySelector('#signup-form');

//form.addEventListener('submit', function(e) {
//	alert('FORMSUBMITTED');
//console.log('cc', creditCardInput.value);
//console.log('terms', termsCheckbox.checked);
//console.log('zoombies', zoombiesSelect.value);
//e.preventDefault();
//});