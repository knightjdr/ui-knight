The Navbar component can be fixed or positioned absolutely so that it will
scroll with the page. All of the examples here use absolute positioning to fit
within the styleguide layout. In all of the code examples the Navbar is
wrapped in a div with class "navbar-wrapper" that is used only for the
purposes of this styleguide and can be ignored.

<strong>Default</strong>

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-wrapper">
    <Navbar
      fixed={false}
      links={[
        { route: '/', text: 'ARMOUR'},
        { route: '/', text: 'SWORDS'},
      ]}
    />
  </div>
</BrowserRouter>
```

<strong>Background</strong>

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-wrapper">
    <Navbar
      background={false}
      fixed={false}
      links={[
        { route: '/', text: 'ARMOUR'},
        { route: '/', text: 'SWORDS'},
      ]}
    />
  </div>
</BrowserRouter>
```

<strong>Shadow</strong>

```jsx
const { BrowserRouter } = require('react-router-dom');
<BrowserRouter>
  <div className="navbar-multiple">
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'ARMOUR'},
          { route: '/', text: 'SWORDS'},
        ]}
      />
    </div>
    <div className="navbar-wrapper">
      <Navbar
        fixed={false}
        links={[
          { route: '/', text: 'ARMOUR'},
          { route: '/', text: 'SWORDS'},
        ]}
        shadow={false}
      />
    </div>
  </div>
</BrowserRouter>
```

<strong>Links</strong>
The Navbar component assumes you are using react router for navigation. If you
are not or wish to include a url link, set the href key to true and pass the url
via the route. If you would like the link to open in a new tab or with
rel="noreferrer nofollow", add these properties using a props object on the link.
The right links are set using the "links" prop and the icon/logo link is set using
the logoLink prop. The default route for the logo is the home route "/".

```jsx
const { BrowserRouter } = require('react-router-dom');
const props = {
  rel: 'noreferrer nofollow',
  target: '_blank',
};
<BrowserRouter>
  <div className="navbar-wrapper">
    <Navbar
      fixed={false}
      links={[
        { href: true, route: 'https://jamesknight.ca', text: 'ABOUT', props },
        { href: true, route: 'https://github.com/knightjdr', text: 'GITHUB'},
      ]}
      logoLink={{
        href: true,
        route: 'https://jamesknight.ca',
      }}
    />
  </div>
</BrowserRouter>
```
