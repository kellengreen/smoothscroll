# smoothscroll

## Usage

smoothScroll(x, y, [duration], [easing]);

#### x
Horizontal pixel destination of the scroll animation.

#### y
Vertical pixel destination of the scroll amination.

#### duration (optional)
Length in milliseconds of the scroll amination. 

#### easing (optional)
Function which specifies the speed curve of the amination effect. Default is cubic easing out.

```
function(original, change, time, duration) { return val } 
```
