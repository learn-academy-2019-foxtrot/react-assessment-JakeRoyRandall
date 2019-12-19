# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (true)

- React will only render on the server using Node.js (false per source: https://daveceddia.com/do-i-need-nodejs-backend-for-react-angular/)

- React is a full stack framework for modern web applications (false: react doesn't do backend)

- React is a flexible library that plays the role of V in an MVC framework (true)

- You should always update a component's state directly using this.state (false: NEVER! only update state via the setState method)

- React is made up of encapsulated components that manage their own state (true)

- React components render HTML (false: JSX)


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer:
    Smart components maintain their own state, dumb components do not.

  Researched answer:

  Source: https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43

  Dumb Components

    Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.

    The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked. Ignorance is bliss.

  Smart components

    Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

    Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props.

    They are class-based components and have their own state defined in their constructor() functions.

3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer:

    Yarn is going to the source of the files/ module and getting the most updated version. The package.json file.

  Researched answer:

  Source: https://yarnpkg.com/lang/en/docs/cli/add/

  In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

  This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

  Most packages will be installed from the npm registry and referred to by simply their package name. For example, yarn add react will install the react package from the npm registry.

4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer:
    Props are information that a parent component will pass down into a child component. When we call a component in JSX we would pass in props just as we would any html attribute in any other element.

    State is information about the state of the component that may or may not be passed to children. State is generally stored as high up as possible in the state tree.

  Researched answer:

    Source: https://flaviocopes.com/react-state-vs-props/

    In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.



5. How would you explain state to a friend who doesn't know code?

    Your answer: Imagine you have a dresser. Typically the dresser is closed. Sometimes it can have any number of drawers open or closed. We want to keep track of these different possibilities in our code so that we could access the different clothes inside when we need to. So we'd use the state of our dresser (i.e. drawer1: closed, drawer2: open, etc.) to give us that functionality in React.
