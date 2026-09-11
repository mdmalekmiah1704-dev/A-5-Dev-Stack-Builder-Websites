Dev Stack

Description

Dev Stack is a responsive web application where users can explore different technologies and build their own technology stack.

Technologies Used

* React.js
* TypeScript
* Vite
* CSS
* JSON
* React-Toastify

Features

1. Explore different technologies with their details.
2. Add technologies to your own stack and prevent duplicates.
3. Remove technologies from the stack with toast notifications.

React Questions

1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It is used in React to make UI code easier to write and understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState is used to manage changing data in a React component. In this project, it is used to manage the technology list, selected stack, and loading state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in React. In this project, it is used to load the technology data from the JSON file when the application starts.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list and efficiently update the UI when the list changes.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, an empty stack message is shown when no technology has been selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data or functions to a child through props. The child can communicate back by calling a function received through props.
