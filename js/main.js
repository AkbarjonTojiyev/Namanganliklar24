const ready = function (cb) {
  // Check if the `document` is loaded completely
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", function (e) {
        cb();
      })
    : cb();
};

// Usage
ready(function() {
	// toggle sitenav on site-header__toggler click
	const elSiteHeaderToggler = document.querySelector('.site-header__toggler');
	const elSitenav = document.querySelector('.sitenav');

	elSiteHeaderToggler.addEventListener('click', function(){
		elSitenav.classList.toggle('sitenav--open');
	});


});