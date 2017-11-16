# Romeo 
A Simple router for react

![Romeo & Juliet](https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Romeo_and_juliet_brown.jpg/110px-Romeo_and_juliet_brown.jpg)

### How does it work?
Basically, you must have a JavaScript `Cartography` with all routes and the content.

```javascript

import { Cartography } from 'romeo';

let routes = {
    main: {
        url: '/',
        content: <MainView />
    },
    page2: {
        url: '/page2',
        content: <PageTwoView />
    }
}

let catRoutes = new Cartography(routes); // <-- these are you routes
```

The `Cartography` is just a bunch of function that synthesizes your routes to be easy to reach them.

Since you have it done. create a new `Romeo`.

```javascript
let romeo = new Romeo(catRoutes);
```
and it's almost done. you can now do some tricks to work with that.

**1 - Work on your app by yourself.**

You can use romeo functions to navigate, subscribe for routes changes and more...

**Get Current State**

With this method, you can get the current state of your app
    
```javascript
romeo.getCurrent(); 
// => [Object] { url: '/', content: <MainView /> } 
```

**Navigate**

You can move the page for other state using `romeo.navigate('stateKey');`

**Subscribe for routes changes**
 
With this method, you can listen for URL changes into app with `romeo.subscribe(function)`

**2 - Use React component to render the view**

You can skip all the configuration to show the view using the React component.

```javascript
import { RomeoWrapper } from 'romeo';

ReactDom.render(<RomeoWrapper romeo={romeo}/>, document.getElementById('id'));
```

## Disaclaimer
This lib is just on the beginning, not safe to use in production
