# Atomic CSS by Volusion

## _Readme In Progress_

A CSS library based on <a href="https://github.com/tachyons-css/tachyons" target="_blank">Tachyons</a> for use in the <a href="https://github.com/Khan/aphrodite" target="_blank">aphrodite</a> framework.

## Using Atomic CSS in Element blocks.

It's best to reference Atomic CSS classes is using the `atomic()` helper function found in your props via the syntax below:

```jsx
<div className={atomic('flex items-center w-100')} />
```

Output (where each class is actually a dynamically created aphrodite class):

```html
<div class="[flex] [items-center] [w-100]"></div>
```

### Breaking `atomic()` down

The above example is essentially shorthand for writing:

```jsx
<div
    className={[
        css(atomicStyles['flex']),
        css(atomicStyles['items-center']),
        css(atomicStyles['w-100'])
    ].join(' ')}
/>
```

It also includes some logic to let you know if you accidentally reference an Atomic class that doesn't exist via a console warning.

### Why call css on every class? Aphrodite says not to do it this way.

-   **The short version:** This keeps your CSS small, which reduces page load times, which keeps Google happy, and increases your site's ranking!
-   **The long version:**

    -   The reason for calling css on every class instead of following aphrodite's recommendation of combining classes is that each set of css rules is added to your page's styles only once using the above method. This means that every piece of code on the page using the same method to call a class all references the same single css rule instead of creating many different classes that include the exact same CSS rule, bloating your CSS.
    -   Combining the exact same css in a different order creates different classes with identical behavior, bloating your CSS.

        Example:

        ```js
        css(atomic['flex'], atomic['items-center'], atomic['w-100']);
        ```

        does not equal

        ```js
        css(atomic['w-100']), css(atomic['flex'], atomic['items-center']);
        ```

    -   This does not mean that you can't still combine your custom aphrodite classes as necessary. See below.

### Combining Atomic CSS with custom aphrodite classes

```jsx
<div
    className={joinClasses(
        atomic('flex items-center w-100'),
        css(classes.yourCustomClassA, classes.yourCustomClassB)
    )}
/>
```

#### What is the `joinClasses` function?

That function can be found in your block props and is meant to join your classes together with some extra logic to ensure you output classlist is clean and free of unintended classes. It will

-   Join all arguments together with a single space between each one.
-   Remove any unnecessary whitespace that might be caused before, between, or after your final classes.
-   Remove any invalid classes that might be output by bad logic (removes `undefined`, `null`, and `false`), which is the biggest reason to use it over string literals.

## Responsive Suffixes

Any content tagged for responsive suffixes will contain the following class/css structure:

```css
[className] {
    // ...
}
@media only screen and (min-width: 30em) {
    [className]-ns {
        // ...
    }
}
@media only screen and (min-width: 30em) and (max-width: 60em) {
    [className]-m {
        // ...
    }
}
@media only screen and (min-width: 60em) {
    [className]-l {
        // ...
    }
}
```
