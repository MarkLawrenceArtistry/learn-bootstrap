# Bootstrap
Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.

# Guide
1. Get the cdn in `getbootstrap.com`
2. Paste the CSS in the `<head>` and the javascript at `<script>`
3. Create a `<h1>Hello World<h1>` to test the Bootstrap Font

# JS components 
Curious which components explicitly require our JavaScript and Popper? If you’re at all unsure about the general page structure, keep reading for an example page template.

- Accordions for extending our Collapse plugin
- Alerts for dismissing
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires Popper)
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse and Offcanvas plugins to implement responsive behaviors
- Navs with the Tab plugin for toggling content panes
- Offcanvases for displaying, positioning, and scroll behavior
- Scrollspy for scroll behavior and navigation updates
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning (also requires Popper)


# Color Variables (SASS)
Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.

1. Body - Default foreground (color) and background, including components.
   - --bs-body-color (white)
   - --bs-body-bg (black)

2. Secondary - Use the color option for lighter text. Use the bg option for dividers and to indicate disabled component states.
   - --bs-secondary-color (grayish white)
   - --bs-secondary-bg (grayish black)

3. Tertiary - Use the color option for even lighter text. Use the bg option to style backgrounds for hover states, accents, and wells.
   - --bs-tertiary-color (gray)
   - --bs-tertiary-bg (soft black)

4. Emphasis - For higher contrast text. Not applicable for backgrounds.
   - --bs-emphasis-color (super white)

5. Border - For component borders, dividers, and rules. Use --bs-border-color-translucent to blend with backgrounds with an rgba() value.
   - --bs-border-color (dark gray)

6. Primary - Main theme color, used for hyperlinks, focus styles, and component and form active states.
   - --bs-primary (blue)
   - --bs-primary-bg-subtle (darkest blue)
   - --bs-primary-border-subtle (dark blue)
   - --bs-primary-text-emphasis (blue)

7. Success - Theme color used for positive or successful actions and information.
   - --bs-success (green)
   - --bs-success-bg-subtle (darkest green)
   - --bs-success-border-subtle (dark green)
   - --bs-success-text-emphasis (green)

8. Danger - Theme color used for errors and dangerous actions.
   - --bs-danger (red)
   - --bs-danger-bg-subtle (darkest red)
   - --bs-danger-border-subtle (dark red)
   - --bs-danger-text-emphasis (red)

9. Warning - Theme color used for non-destructive warning messages.
   - --bs-warning (yellow)
   - --bs-warning-bg-subtle (darkest yellow)
   - --bs-warning-border-subtle (dark yellow)
   - --bs-warning-text-emphasis (yellow)

10. Info - Theme color used for neutral and informative content.
    - --bs-info (cyan)
    - --bs-info-bg-subtle (darkest cyan)
    - --bs-info-border-subtle (dark cyan)
    - --bs-info-text-emphasis (cyan)

11. Light - Additional theme option for less contrasting colors.
    - --bs-light (white)
    - --bs-light-bg-subtle (dark gray)
    - --bs-light-border-subtle (lighter dark gray)
    - --bs-light-text-emphasis (white)

12. Dark - Additional theme option for higher contrasting colors.
    - --bs-dark (dark)
    - --bs-dark-bg-subtle (black)
    - --bs-dark-border-subtle (lighter black)
    - --bs-dark-text-emphasis (white)



# Breakpoints
Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.

- Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.
- Use media queries to architect your CSS by breakpoint. Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use min-width in our media queries.
- Mobile first, responsive design is the goal. Bootstrap’s CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

## Available breakpoints
The styling will apply when it hits the dimension, if it hits below it then the style won't apply.
| Breakpoint | Class infix | Dimensions |
| -------- | -------- | -------- |
| Extra Small   | None   | < 576px   |
| Small   | sm   | > 576px   |
| Medium   | md   | > 768px   |
| Large   | lg   | > 992px   |
| Extra Large   | xl   | > 1200px   |
| Extra Extra Large   | xxl   | > 1400px   |



# Containers
Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.

- `.container` which sets a max-width at each responsive breakpoint
- `.container-{breakpoint}`, which is width: 100% until the specified breakpoint, stretches out to the ends of the screen until it hits a breakpoint (which automatically adds max-width on it)
- `.container-fluid`, which is width: 100% at all breakpoints, stretches out to the ends of the screen

## Creating default container
Our default .container class is a responsive, fixed-width container, meaning its max-width changes at each breakpoint.
```html
<div class="container"></div>
```

## Creating fluid container
Use .container-fluid for a full width container, spanning the entire width of the viewport.
```html
<div class="container-fluid"></div>
```


# Grid
Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with `flexbox` and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together.

Example
```html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col">Column 2</div>
        <div class="col">Column 3</div>
    </div>
</div>
```

- Our grid supports six responsive breakpoints. Breakpoints are based on min-width media queries, meaning they affect that breakpoint and all those above it (e.g., .col-sm-4 applies to sm, md, lg, xl, and xxl). This means you can control container and column sizing and behavior by each breakpoint.
- Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to uniformly apply column sizing and gutter classes to change the spacing of your content.
- Columns are incredibly flexible. There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., col-4 spans four). widths are set in percentages so you always have the same relative sizing.

## Grid Options
- `.col-` <576px
- `.col-sm-` >576px
- `.col-md-` >768px
- `.col-lg-` >992px
- `.col-xl-` >1200px
- `.col-xxl-` >1400px

## Settings customized widths by breakpoints
Example
```html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col-6">Column 2</div>
        <div class="col">Column 3</div>
    </div>
</div>
```

## Change width content via breakpoint
    Example
```html
<div class="container">
    <div class="row">
        <div class="col col-lg-2">Column 1</div>
        <div class="col col-md-auto">Column 2</div>
        <div class="col col-lg-2">Column 3</div>
    </div>
</div>
```

## Row Columns
Use the responsive .row-cols-* classes to quickly set the number of columns that best render your content and layout. Whereas normal .col-* classes apply to the individual columns (e.g., .col-md-4), the row columns classes are set on the parent .row as a shortcut. With .row-cols-auto you can give the columns their natural width.

Use these row columns classes to quickly create basic grid layouts or to control your card layouts.

Example
```html
<div class="row row-cols-3">
    <div class="col text-primary">Column</div>
    <div class="col text-primary">Column</div>
    <div class="col text-primary">Column</div>
    <div class="col text-primary">Column</div>
    <div class="col text-primary">Column</div>
    <div class="col text-primary">Column</div>
</div>
```

## Nesting
```html
<div class="row">
    <div class="col-sm-3">Level 1: .col-sm-3</div>
    <div class="col-sm-9">
        <div class="row">
            <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
            <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
        </div>
    </div>
</div>
```