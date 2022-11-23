let slider = new Swiper(".swiper", {
	simulateTouch: false,
	autoplay: true,
	autoHeight: true,

	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	autoplay: {
		delay: 4000,
		stopOnLastSlide: true,
		disableOnInteraction: true,
	},
})

slider.on('reachEnd', () => {
	setTimeout(start, 4000);
})

function start() {
	const body = document.body;
	const wrapper = document.querySelector('.wrapper');
	const main = document.querySelector('.main');

	body.classList.add("_changed");
	wrapper.classList.add("_hide");
	main.classList.add('_show');
}