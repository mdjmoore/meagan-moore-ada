This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Challenge 1

Build a frontend component that displays information from the /nodes endpoint according to the specification outlined in the design documents.

- When you click on an item in the list view on the left side of the app, a space between that cell and the cell beneath it should show that `node`s `connections`.

- You should then be able to click on the `node`s to reveal their `connections` as well, if they exist that is.

- When you click on a diferent item in the list, it should close the connections that you are viewing and open up the connections for the node that you have clicked on.

- Any time you click on a node, it should display all of the content in the Detail View on the right side of the page.

### Challenge 2

Build an interactive frontend component that works with the /search end point and displays results as outlined in the design documents.

In the detail view, make sure to **highlight** the search terms in the text if it's in the answer's content.

*Users may have input unsafe strings to try to expose XSS vulnerabilities in our application. Make sure to render highlights and other strings in a safe and secure way.*

### Challenge 3

Build an interactive frontend component that renders the content using template strings.

Variables are represented inside of `node` content as a template string `{<idOfTheVariable>|a fallback value}`

When displaying a variable, make sure to show that it's a variable value. In the image below, we can see how the variables should look embedded in text.

![variable pill](resources/variable-pill-example.png)