# react-mixpanel-provider-component

The project provides simple wrapper over [mixpanel-browser](https://github.com/mixpanel/mixpanel-js) to ease using Mixpanel in your React app.

# install

```bash
  npm install --save react-mixpanel-provider-component
```

## Usage

Then use it like you would use [Context API](https://reactjs.org/docs/context.html). In your root `App.js` :

Render your app using `MixpanelProvider`

```jsx
import MixPanelProvider from 'react-mixpanel-provider-component';

ReactDOM.render(
  <MixPanelProvider token="xxxxxxxxxxxxxxxxx" config={{
				api_host: process.env.REACT_PUBLIC_MIXPANEL_PROXY_DOMAIN,
				cdn: process.env.REACT_PUBLIC_MIXPANEL_PROXY_DOMAIN,
				app_host: process.env.REACT_PUBLIC_MIXPANEL_PROXY_DOMAIN,
        debug: true
	}}>
    <App />
  </MixPanelProvider>,
  document.getElementById('root')
);
```

`Don't forget to initialize your Mixpanel instance if you haven't passed the token to the provider`

`Functional component`

```jsx
import React, { useEffect } from 'react';
import { useMixPanel } from 'react-mixpanel-provider-component';

const App = () => {
  const { mixpanel } = useMixPanel();

  useEffect(() => {
    mixpanel.init('TOKEN');
    mixpanel.track('logged to site');
  }, []);

  return <div>Hello world!</div>;
};
```

`Class component`

```jsx
import React, { useEffect } from 'react';
import { withMixpanel } from 'react-mixpanel-provider-component';

class App extends React.Component {
  componentDidMount() {
    this.props.mixpanel.init('TOKEN');
    this.props.mixpanel.track('logged to site');
  }

  render() {
    return <div>Hello world!</div>;
  }
}

export default withMixpanel(App);
```

`Other`

```js
import Mixpanel from 'react-mixpanel-provider-component';

let isInit = false;

export default mixPanelHandler = (type, payload) => {
  if (!isInit) {
    Mixpanel.init('TOKEN');
    isInit = true;
  }

  if (type === 'NEW_USER') {
    Mixpanel.identify(payload.id);

    Mixpanel.people.set({
      $name: payload.name,
      $email: payload.email,
      USER_ID: payload.id
    });
  } else if (type === 'END_SESSION') {
    Mixpanel.track('Hello mixpanel!');
    Mixpanel.people.set({
      last_seen: new Date()
    });
  }
};
```
