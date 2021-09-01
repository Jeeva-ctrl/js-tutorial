/*
1. What are the advantages of using React?
  
     Use of Virtual DOM to improve efficiency
     Gentle learning curve
     SEO friendly
     Reusable components
     Huge ecosystem of libraries to choose from - React provides you the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.

 2. What is JSX?

  JSX stands for JavaScript XML.
   It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).

 3. What are the differences between functional and class components?  
 4. What is the virtual DOM? How does react use the virtual DOM to render the UI?
     AWhy was virtual DOM introduced? DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript.
The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.
For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called inefficient updating.
To address the problem of inefficient updating, the react team introduced the concept of virtual DOM.

How does it work?

For every DOM object, there is a corresponding virtual DOM object(copy), which has the same properties.
The main difference between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly. Consider a virtual DOM object as a blueprint of the real DOM object.
Whenever a JSX element gets rendered, every virtual DOM object gets updated.

**Note- One may think updating every virtual DOM object might be inefficient, but that’s not the case. Updating the virtual DOM is much faster than updating the real DOM since we are just updating the blueprint of the real DOM.

React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects.
Whenever the virtual DOM gets updated, react compares the two virtual DOMs and gets to know about which virtual DOM objects were updated.
After knowing which objects were updated, react renders only those objects inside the real DOM instead of rendering the complete real DOM.
This way, with the use of virtual DOM, react solves the problem of inefficient updating.

5. What are the differences between controlled and uncontrolled components?
Controlled and uncontrolled components are just different approaches to handling input form elements in react.

Controlled component :  In a controlled component, the value of the input element is controlled by React.
We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well.
When a user enters data inside the input element of a controlled component, onChange function gets triggered and inside the code we check whether the value entered is valid or invalid. If the value is valid, we change the state and re-render the input element with new value.



Uncontrolled component In an uncontrolled component, the value of the input element is handled by the DOM itself.
Input elements inside uncontrolled components work just like normal HTML input form elements.
The state of the input element is handled by the DOM. Whenever the value of the input element is changed,event-based callbacks are not called. Basically, react does not perform any action when there are changes made to the input element.
Whenever use enters data inside the input field, the updated data is shown directly. To access the value of the input element, we can use ref.


6. What are the different lifecycle methods in React?
Every component in React has lifecycle methods that we can tap into, to trigger changes at a particular phase of the life cycle.
Each component in react goes through three phases: Mounting, Updating, and Unmounting.
There are corresponding lifecycle methods for each of the three phases:

Mounting:

There are four built-in lifecycle methods that are called in the following order when a component is mounted:
constructor( ) - This is called before anything else. We can set the initial state of the component inside this method. The constructor method is used to set the initial state and bind methods to the component.
getDerivedStateFromProps( ) - This is called before rendering the elements in the DOM.
In this method, we can set the state of the component based on the props we received. This method is used very rarely.
render( ) - This is the only required method in the class component. This method returns the HTML elements which are going to be rendered inside the DOM.
componentDidMount( ) - It is called right after the component is rendered inside the DOM. All the statements which require the DOM nodes can be executed in this method. Network requests from a remote end-point can also be instantiated in this method.

Updating:

Updates in react are caused by changes in state or props. Update leads to re-rendering of the component. The following methods are called when a component is re-rendered:
getDerivedStateFromProps( ) - This method is called again when a component is being re-rendered.
shouldComponentUpdate( ) - This method is called before rendering the component when new props are received. It lets React know if the component’s output is affected by the newly received props or by the state change. By default, it returns true.
render( ) - To re-render the HTML inside the DOM, the render( ) method gets called again.
getSnapshotBeforeUpdate( ) - This method is called just before the newly rendered HTML gets committed to the DOM. It stores the previous state of the component so that React has an idea of what parts of the DOM needs to be updated.
componentDidUpdate( ) - It is called after the component gets re-rendered. This method works just like the componentDidMount( ) method, the difference is that this method does not get called on initial render.

Unmounting:

componentWillUnmount( ) - This method is called just before the component gets destroyed. Any clean up statements should be executed inside this method.


7. Explain Strict Mode in React.
StrictMode is a tool added in the version 16.3 of React to highlight potential problems in an application. It performs additional checks on the application.
To enable StrictMode, <React.StrictMode> tags need to be added inside the application:

StrictMode currently helps with the following issues:
Identifying components with unsafe lifecycle methods
Certain lifecycle methods are unsafe to use in asynchronous react applications. With the use of third-party libraries it becomes difficult to ensure that certain lifecycle methods are not used.
StrictMode helps in providing us a warning if any of the class components uses an unsafe lifecycle method.

Warning about the usage of legacy string API
If one is using an older version of React, callback ref is the recommended way to manage refs instead of using the string refs. StrictMode gives a warning if we are using string refs to manage refs.

Warning about the usage of findDOMNode
Previously, findDOMNode( ) method was used to search the tree of a DOM node. This method is deprecated in React. Hence, the StrictMode gives us a warning about the usage of this method.
Warning about the usage of legacy context API (because the API is error-prone)



8. How to prevent re-renders in React?
Reason for re-renders in React:
Re-rendering of a component and it’s child components occur when props or state of the component has been changed.
Re-rendering components that are not updated, affects the performance of an application.


To prevent the re-rendering of child component, we use the shouldComponentUpdate( ) method:

As one can see in the code above, we have returned false from the shouldComponentUpdate( ) method, which prevents the child component from re-rendering

9. Explain React state and props.

React State
Every component in react has a built-in state object, which contains all the property values that belong to that component.
In other words, the state object controls the behaviour of a component. Any change in the property values of the state object leads to re-rendering of the component.

Every react component, accepts a single object argument called props (which stands for “properties”).
These props can be passed to a component using HTML attributes and the component accepts these props as an argument.
Using props, we can pass data from one component to another.
Passing props to a component

10. Explain React Hooks.
What are Hooks? Hooks are functions that let us “hook into” React state and lifecycle features from a functional component.
React Hooks cannot be used in class components. They let us write components without class.

Why were Hooks introduced in React?
React hooks were introduced in the 16.8 version of React.
Previously, functional components were called stateless components. Only class components were used for state management and lifecycle methods.
The need to change a functional component to a class component, whenever state management or lifecycle methods were to be used, led to the development of Hooks.


11. What are the different ways to style a React component?

Inline Styling
Using JavaScript object
CSS Stylesheet

12. Name a few techniques to optimize React app performance.

Using useMemo( ) -
It is a React hook that is used for caching CPU-Expensive functions.
Sometimes in a React app, a CPU-Expensive function gets called repeatedly due to re-renders of a component, which can lead to slow rendering.
useMemo( ) hook can be used to cache such functions. By using useMemo( ), the CPU-Expensive function gets called only when it is needed.

Using React.PureComponent -
It is a base component class that checks state and props of a component to know whether the component should be updated.
Instead of using the simple React.Component, we can use React.PureComponent to reduce the re-renders of a component unnecessarily.

Maintaining State Colocation -
This is a process of moving the state as close to where you need it as possible.
Sometimes in React app, we have a lot of unnecessary states inside the parent component which makes the code less readable and harder to maintain. Not to forget, having many states inside a single component leads to unnecessary re-renders for the component.
It is better to shift states which are less valuable to the parent component, to a separate component.

Lazy Loading -
It is a technique used to reduce the load time of a React app. Lazy loading helps reduce the risk of web app performances to minimal.

13. What are keys in React?
Importance of keys
Keys help react identify which elements were added, changed or removed.
Keys should be given to array elements for providing a unique identity for each element.
Without keys, React does not understand the order or uniqueness of each element.
With keys, React has an idea of which particular element was deleted,edited, and added.
Keys are generally used for displaying a list of data coming from an API.
***Note- Keys used within arrays should be unique among siblings. They need not be globally unique.

14. How to pass data between react components?
With the help of props, we can send data from a parent to a child component.

15. What are Higher Order Components?
Simply put, Higher Order Component(HOC) is a function that takes in a component and returns a new component.
When do we need a Higher Order Component?
While developing React applications, we might develop components that are quite similar to each other with minute differences.
In most cases, developing similar components might not be an issue but, while developing larger applications we need to keep our code DRY, therefore, we want an abstraction that allows us to define this logic in a single place and share it across components.
HOC allows us to create that abstraction.

16. What is prop drilling in React?

Sometimes while developing React applications, there is a need to pass data from a component that is higher in the hierarchy to a component that is deeply nested.
To pass data between such components, we pass props from a source component, and keep passing the prop to the next component in the hierarchy till we reach the deeply nested component.
The disadvantage of using prop drilling is that the components that should otherwise be not aware of the data have access to the data.


17. What are error boundaries?
Introduced in the version 16 of React, Error boundaries provide a way for us to catch errors that occur in the render phase.

What is an error boundary?
Any component which uses one of the following lifecycle methods, is considered an error boundary.
In what places can an error boundary detect an error?
Render phase
Inside a lifecycle method
Inside the constructor

getDerivedStateFromError function renders the fallback UI interface when the render method has an error.
componentDidCatch logs the error information to an error tracking service.


What is React?
React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.


What are Pure Components?
React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.

Why should we not update the state directly?
If you try to update the state directly then it won't re-render the component.

//Wrong
this.state.message = 'Hello world'
Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

//Correct
this.setState({ message: 'Hello World' })
Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.

What is the purpose of callback function as an argument of setState()?

The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

Note: It is recommended to use lifecycle method rather than this callback function.

setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))

How to bind methods or event handlers in JSX callbacks?


There are 3 possible ways to achieve this:

Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // ...
  }
}
Public class fields syntax: If you don't like to use bind approach then public class fields syntax can be used to correctly bind callbacks.

handleClick = () => {
  console.log('this is:', this)
}
<button onClick={this.handleClick}>
  {'Click me'}
</button>
Arrow functions in callbacks: You can use arrow functions directly in the callbacks.

<button onClick={(event) => this.handleClick(event)}>
  {'Click me'}
</button>
Note: If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with .bind() or public class fields syntax approach considering performance.

=============================================================================================================

What are synthetic events in React?
SyntheticEvent is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.

=============================================================================================================
What is the use of refs?

The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.
=============================================================================================================
How to create refs?

There are two approaches

This is a recently added approach. Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property within constructor.

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  render() {
    return <div ref={this.myRef} />
  }
}
You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element accessed as follows,

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.txtSearch = null;
      this.state = { term: '' };
      this.setInputSearchRef = e => {
         this.txtSearch = e;
      }
   }
   onInputChange(event) {
      this.setState({ term: this.txtSearch.value });
   }
   render() {
      return (
         <input
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}
            ref={this.setInputSearchRef} />
      );
   }
}
You can also use refs in function components using closures. Note: You can also use inline ref callbacks even though it is not a recommended approach

=============================================================================================================
What are forward refs?
Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.

const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>{'Forward Ref'}</ButtonElement>
=============================================================================================================
Which is preferred option with in callback refs and findDOMNode()?
It is preferred to use callback refs over findDOMNode() API. Because findDOMNode() prevents certain improvements in React in the future.

The legacy approach of using findDOMNode:

class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView()
  }

  render() {
    return <div />
  }
}
The recommended approach is:

class MyComponent extends Component {
  constructor(props){
    super(props);
    this.node = createRef();
  }
  componentDidMount() {
    this.node.current.scrollIntoView();
  }

  render() {
    return <div ref={this.node} />
  }
}
=============================================================================================================
What is the difference between createElement and cloneElement?

JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props

=============================================================================================================
What is context?
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.

const {Provider, Consumer} = React.createContext(defaultValue)
=============================================================================================================
=============================================================================================================
What is children prop?
Children is a prop (this.props.children) that allow you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.

There are a number of methods available in the React API to work with this prop. These include React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray.

A simple usage of children prop looks as below,

const MyDiv = React.createClass({
  render: function() {
    return <div>{this.props.children}</div>
  }
})

ReactDOM.render(
  <MyDiv>
    <span>{'Hello'}</span>
    <span>{'World'}</span>
  </MyDiv>,
  node
)

=============================================================================================================
What is the purpose of using super constructor with props argument?
A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in your child constructors.

Passing props:

class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    console.log(this.props) // prints { name: 'John', age: 42 }
  }
}
Not passing props:

class MyComponent extends React.Component {
  constructor(props) {
    super()

    console.log(this.props) // prints undefined

    // but props parameter is still available
    console.log(props) // prints { name: 'John', age: 42 }
  }

  render() {
    // no difference outside constructor
    console.log(this.props) // prints { name: 'John', age: 42 }
  }
}
The above code snippets reveals that this.props is different only within the constructor. It would be the same outside the constructor.
=============================================================================================================
What is reconciliation?
When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.
=============================================================================================================

Is lazy function supports named exports?
No, currently React.lazy function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components. Let's take a component file which exports multiple named components,

export { SomeComponent as default } from "./MoreComponents.js";

Now you can import the module using lazy function as below,
import React, { lazy } from 'react';
const SomeComponent = lazy(() => import("./IntermediateComponent.js"));

=============================================================================================================
What are portals in React?
Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

ReactDOM.createPortal(child, container)
The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM elemen
=============================================================================================================
What are the recommended ways for static type checking?
Normally we use PropTypes library (React.PropTypes moved to a prop-types package since React v15.5) for type checking in the React applications. For large code bases, it is recommended to use static type checkers such as Flow or TypeScript, that perform type checking at compile time and provide auto-completion features.

=============================================================================================================

What is the use of react-dom package?
The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

render()
hydrate()
unmountComponentAtNode()
findDOMNode()
createPortal()



=============================================================================================================

What is the purpose of render method of react-dom?
This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

ReactDOM.render(element, container[, callback])
If the optional callback is provided, it will be executed after the component is rendered or updated.

=============================================================================================================

What is ReactDOMServer?
The ReactDOMServer object enables you to render components to static markup (typically used on node server). This object is mainly used for server-side rendering (SSR). The following methods can be used in both the server and browser environments:

renderToString()
renderToStaticMarkup()
For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call renderToString to render your root component to a string, which you then send as response.

// using Express
import { renderToString } from 'react-dom/server'
import MyPage from './MyPage'

app.get('/', (req, res) => {
  res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>')
  res.write('<div id="content">')
  res.write(renderToString(<MyPage/>))
  res.write('</div></body></html>')
  res.end()
})

=============================================================================================================
How to use innerHTML in React?
The dangerouslySetInnerHTML attribute is React's replacement for using innerHTML in the browser DOM. Just like innerHTML, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a __html object as key and HTML text as value.

In this example MyComponent uses dangerouslySetInnerHTML attribute for setting HTML markup:

function createMarkup() {
  return { __html: 'First &middot; Second' }
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />
}

=============================================================================================================

Why we need to be careful when spreading props on DOM elements?
When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with ...rest operator, so it will add only required props.

For example,

const ComponentA = () =>
  <ComponentB isDisplay={true} className={'componentStyle'} />

const ComponentB = ({ isDisplay, ...domProps }) =>
  <div {...domProps}>{'ComponentB'}</div>


=============================================================================================================

How you use decorators in React?
You can decorate your class components, which is the same as passing the component into a function. Decorators are flexible and readable way of modifying component functionality.

@setTitle('Profile')
class Profile extends React.Component {
    //....
}


  title is a string that will be set as a document title
  WrappedComponent is what our decorator will receive when
  put directly above a component class as seen in the example above

// const setTitle = (title) => (WrappedComponent) => {
//   return class extends React.Component {
//     componentDidMount() {
//       document.title = title
//     }

//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
// }
// Note: Decorators are a feature that didn't make it into ES7, but are currently a stage 2 proposal.


=============================================================================================================
How do you memoize a component?
There are memoize libraries available which can be used on function components.
Since React v16.6.0, we have a React.memo. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.

  // const MemoComponent = React.memo(function MemoComponent(props) {
  //    render using props 
  // });
  // OR
  // export default React.memo(MyFunctionComponent);

=============================================================================================================



=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================

=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================



=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================



=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================

=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================



=============================================================================================================


=============================================================================================================


=============================================================================================================


=============================================================================================================




*/
