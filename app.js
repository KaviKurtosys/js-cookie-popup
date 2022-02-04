const tl = gsap.timeline({defaults: { duration: 0.75}})

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1});
tl.fromTo('.cookie', {opacity: 0}, {opacity: 1});