### 1 What is the difference between Component and PureComponent? give an example where it might break my app.


### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?


### 3. Describe 3 ways to pass information from a component to its PARENT.

 While data normally flows from parent to child component in react, There is one method to pass data from child to parent component. This method is called two way binding and it involves the following steps.

 * Create a callback function in the parent component. This callback function will get the data from the child component.
* Pass the callback function in the parent as a prop to the child component.
* The child component calls the parent callback function with the required data.

### 4. Give 2 ways to prevent components from re-rendering.

A react component re-renders when the prop or state is changed. However, if we intend to control re-rendering when props/state changes in a class component, we can use the shouldComponentUpdate lifecycle function. Also using React.memo to wrap functional components helps prevent re-renders by checking for prop changes.



### 5. What is a fragment and why do we need it? Give an example where it might break my app.

React Fragments gives the functionality to return multiple elements/components from a react component without adding extra DOM element or array. 

I cant really figure out a situation where fragments breaks your application but I think it might affect styling when used with some css framework

### 6. Give 3 examples of the HOC pattern.

 HOC pattern involves a Higher order component wrapping another component in other to add functionalities to the wrapped component.
 
a breakdown in code is shown below

```const higherOrderComponent = WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />
    }
  }
  return HOC
}
```
 
  In react eco system, some examples of HOC includes 
  * withRouter from react-router-dom, 
  * graphql Hoc from react-apollo (this is deprecated)
  * connect hoc from react-redux


### 7. what's the difference in handling exceptions in promises, callbacks and async...await.

### 8. How many arguments does setState take and why is it async.

The setState function takes two arguments.
The setState function is asynchronous because state changes causes re-renders. re-renders can be a very expensive operation can affect performance if made synchronous


### 9. List the steps needed to migrate a Class to Function Component.

* Change class to function
* Remove the render method
* covert all class methods to functions
* Remove constructor
* Remove reference to 'this'
* change lifecycles methods to the appropriate hook

### 10. List a few ways styles can be used with components.

### Component can be styled using:
* inline styling
*  css  global styles sheets by importing the required css file 
*  css modules that involves style local to a component
* styled components



### 11. How to render an HTML string coming from the server.

Although this is not safe, we use dangerouslySetInnerHTML prop to display the return HTML string
