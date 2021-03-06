document.addEventListener("DOMContentLoaded", function() {

	$(window).on("load", function () {
		$(".preloader").delay(700).fadeOut("slow");
		$(".ajax-preloader").delay(700).fadeOut("slow");
	});

	$('.popup').magnificPopup({
		type:'inline',
		midClick: true,
		showCloseBtn: false,
		removalDelay: 700,
		mainClass: 'mfp-fade',
		autoFocusLast: false,
		fixedBgPos: true,
		fixedContentPos: true
	});

	$('.detail__image').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		},
		mainClass: 'mfp-fade',
		removalDelay: 700
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
	$('.form-close').on('click', function() {
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

	$(".detail__item").not(":first").hide();
	$(".detail__wrapper .detail__tab").click(function() {
		$(".detail__wrapper .detail__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".detail__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


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
		pagination: {
			el: '.assortmentSlider__pagination',
			clickable: true
		},
		loop: true,
		speed: 2000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		navigation: {
			nextEl: '.slider-nav__next',
			prevEl: '.slider-nav__prev',
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
				slidesPerView: 2
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

	$('.detail__gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.detail__thumbs'
	});

	$('.detail__thumbs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.detail__gallery',
		arrows: false,
		//dots: true,
		//centerMode: true,
		focusOnSelect: true
	});

	function footerArrow() {
		$arrow = document.querySelector('.footer__arrow')
		$footerTop = document.querySelector('.footer__top')
		$footerBottom = document.querySelector('.footer__bottom')
		$arrow.addEventListener('click', function() {
			$footerTop.classList.toggle('active')
			$footerBottom.classList.toggle('active')
			this.classList.toggle('active')
			window.scrollTo(0,document.body.scrollHeight)
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
		scrollAnim.from('.questions__accordion .accordion__item', { y: 100, opacity: 0, duration: 1, stagger: 0.3 })
	}

	function complexApproachAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.complexApproach'
			}
		})
		scrollAnim.from('.complexApproach__title', { y: 100, opacity: 0, duration: 1 })
		scrollAnim.from('.complexApproach__item', { scale: 0, opacity: 0, duration: 1.3})
		scrollAnim.from('.complexApproach__more', { opacity: 0, duration: 1, scale: 0 })
		scrollAnim.set('.complexApproach__line', { opacity: 1})
		scrollAnim.to('.complexApproach__line', { width: '100%', duration: 3}, '-=0.1')
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
	function repostIcon () {
		$allShareBtn = document.querySelectorAll('.icon.share')
		$allShareBtn.forEach(btn => {
			btn.addEventListener('click', function() {
				this.classList.toggle('active')
				this.nextElementSibling.classList.toggle('show')
			})
		})
	}
	
	function loadFile () {
		const $filename = document.querySelector('.filename')
		if($filename) {
			$filename.onchange = function(event) {
				let reader = new FileReader();
				reader.onload = function(){
					let output = document.querySelector('.user-data__outputImage');
					output.src = reader.result;
				};
				reader.readAsDataURL(event.target.files[0]);
			}
		}
		
	}

	function deleteFile() {
		const $deleteBtn = document.querySelector('.user-data__deleteImage')
		if($deleteBtn) {
			$deleteBtn.addEventListener('click', function() {
				let output = document.querySelector('.user-data__outputImage');
				output.src = 'assets/images/dest/no-image.png';
			})
		}
	}

	function goBack() {
		$backBtn = document.querySelector('.textBlock__btns .back')
		if($backBtn) {
			$backBtn.addEventListener('click', function() {
				window.history.back();
			})
		}
	}

	document.addEventListener('mousemove', function(e) {
		this.querySelectorAll('.box').forEach(boxItem => {
			const x = e.pageX / -15
			const y = e.pageY / -15
			boxItem.style.transform = 'translateX(' + x + 'px)'

		})
	})


	function resizeCatalogItem(selector) {
		$toggleBtn = document.querySelector(selector)
		$btns = document.querySelectorAll('.showKind a')
		$catalogItems = document.querySelectorAll('.catalog__items .col-lg-3.col-md-4')
	
		if($toggleBtn) {
			$toggleBtn.addEventListener('click', function(e) {
				if (!this.classList.contains('active') && this.classList.contains('vertical')){
					$catalogItems.forEach(catalogEl => {
						catalogEl.setAttribute('class', 'col-lg-12')
					})
				} else {
					$catalogItems.forEach(catalogElHorizontal => {
						catalogElHorizontal.setAttribute('class', 'col-lg-3 col-md-4 col-sm-6')
					})
				}
				$btns.forEach(btn => {
					btn.classList.remove('active')
				})
				this.classList.add('active')
				e.preventDefault()
				return false
			})
		}

	}


	$(".cabinet__tabItem").not(":first").hide();
	$(".cabinet__wrapper .cabinet__tab").click(function() {
		$(".cabinet__wrapper .cabinet__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".cabinet__tabItem").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	hamburgerMenu()
	accordion()
	footerArrow()
	repostIcon()
	loadFile()
	deleteFile()
	goBack()
	resizeCatalogItem('.showKind .vertical')
	resizeCatalogItem('.showKind .horizontal')

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
