- [ ] Why would you use class component over function components (removing hooks from the question)?  
    Without hooks: Functional components cannot manage state. In Class components, we have access to lifecycle methods (componentDidMount) and state management. State management allows for interaction between the user and the client.  
- [ ] Name three lifecycle methods and their purposes.  
    componentDidMount - triggers when the component renders for the first time. Can use it for one time side effects such as data fetching.  
    componentDidUpdate - triggers whenever component state changes. Use it when you need to do extra things on specific state changes.  
    componentWillUnmount - triggers whenever component unmounts from App. Use it when you need to clean up the component such as removing an event listener.  
- [ ] What is the purpose of a custom hook?  
    To make code more DRY. If there are multiple things that need to have state but have similar logic, you can make a custom hook and use that for both things. For example, if I had two counters that would need an increment and a reset function, I could make those two functions inside a custom hook. Whenever I use that custom hook, it will always create those two extra functions for me. 
- [ ] Why is it important to test our apps?  
    To find problems early before deploying the app, and to be able to see how components interact by themselves and with each other. It will save a company a lot of money by testing early!  