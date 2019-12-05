# Atomic CSS by Volusion

## _Readme In Progress_

A CSS library based on <a href="https://github.com/tachyons-css/tachyons" target="_blank">Tachyons</a> for use in the <a href="https://github.com/Khan/aphrodite" target="_blank">aphrodite</a> framework.

## Using Atomic CSS in Element blocks.

It's best to reference Atomic CSS classes is using the `atomic()` helper function found in your props via the syntax below:

```jsx
<div className={atomic('flex items-center w-100')} />
```

Output:

```jsx
<div class="dynamic_atomic_class"></div>
```

### Breaking `atomic()` down

The above example is essentially shorthand for writing:

```jsx
<div
    className={css(
        atomicStyles['flex'],
        atomicStyles['items-center'],
        atomicStyles['w-100']
    )}
/>
```

It also includes some logic to let you know if you accidentally reference an Atomic class that doesn't exist via a console warning.

### Combining Atomic CSS with custom aphrodite classes

```jsx
<div
    className={joinClasses(
        atomic('flex items-center w-100'),
        css(classes.yourCustomClassA, classes.yourCustomClassB)
    )}
/>
```

Output:

```jsx
<div class="dynamic_atomic_class dynamic_custom_class"></div>
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
