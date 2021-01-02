document.addEventListener("DOMContentLoaded", function() {

	// gsap animation
	gsap.registerPlugin(ScrollTrigger);
	gsap.config({
		nullTargetWarn: false
	})

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
			delay: 4000,
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

	function footerArrow() {
		$arrow = document.querySelector('.footer__arrow')
		$footerTop = document.querySelector('.footer__top')
		$footerBottom = document.querySelector('.footer__bottom')
		$arrow.addEventListener('click', function() {
			$footerTop.classList.toggle('active')
			$footerBottom.classList.toggle('active')
			this.classList.toggle('active')
		})
	}

	
	function boxAnimation() {
		const box = gsap.timeline({
			repeat: -1
		})
		box.to('.box', { duration: 7, ease: Power0.easeOut, rotate: 360})
	}
	

	function startAnimation() {
		const tl = gsap.timeline()

		tl.from('.home .header', { duration: 1.5, y: -50, opacity: 0 })
		tl.from('.home .intro__title', { duration: 1.5, x: -50, opacity: 0 }, '-=1.2')
		tl.from('.home .intro__text', { duration: 1.5, x: -50, opacity: 0 }, '-=1.2')
		tl.to('.home .intro__btn', { duration: 1.5, opacity: 1 }, '-=1.5')
		tl.from('.home .intro__image', { duration: 1.5, x: 150, opacity: 0 }, '-=1.7')
	}

	function assortmentAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.assortment'
			}
		})
		scrollAnim.from('.home .assortment__title', { y: 100, opacity: 0, duration: 1 })
		scrollAnim.from('.home .assortmentSlider__slide', { x: -100, opacity: 0, duration: 1, stagger: 0.4 })
	}

	function questionsAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.questions'
			}
		})
		scrollAnim.from('.questions__title', { y: 100, opacity: 0, duration: 1 })
		scrollAnim.from('.questions__accordion .accordion__item', { y: 100, opacity: 0, duration: 1.7, stagger: 0.7 })
	}

	function complexApproachAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.complexApproach'
			}
		})
		scrollAnim.from('.complexApproach__title', { y: 100, opacity: 0, duration: 1 })
		scrollAnim.from('.complexApproach__item', { x: -100, opacity: 0, duration: 1.3, stagger: 0.5 })
		scrollAnim.from('.complexApproach__more', { opacity: 0, duration: 1, scale: 0 })
	}

	function kassyAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.kassy'
			}
		})
		scrollAnim.from('.kassy__title', { y: 100, opacity: 0, duration: 1 })
		scrollAnim.from('.kassySlider', { opacity: 0, duration: 1 })
		scrollAnim.from('.kassyThumbs', { opacity: 0, duration: 1 })
	}

	function aboutAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.about'
			}
		})
		scrollAnim.from('.about__title', { y: 100, opacity: 0, duration: 1 })
		scrollAnim.from('.about__logotype', { opacity: 0, duration: 1 })
		scrollAnim.from('.about__text', { opacity: 0, duration: 1 }, '-=0.5')
	}

	function formAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.form'
			}
		})
		scrollAnim.from('.home .themeForm', { y: 100, opacity: 0, duration: 2 })
	}


	catalogButton()
	hamburgerMenu()
	accordion()
	complexMoreBtn()
	footerArrow()
	boxAnimation()
	startAnimation()
	complexApproachAnimation()
	assortmentAnimation()
	questionsAnimation()
	kassyAnimation()
	aboutAnimation()
	formAnimation()

});
