document.addEventListener("DOMContentLoaded", function() {

	$(window).on("load", function () {
		$(".preloader").delay(700).fadeOut("slow");
	});

	$('.popup').magnificPopup({
		type:'inline',
		midClick: true,
		showCloseBtn: false,
		removalDelay: 700,
		mainClass: 'mfp-fade'
	});


	$('.themeForm__close').on('click', function() {
		$.magnificPopup.close();
	})
	$('.formSuccess__close').on('click', function() {
		$.magnificPopup.close();
	})
	$('.signUp__close').on('click', function() {
		$.magnificPopup.close();
	})

	const $dropdownMenu = $('.dropdownMenu');

	$(document).mouseup(e => {
		if (!$dropdownMenu.is(e.target) // if the target of the click isn't the container...
		&& $dropdownMenu.has(e.target).length === 0) // ... nor a descendant of the container
		{
			$dropdownMenu.removeClass('dropdownMenu__active');
		}
	});

	$('.catalog__link').on('click', (e) => {
		$dropdownMenu.toggleClass('dropdownMenu__active');
		e.preventDefault()
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.toTop').addClass('active')
		} else {
			$('.toTop').removeClass('active')
		}
	})

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height() * 2) {
			$('.cookie').addClass('active')
		}
	})

	$('.cookie__btn').on('click', function(e) {
		$('.cookie').css('opacity', '0')
		$('.cookie').css('visibility', 'hidden')
		e.preventDefault()
		return false
	})

	$('.toTop').on('click', function() {
		$('html, body').stop().animate({ scrollTop: 0}, 'slow', 'swing')
	})

	$(".signUp__item").not(":first").hide();
	$(".signUp__wrapper .signUp__tab").click(function() {
		$(".signUp__wrapper .signUp__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".signUp__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.theme-select').select2();


	// gsap animation
	gsap.registerPlugin(ScrollTrigger);
	gsap.config({
		nullTargetWarn: false
	})



	function hamburgerMenu() {
		$burgerBtn = document.querySelector('.hamburger')
		$mobileMenu = document.querySelector('.mobileMenu')
		$burgerBtn.addEventListener('click', function() {
			if(this.classList.contains('hamburger__active')){
				this.classList.remove('hamburger__active')
				$mobileMenu.classList.remove('mobileMenu-active')
				document.body.style.overflow = ''
			} else {
				this.classList.add('hamburger__active')
				$mobileMenu.classList.add('mobileMenu-active')
				document.body.style.overflow = 'hidden'
			}
			
			
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
			delay: 6000,
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
		
		$textBlock = document.querySelectorAll('.complexApproach__text')
		

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
	

	function startAnimation() {
		const tl = gsap.timeline({
			delay: 1
		})
		tl.from('.home .header', { duration: 1.5, y: -50, opacity: 0 })
		tl.from('.home .intro__title', { duration: 1.5, x: -50, opacity: 0 }, '-=1.2')
		tl.from('.home .intro__text', { duration: 1.5, x: -50, opacity: 0 }, '-=1.2')
		tl.from('.home .intro__btn', { duration: 0.5, opacity: 0, y: 200 }, '-=1.7')
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
		scrollAnim.from('.questions__accordion .accordion__item', { y: 100, opacity: 0, duration: 1, stagger: 0.5 })
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
		scrollAnim.from('.home .form .themeForm', { y: 100, opacity: 0, duration: 2 })
	}

	function quantity() {
		const $plusBtn = document.querySelectorAll('.quantity .plus')
		const $minusBtn = document.querySelectorAll('.quantity .minus')

		$plusBtn.forEach(plusItem => {
			plusItem.addEventListener('click', function() {
				plusItem.previousElementSibling.value++
			})
		})

		$minusBtn.forEach(minusItem => {
			minusItem.addEventListener('click', function() {
				if(minusItem.nextElementSibling.value > 1){
					minusItem.nextElementSibling.value--
				}
				
			})
		})

	}

	function repostIcon () {
		$allShareBtn = document.querySelectorAll('.icon.share')
		$allShareBtn.forEach(btn => {
			btn.addEventListener('click', function() {
				this.classList.toggle('active')
				this.nextElementSibling.classList.toggle('show')
			})
		})
	}



	hamburgerMenu()
	accordion()
	footerArrow()
	quantity()
	repostIcon()

	$complexMoreBtn = document.querySelector('.complexApproach__more')
	if($complexMoreBtn) {
		$complexMoreBtn.addEventListener('click', complexMoreBtn, false)
	}
	

	if(window.innerWidth > 992) {
		startAnimation()
		complexApproachAnimation()
		assortmentAnimation()
		questionsAnimation()
		kassyAnimation()
		aboutAnimation()
		formAnimation()
	}

});
