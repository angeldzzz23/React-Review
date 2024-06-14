# reactCourse

# Hooks
- wtch the ruls of hooks in practice section 13, 160
- Akways start with use
- enable easy reusing of non-visual logic
- Give function components the ability to own state and run side effects at different lifecyle points
## Overview 

### there are over 20 hooks.

Common questions:
- Usestate vs usereducer
**- Use state**
  - ideal for single, independent pieces of state (numbers, strings, single arrays, etc)
  - Logic to update state is placed directly in event handlers or effects, spread all over one or multiple components
- **usereducer**
  - ideal for multiple reladed pieces of state and complex state (e.g. object with many values and nested objects or arrays)

- use state
   -  Based on function (lazy evaluation)
   -  Make sue to no mutate objects or arrays but to replace them
   -  function must be pure and must not accept parameters
`   const [count, setCount] = useState(23)
     setcount(1000);
     setCount((c) => c + 1)
 `
- usereducer
- usecontext
- useref
   - react gives a .current property that is persistent across renders
   - We can write to and and read from the ref using .current
   - const myref = useRef(1000)
   - myref.current = 1000
   - Use cases
      - creating a variable that stays the same between renders (e.g prev state, setTimeout id, etc.)
      - selecting and storing DOM elements
      - refs are for data that is not rendered: usually only appear in event handlers or effects, not in JSX (otherwise use state)
      - Do not read write or read .current in render logic (like state)
- usecallback
- usememo
- useDeferredValyue

 # the rules of hooks
 
1. can only call hooks at the top level
 -  Do not call hooks inside conditionals, loops, nexted functions or after an early retur
2. Only call hooks inside of a function component or a custom hook.
- call hooks inside a function componenet or a cutom hook

# Custum Hooks
- Reusing logic with custum hooks
- Allow us to reuse non-visual logic multiple components
- One custom hook should have one purpose, to make it reusable and portable (even across projects)
- have to use one or more react hoooks
- needs to start with **use**
  - not optional 
- ![Screenshot 2024-06-12 at 8 31 54 PM](https://github.com/angeldzzz23/reactCourse/assets/29695936/ba5690c6-0dbc-417b-8e3b-57a0cc390d7e)

