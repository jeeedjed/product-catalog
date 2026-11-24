Lab Exercise 4 - React useState and useEffect
Guide Questions
1. Why do we use two separate states, searchText and debouncedSearch, instead of only one?

-searchText changes on every key I type, whlie debouncedSearch only changes after I stop typing so the list does not filter on every key.

2. What would happen if the debounce effect did not return a cleanup function?

-the old timers will not be cancelled.\, so possible that the debounce will not work.

3. What is the purpose of the dependency array? What happens if it is empty ([])? What happens if it is left out completely?

-it tells tothe react when to run the effect again. If its empty, the effect runs only once. If its left out, it runs after every render.

4. Why should we avoid sorting the original products array directly?

-because the sort changes the array itself, so i just sort a copy instead.

5. Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.

-it is better to calculate it during the rendering because it can be made from the existing state, so it doesnt need for another state.