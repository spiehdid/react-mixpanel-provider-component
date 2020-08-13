# react-mixpanel-provider-component

The project provides simple wrapper over [mixpanel-browser](https://github.com/mixpanel/mixpanel-js) to ease using Mixpanel in your React app.

# install

``` bash
  npm install --save react-mixpanel-provider-component
```

## Usage

Then use it like you would use [Context API](https://reactjs.org/docs/context.html). In your root `App.js` :

1. Import required modules:

``` 
import mixpanel from 'mixpanel-browser';
import { MixPanelProvider } from 'react-mixpanel-provider-component';
```

2. Initialize your Mixpanel instance:

``` 
mixpanel.init("TOKEN");
```

3. Render your app using `MixpanelProvider` :

``` jsx
ReactDOM.render(
    <MixpanelProvider mixpanel={mixpanel}>
        <App/>
    </MixpanelProvider>,
    document.getElementById('root')
);
```

4. Then, everytime you'd like to use mixpanel you can get it using `useMixPanel` :

 `Functional component`
```jsx 
import React, { useEffect } from 'react'
import { useMixPanel } from 'react-mixpanel-provider-component'; 

const App = () => {

    const { mixpanel } = useMixPanel()

    useEffect(() => {
       mixpanel.track('logged to site')
    }, [])

    return <div>Hello world!</div>;

}

``` 
 `Class component`
```jsx 
import React, { useEffect } from 'react'
import { MixPanelContext } from 'react-mixpanel-provider-component';

class App extends React.Component {
    componentDidMount() {
        this.context.mixpanel.track('Hello mixpanel!');
    }

    render() {
        return <div>Hello world!</div>;  
    }
}

App.contextType = MixPanelContext;

```

 `Other`

``` js
import Mixpanel from 'react-mixpanel-provider-component';

export default mixPanelHandler = (type, payload) => {
    if (type === 'NEW_USER') {
        Mixpanel.identify(payload.id)

        Mixpanel.people.set({
            $name: payload.name,
            $email: payload.email,
            USER_ID: payload.id
        })
    } else if (type === 'END_SESSION') {
        Mixpanel.track('Hello mixpanel!')
        Mixpanel.people.set({
            last_seen: new Date()
        })
    }
}
```
