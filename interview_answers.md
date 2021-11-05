# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   Context API provides a way to share data between components without having to explicitly pass a prop through every level of the tree. For example you can pass a Theme Button to a nav bar.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? Actions are the events that occur in the app based on user input, and trigeer updates in the state.
   The reducers are functions that receive the current state and an action object, this decides how to update state if need be and returns new state.
   And lastly store is where the Redux application state lives in an object. The store is created by passing a reducer, and has a method called getState that returns the current value.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`? Redux thunk is middleware that allows us to return functions instead of only actions in Redux.
   These functions take the store dispatch method as the argument and is later used to dispatch the synchornous action after the API or side effect has been finished.

4. What is your favorite state management system you've learned and this sprint? So far I like Context management system because it was easier to learn the syntax and boiler plate code. However, I understand that Redux is the industry standtard allowing web apps to scale, so my goal is to make Redux my favorite state management solution in the near future. I just need more practice building redux apps.
