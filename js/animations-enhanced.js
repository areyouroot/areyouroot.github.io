// Enhanced animations: IntersectionObserver-based reveal + micro-interactions
(function(){
  'use strict';

  var selectors = '[data-animate]';
  var elems = Array.prototype.slice.call(document.querySelectorAll(selectors));

  function reveal(el){
    var cls = el.getAttribute('data-animate') || 'fade-up';
    var delay = el.getAttribute('data-delay') || '0';
    if(delay) el.style.animationDelay = delay + 'ms';

    // Add is-visible and animation class
    el.classList.add('is-visible');
    el.classList.add(cls);

    // Special handling for progress bars inside
    var bars = el.querySelectorAll('.progress-bar');
    bars.forEach(function(bar){
      var target = bar.getAttribute('aria-valuenow') || bar.dataset.progress || bar.style.width || '0%';
      // If width is inline style like "80%" keep it, otherwise add %
      if(!/%$/.test(target)) target = target + '%';
      // trigger the transition by setting width
      setTimeout(function(){ bar.style.width = target; }, 60);
    });
  }

  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      });
    },{ root: null, rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    elems.forEach(function(el){ io.observe(el); });
  } else {
    // Fallback: make all visible
    elems.forEach(function(el){ reveal(el); });
  }

  // Improve page-loader hide to use class, avoids layout flicker
  window.addEventListener('load', function(){
    var loader = document.querySelector('.page-loader');
    if(loader){ loader.classList.add('hidden'); setTimeout(function(){ loader.style.display = 'none'; }, 700); }
  });

  // Add small interactive hover for cards
  document.querySelectorAll('.rotate-box-1, .rotate-box-2, .portfolio_single_content').forEach(function(card){
    card.addEventListener('mouseenter', function(){ card.classList.add('is-hover'); });
    card.addEventListener('mouseleave', function(){ card.classList.remove('is-hover'); });
  });

  // Header hide/show on scroll - less obtrusive sticky header
  (function(){
    var lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    var nav = document.querySelector('.navbar-fixed-top');
    if(!nav) return;
    var ticking = false;
    var minDelta = 10; // minimal scroll delta to act
    var disableOnWidth = 768; // don't hide on small screens

    function onScroll(){
      if(ticking) return; ticking = true;
      window.requestAnimationFrame(function(){
        var current = window.pageYOffset || document.documentElement.scrollTop;
        var delta = current - lastScroll;
        // show on top
        if(current <= 20){ nav.classList.remove('nav-hidden'); nav.classList.add('nav-visible'); }
        else if(Math.abs(delta) > minDelta && window.innerWidth > disableOnWidth){
          if(delta > 0){ // scrolled down
            nav.classList.add('nav-hidden'); nav.classList.remove('nav-visible');
          } else { // scrolled up
            nav.classList.remove('nav-hidden'); nav.classList.add('nav-visible');
          }
        }
        lastScroll = current <= 0 ? 0 : current;
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, {passive:true});
    // ensure navbar starts visible
    nav.classList.add('nav-visible');
  })();

})();
