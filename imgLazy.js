(function (useLoading, selector) {
  if (useLoading && "loading" in HTMLImageElement.prototype) {
    var lazyEls = document.querySelectorAll("." + selector);
    lazyEls.forEach(function (lazyEl) {
      lazyEl.setAttribute("src", lazyEl.getAttribute("data-src"));
    });
  } else {
    var observer = lozad("." + selector);
    observer.observe();
  }
})(true, "lazy");