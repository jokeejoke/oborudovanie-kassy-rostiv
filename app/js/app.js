document.addEventListener("DOMContentLoaded", function() {

	function catalogButton() {
		$catalogBtn = document.querySelector('.catalog__link')
		$dropdown = document.querySelector('.dropdown')
		$catalogBtn.addEventListener('click', function(e) {
			this.classList.toggle('mainMenu__link-active')
			$dropdown.classList.toggle('dropdown__active')
			e.preventDefault()
		})
	}

	function hamburgerMenu() {
		$burgerBtn = document.querySelector('.hamburger')
		$mobileMenu = document.querySelector('.mobileMenu')
		$burgerBtn.addEventListener('click', function() {
			this.classList.toggle('hamburger__active')
			$mobileMenu.classList.toggle('mobileMenu-active')
		})
	}

	function accordion() {
		const $acc = document.querySelectorAll('.accordion__header')
		$acc.forEach(item => {
			item.addEventListener('click', function () {
				const $currentlyActuveAccHeader = document.querySelector('.accordion__header.accordion__header-active')
				if ($currentlyActuveAccHeader && $currentlyActuveAccHeader !== item) {
					$currentlyActuveAccHeader.classList.toggle('accordion__header-active')
					$currentlyActuveAccHeader.parentNode.classList.toggle('active')
					$currentlyActuveAccHeader.nextElementSibling.style.maxHeight = 0
				}

				this.classList.toggle('accordion__header-active')
				this.parentNode.classList.toggle('active')
				const $accBody = this.nextElementSibling
				if (this.classList.contains('accordion__header-active')) {
					$accBody.style.maxHeight = $accBody.scrollHeight + 'px'
				} else {
					$accBody.style.maxHeight = 0
				}
			})
		})
	}

	const assortmentSlider = new Swiper('.assortmentSlider__container', {
		slidesPerView: 1,
		spaceBetween: 15,
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		breakpoints: {
			1200: {
				spaceBetween: 49,
				slidesPerView: 4
			},
			991: {
				spaceBetween: 25,
				slidesPerView: 4
			},
			768: {
				spaceBetween: 20,
				slidesPerView: 3
			},
			576: {
				spaceBetween: 30,
				slidesPerView: 2
			},
			460: {
				spaceBetween: 15,
				slidesPerView: 2
			},
			360: {
				slidesPerView: 2,
				spaceBetween: 15
			}
		}
	});
	// Stop Slider on Hover
	document.querySelectorAll('.assortmentSlider__container .assortmentSlider__slide').forEach(assortmentItem => {
		assortmentItem.onmouseenter = function() {
			assortmentSlider.autoplay.stop()
		}
		assortmentItem.onmouseleave = function() {
			assortmentSlider.autoplay.start()
		}
	})

	function complexMoreBtn() {
		$moreBtn = document.querySelector('.complexApproach__more')
		$textBlock = document.querySelectorAll('.complexApproach__text')
		$moreBtn.addEventListener('click', function() {

			if(this.classList.contains('complexApproach__more-active')) {
				$textBlock.forEach(item => {
					item.style.maxHeight = 0
					item.classList.remove('complexApproach__text-active')
					this.classList.remove('complexApproach__more-active')
				})
			} else {
				this.classList.toggle('complexApproach__more-active')
				$textBlock.forEach(item => {
				item.style.maxHeight = item.scrollHeight + 'px'
				item.classList.toggle('complexApproach__text-active')
			})
			}
		})
	}

	$('.kassySlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		adaptiveHeight: true,
		asNavFor: '.kassyThumbs'
	});
	$('.kassyThumbs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		asNavFor: '.kassySlider',
		arrows: false,
		//dots: true,
		//centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1999,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					vertical: false,
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					vertical: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					vertical: false
				}
			}
		]
	});

	function sliderThumbsWidth() {
		const $thumbArr = document.querySelectorAll('.kassyThumbs__slide').forEach(item => {
			let $elWIdth = item.getAttribute('style');
			let $newWidth = $elWIdth.substring(0, $elWIdth.length - 1);
			
			
		})
		//log($thumbWidth)
	}


	catalogButton()
	hamburgerMenu()
	accordion()
	complexMoreBtn()
	sliderThumbsWidth()

});
