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

*/