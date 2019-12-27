# Atomic CSS by Volusion

A CSS library based on <a href="https://github.com/tachyons-css/tachyons" target="_blank">Tachyons</a> for use on Element based Volusion storefronts.

## Individual Stylesheets

-   [aspect-ratios](./dist/styles/aspect-ratios.css)
-   [border-radius](./dist/styles/border-radius.css)
-   [borders](./dist/styles/borders.css)
-   [border-widths](./dist/styles/border-widths.css)
-   [box-shadow](./dist/styles/box-shadow.css)
-   [box-sizing](./dist/styles/box-sizing.css)
-   [coordinates](./dist/styles/coordinates.css)
-   [display](./dist/styles/display.css)
-   [flexbox](./dist/styles/flexbox.css)
-   [forms](./dist/styles/forms.css)
-   [height](./dist/styles/height.css)
-   [letter-spacing](./dist/styles/letter-spacing.css)
-   [line-height](./dist/styles/line-height.css)
-   [lists](./dist/styles/lists.css)
-   [max-width](./dist/styles/max-width.css)
-   [normalize](./dist/styles/normalize.css)
-   [outline](./dist/styles/outline.css)
-   [overflow](./dist/styles/overflow.css)
-   [position](./dist/styles/position.css)
-   [rotations](./dist/styles/rotations.css)
-   [skins](./dist/styles/skins.css)
-   [spacing](./dist/styles/spacing.css)
-   [tables](./dist/styles/tables.css)
-   [text-align](./dist/styles/text-align.css)
-   [text-decoration](./dist/styles/text-decoration.css)
-   [typography](./dist/styles/typography.css)
-   [utilities](./dist/styles/utilities.css)
-   [vertical-align](./dist/styles/vertical-align.css)
-   [white-space](./dist/styles/white-space.css)
-   [width](./dist/styles/width.css)
-   [z-index](./dist/styles/z-index.css)

## NPM Scripts

| npm script | Description                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `less`     | Compiles the `src/less/index.less` file to `dist/index.css`.                                                                                     |
| `minify`   | Minifies the `dist/index.css` file to `dist/index.min.css`.                                                                                      |
| `compile`  | Runs the `less` script and then the `minify` script.                                                                                             |
| `watch`    | Watches the files in `src/less/` for changes and compiles matching css files in `dist`. Does **NOT** minify the final `dist/index.min.css` file. |

## Combining Atomic CSS with custom aphrodite classes

```jsx
<div
    className={joinClasses(
        'flex items-center w-100',
        css(classes.yourCustomClassA, classes.yourCustomClassB)
    )}
/>
```

Output:

```jsx
<div class="flex items-center w-100 dynamic_custom_class"></div>
```

### What is the `joinClasses` function?

That function can be found in your block props and is meant to join your classes together with some extra logic to ensure you output classlist is clean and free of unintended classes and whitespace. It will

-   Join all arguments together with a single space between each one.
-   Remove any unnecessary whitespace that might be caused before, between, or after your final classes.
-   Remove any invalid classes that might be output by bad logic (removes `undefined`, `null`, `false`, and additional whitespace), which is the biggest reason to use it over string literals.
