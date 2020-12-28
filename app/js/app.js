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

	function mobileMenuWidth() {
		$logoWidth = document.querySelector('.header__top .container').offsetWidth
		document.querySelector('.mobileMenu').style.width = $logoWidth + 'px'
		window.onresize = function(event) {
			document.querySelector('.mobileMenu__link').style.width = document.querySelector('.header__top .container').offsetWidth + 'px'
		}
	}


	catalogButton()
	hamburgerMenu()
	//mobileMenuWidth()

});
