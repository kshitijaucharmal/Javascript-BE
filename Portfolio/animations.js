document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
      Draggable, DrawSVGPlugin, EaselPlugin, Flip, GSDevTools, InertiaPlugin,
      MotionPathHelper, MotionPathPlugin, MorphSVGPlugin, Observer,
      PhysicsPropsPlugin, PixiPlugin, ScrambleTextPlugin, ScrollTrigger,
      ScrollSmoother, ScrollToPlugin, SplitText, TextPlugin, RoughEase,
      ExpoScaleEase, SlowMo, CustomEase, CustomBounce, CustomWiggle);

  // gsap code here!
  gsap.config({trialWarn : false});
  console.clear();

  // get a function that we can feed an x and y value to and have it animate
  // there according to the duration
  function follower(target, duration) {
    let xTo = gsap.quickTo(target, "x", {duration : duration, ease : "back"}),
        yTo = gsap.quickTo(target, "y", {duration : duration, ease : "back"});
    return (x, y) => {
      xTo(x);
      yTo(y)
    };
  }

  let followers = gsap.utils.toArray("#one, #two, #three")
                      .reverse()
                      .map((el, i) => follower(el, 0.25 + i * 0.1))

  Draggable.create("#target", {
    bounds : window,
    inertia : true,
    onDrag : updateFollowers,
    onThrowUpdate : updateFollowers
  });

  function updateFollowers() { followers.forEach(f => f(this.x, this.y)); }
});
