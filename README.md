# CvSU Mini Store

lab Exercise 3 - React Props and Component Communication

Guide Questions
1. What is the difference between props and state?

-props are data from the parent and cannot be changed by the child. State is data inside a component that can be change.

2. Why can a child component not modify the props it receives?

-because the props belong to the parent and only the parent can change them.

3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?

-the parent gives a function to the child then child calls it and sends the product title, so the parent gets the data.

4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?

-the key helps react know which item. If it is missing or duplicated, react show a warning or update in the wrong item.

5. What does the children prop allow you to do that a normal prop does not?

-it lets me put content inside the component tags, like the New and Sale badges.