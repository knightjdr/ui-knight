A button with a CSS-only ripple effect applied via the :not(:active) selector.
The animation is hidden initially by applying "visibility: hidden" to the :after
pseudo-element that has the animation effect. On :focus, :after is made visible.
The animation doesn't play on keyboard navigation (and focus) because we are moving from
no pseudo-class to :focus and the animation only plays once. If the animation
looped infinitely, the animation would show on :focus in this scenario. By
applying the animation using the :not(:active) selector, the animation will play
again once moving from :active to :focus. See discussion
<a
  href="https://ghinda.net/article/css-ripple-material-design/"
  rel="noopener noreferrer">here</a>.

<strong>Default</strong>
```jsx
<BasicCssButton />
```

<strong>With shadow</strong>
```jsx
<BasicCssButton
  shadow
/>
```

<strong>Keyboard events</strong>
In addition to supporting the native onClick prop, the button can also be passed
a function via the onEnter prop that will be called by pressing the enter key.
Try focusing on the button below and either clicking or pressing enter.
Using the native onKeyPress prop will override the onEnter prop functionality, so
these should not be used together.
```jsx
initialState = { click: false, enter: false }
;<div className="row">
  <BasicCssButton
    onClick={() => { setState({ click: true, enter: false }); }}
    onEnter={() => { setState({ click: false, enter: true }); }}
  />
  <div className="console">
    { state.click ? 'button clicked' : null }
    { state.enter ? 'enter pressed' : null }
  </div>
</div>
```
