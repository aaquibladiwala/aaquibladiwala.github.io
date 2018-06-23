var select = function(s) {
  return document.querySelector(s)
}, selectAll = function (s) {
   return document.querySelectorAll(s)
}, rightEye = select('#rightEye'),
   leftEye = select('#leftEye'),
   snout = select('#snout'),
   rightEar = select('#rightEar'),
   leftEar = select('#leftEar'),
   ears = selectAll('#leftEar, #rightEar'),
   panda = select('#panda')

var bg = new TimelineMax({repeat:-1,repeatDelay: 3});
bg.set(leftEye, {
  transformOrigin: 'center'
});

bg.set(snout, {
  transformOrigin: 'center'
});

bg.set(rightEye, {
  transformOrigin: 'center'
})
// Eye Blink
bg.to(rightEye, 0.1, {
  scaleY: 0
})
  .to(leftEye, 0.1, {
  scaleY: 0
}, '-=0.1')
  .to(rightEye, 0.1, {
  scaleY: 1
})
  .to(leftEye, 0.1, {
  scaleY: 1,
}, '-=0.1')
.to(rightEye, 0.1, {
  scaleY: 0
}, 1)
  .to(leftEye, 0.1, {
  scaleY: 0
}, '-=0.1')
  .to(rightEye, 0.1, {
  scaleY: 1
})
  .to(leftEye, 0.1, {
  scaleY: 1,
}, '-=0.1')
// Eye Blink End
// Eye going Left 
  .to(leftEye, 0.5, {
  x: '-=2',
  delay: 1
})
  .to(leftEyeInner, 0.5,{
  x:'-=5'
}, '-=0.5')
  .to(rightEye, 0.5, {
  x: '-=2'      
}, '-=0.5')
  .to(rightEyeInner, 0.5,{
  x:'-=1'
}, '-=0.5')
// Eye going Left end
// Eye going Right
  .to(leftEye, 0.5, {
  x: '+=4',
  delay: 1
})
  .to(leftEyeInner, 0.5,{
  x:'+=5'
}, '-=0.5')
  .to(rightEye, 0.5, {
  x: '+=4'      
}, '-=0.5')
  .to(rightEyeInner, 0.5,{
  x:'+=6'
}, '-=0.5')
// Eye going Origin
  .to(leftEye, 0.5, {
  x: '-=2',
  delay: 1
})
  .to(leftEyeInner, 0.5,{
  x:'-=0.3'
}, '-=0.5')
  .to(rightEye, 0.5, {
  x: '-=2'      
}, '-=0.5')
  .to(rightEyeInner, 0.5,{
  x: '-=5'
}, '-=0.5')
// Eye going Origin end
// Snout moving
  .to(snout, 0.5,{
  x: '+=3',
  delay: 0.4,
  repeat:1,
  yoyo:true
})
// Snout moving end
// Ears moving
  .to(ears, 0.5, {
  rotation: '3deg',
  svgOrigin: '90 90',
  repeat:1,
  yoyo:true
});

var mainTimeline = new TimelineMax({repeat:-1});
mainTimeline.add(bg,0)