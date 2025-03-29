var tl = gsap.timeline()
tl.from("h3",{
  y:300,
  opacity:0,
  stagger: 0.5,
  duration: 0.1,
});
tl.to("#page1",{
  y: '-100%',
  });