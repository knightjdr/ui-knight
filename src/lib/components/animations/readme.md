There are optional animation styles that can be applied to components by
adding an additional class. These animations are intended to provide visualization
queues. All of the animations have four iteration variants. The default will iterate
5 times, while adding '-one', '-two' or '-infinite' to the end of the class name will
cause the animation to loop once, twice or infinitely respectively.

<strong>Pulse (class: knight-pulse)</strong>

```jsx
require('./pulse.css');
<div className="row row_padding">
  <BasicCssButton className="knight-pulse-infinite" />
</div>
```

<strong>Wiggle (class: knight-wiggle)</strong>

```jsx
require('./wiggle.css');
<div className="row">
  <BasicCssButton className="knight-wiggle-infinite" />
</div>
```
