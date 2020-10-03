## Meagan More Ada Tech Challenge

to view live, run `yarn start` and `node api.js`

I've left notes in specific files about the code written within (Sidebar, Details, Accordion) and will adress the parts of the challenge I was not able to complete here.

For **Challenge 2** I would first regex any incoming input to prevent a user from entering scripts that could be harmful to the application. Once the input values were cleaned, I would take that value and pass it to the Details component. From there, I would filter through the cards and the text within to find a match to the entered term then wrap any matching strings in a span so they could be targeted with css to show a user a match had been found.

For **Challenge 3** I would again use regex to grab the text that is between the parentheses and then split that value on the pipe to get the variable and the fallback value. As far as rendering it, I found the attached image didn't answer lingering questions I had about how to render the variable. I would render a string of `fallback value` (the string after the pipe) and then render the id of the variable in a coloured pill with a tooltip that displayed on hover or click.

---

## Instructions:
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
