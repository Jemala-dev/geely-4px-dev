$(function() {
	const { $body } = window
	const $headerBurger = $(".js-header-burger");
	const $headerMenu = $(".js-header-menu");

	$headerBurger.on("click", function() {
		const that = $(this);
		that.toggleClass("is-change")
		$headerMenu.toggleClass("is-show")
		$body.css("overflow", "hidden");
	})

	$body.on("click", function(e) {
		const target = e.target
		if (!target.closest(".js-header-menu") && !target.closest(".js-header-burger")) {
			removeHeaderMenu()
		}
	})

	$headerMenu.on("click", function(e) {
		if(!!e.target.closest("a")) {
			removeHeaderMenu()
		}
	})

	function removeHeaderMenu() {
		$headerMenu.removeClass("is-show")
		$body.removeAttr("style")
		$headerBurger.removeClass("is-change")
	}
})