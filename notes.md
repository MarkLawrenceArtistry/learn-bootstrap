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


# Columns
Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements.

## Vertical Alignment
Change the vertical alignment with any of the responsive align-items-* classes.

`align-items-start`
`align-items-center`
`align-items-end`
`align-self-start`
`align-self-center`
`align-self-end`
`justify-content-start`
`justify-content-center`
`justify-content-end`
`justify-content-around`
`justify-content-between`
`justify-content-evenly`

## Column Breaks
```html
<!-- Force next columns to break to new line -->
<div class="w-100"></div>

<!-- Force next columns to break to new line at md breakpoint and up -->
<div class="w-100 d-none d-md-block"></div>
```

## Orders
Use .order- classes for controlling the visual order of your content. These classes are responsive, so you can set the order by breakpoint (e.g., .order-1.order-md-2). Includes support for 1 through 5 across all six grid tiers.

There are also responsive .order-first and .order-last classes that change the order of an element by applying order: -1 and order: 6, respectively. These classes can also be intermixed with the numbered .order-* classes as needed.
```html
<div class="row">
    <div class="col">
        First in DOM, no order applied
    </div>
    <div class="col order-5">
        Second in DOM, with a larger order
    </div>
    <div class="col order-1">
        Third in DOM, with an order of 1
    </div>
    <div class="col order-last">
      First in DOM, ordered last
    </div>
    <div class="col order-first">
      Third in DOM, ordered first
    </div>
</div>
```

## Offset
You can offset grid columns in two ways: our responsive .offset- grid classes and our margin utilities. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.
```html
<div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>
```


# Gutters
Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.

Gutters are the gaps between column content, created by horizontal padding. We set padding-right and padding-left on each column, and use negative margin to offset that at the start and end of each row to align content.

Gutters start at 1.5rem (24px) wide. This allows us to match our grid to the padding and margin spacers scale.

Gutters can be responsively adjusted. Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters.

## Horizontal Gutters
`.gx-*` classes can be used to control the horizontal gutter widths. The .container or .container-fluid parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example we’ve increased the padding with .px-4:

```html
<div class="container px-4 text-center">
    <div class="row gx-5">
        <div class="col">
            <div class="p-3">Custom column padding</div>
        </div>
        <div class="col">
            <div class="p-3">Custom column padding</div>
        </div>
    </div>
</div>

<!-- Or An alternative solution is to add a wrapper around the .row with the .overflow-hidden class -->
<div class="container overflow-hidden text-center">
    <div class="row gx-5">
        <div class="col">
            <div class="p-3">Custom column padding</div>
        </div>
        <div class="col">
            div class="p-3">Custom column padding</div>
        </div>
    </div>
</div>
```


## Vertical Gutters
`.gy-*` classes can be used to control the vertical gutter widths within a row when columns wrap to new lines. Like the horizontal gutters, the vertical gutters can cause some overflow below the .row at the end of a page. If this occurs, you add a wrapper around .row with the .overflow-hidden class:

```html
<div class="container overflow-hidden text-center">
    <div class="row gy-5">
        <div class="col-6">
            <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3">Custom column padding</div>
        </div>
    </div>
</div>
```

## Horizontal & vertical gutters
Use `.g-*` classes to control the horizontal and vertical grid gutters. In the example below, we use a smaller gutter width, so there isn’t a need for the .overflow-hidden wrapper class.

```html
<div class="container text-center">
    <div class="row g-2">
        <div class="col-6">
            <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3">Custom column padding</div>
        </div>
    </div>
</div>
```

## Row Columns Gutters
Gutter classes can also be added to row columns. In the following example, we use responsive row columns and responsive gutter classes.

```html
<div class="container text-center">
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
        <div class="col">
            <div class="p-3">Row column</div>
        </div>
    </div>
</div>
```

## No Gutters
The gutters between columns in our predefined grid classes can be removed with .g-0. This removes the negative margins from .row and the horizontal padding from all immediate children columns.

Need an edge-to-edge design? Drop the parent .container or .container-fluid and add .mx-0 to the .row to prevent overflow.

In practice, here’s how it looks. Note that you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

```html
<div class="row g-0 text-center">
    <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
```


# Spacing
Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.

## Notation
The classes are named using the format `{property}{sides}-{size}` for xs and `{property}{sides}-{breakpoint}-{size}` for sm, md, lg, xl, and xxl.

Where property is one of:
`m` - for classes that set margin
`p` - for classes that set padding

Where sides is one of:
`t` - for classes that set margin-top or padding-top
`b` - for classes that set margin-bottom or padding-bottom
`s` - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL
`e` - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL
`x` - for classes that set both *-left and *-right
`y` - for classes that set both *-top and *-bottom
`blank` - for classes that set a margin or padding on all 4 sides of the element

Where size is one of:
`0` - for classes that eliminate the margin or padding by setting it to 0
`1` - (by default) for classes that set the margin or padding to $spacer * .25
`2` - (by default) for classes that set the margin or padding to $spacer * .5
`3` - (by default) for classes that set the margin or padding to $spacer
`4` - (by default) for classes that set the margin or padding to $spacer * 1.5
`5` - (by default) for classes that set the margin or padding to $spacer * 3
`auto` - for classes that set the margin to auto



# Form

## Layout
Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.

```html
<form>
    <div class="mb-3">
        <h1 class="text-black fw-bold">Create your account</h1>
    </div>
    <div class="mb-3">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" placeholder="Type your usename here..." required>
    </div>
    <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" placeholder="Type your password here..." required>
        <div class="form-text">Passwords must be 8 characters long.</div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <label class="form-label">First Name</label>
            <input type="text" class="form-control" placeholder="Type your first name here..." required>
        </div>

        <div class="col">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-control" placeholder="Type your last name here..." required>
        </div>
    </div>
    <div class="mb-3">
        <label class="form-label">Gender</label>
        <select class="form-select">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>
    <div class="mb-3">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="mature">
            <label class="form-check-label" for="mature">18 Above</label>
        </div>
    </div>
    <div class="mb-3">
        <button class="btn btn-primary w-100">Submit</button>
    </div>
</form>
```



# Navigation Bar
Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

## How It Works
- Navbars require a wrapping .navbar with .navbar-expand{-sm|-md|-lg|-xl|-xxl} for responsive collapsing and color scheme classes.
- Navbars and their contents are fluid by default. Change the container to limit their horizontal width in different ways.
- Use our spacing and flex utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Ensure accessibility by using a <nav> element or, if using a more generic element such as a <div>, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
- Indicate the current item by using aria-current="page" for the current page or aria-current="true" for the current item in a set.
- New in v5.2.0: Navbars can be themed with CSS variables that are scoped to the .navbar base class. .navbar-light has been deprecated and .navbar-dark has been rewritten to override CSS variables instead of adding additional styles.

## Content
- `.navbar-brand` for your company, product, or project name.
- `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.navbar-toggler` for use with our collapse plugin and other navigation toggling behaviors.
- Flex and spacing utilities for any form controls and actions.
- `.navbar-text` for adding vertically centered strings of text.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.
- Add an optional `.navbar-nav-scroll` to set a max-height and scroll expanded navbar content.



# Cards
Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.

## Content Types
1. Body
```html
<div class="card">
    <div class="card-body">
        This is some text within a card body.
    </div>
</div>
```
2. Titles, text, and links 
Card titles are used by adding .card-title to a <h*> tag. In the same way, links are added and placed next to each other by adding .card-link to an <a> tag.

Subtitles are used by adding a .card-subtitle to a <h*> tag. If the .card-title and the .card-subtitle items are placed in a .card-body item, the card title and subtitle are aligned nicely.
```html
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>
```


# Buttons

```html
<<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

## Outlined
```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
```

# Tables
```html
<div class="col">
    <table class="table table-hover caption-top">
        <caption>List of data</caption>
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr class="table-danger">
                <th scope="row">1</th>
                <td scope="col">John</td>
                <td scope="col">Doe</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td scope="col">Allonah</td>
                <td scope="col">Laurente</td>
            </tr>
        </tbody>
    </table>
</div>

<hr>

<div class="col">
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td scope="col">John</td>
                <td scope="col">Doe</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td scope="col">Allonah</td>
                <td scope="col">Laurente</td>
            </tr>
        </tbody>
    </table>
</div>

<hr>

<div class="col">
    <table class="table table-success table-striped">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td scope="col">John</td>
                <td scope="col">Doe</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td scope="col">Allonah</td>
                <td scope="col">Laurente</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td scope="col">Might</td>
                <td scope="col">Guy</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td scope="col">Madara</td>
                <td scope="col">Uchiha</td>
            </tr>
            
        </tbody>
    </table>
</div>

<div class="col table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th>DATA</th>
                <th>DATA</th>
                <th>DATA</th>
                <th>DATA</th>
                <th>DATA</th>
                <th>DATA</th>
                <th>DATA</th>
                <th>DATA</th>
                <th>DATA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>DATA</td>
                <td>DATA</td>
                <td>DATA</td>
                <td>DATA</td>
                <td>DATA</td>
                <td>DATA</td>
                <td>DATA</td>
                <td>DATA</td>
                <td>DATA</td>
            </tr>
        </tbody>
    </table>
</div>
```

# Alerts
Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

```html
<div class="container p-5">
    <div id="liveAlertPlaceholder"></div>
    <button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
<script>
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert('Nice, you triggered this alert message!', 'success')
        })
    }
</script>

```

# Modals
Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.

Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed.
- Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the <body> so that modal content scrolls instead.
- Clicking on the modal “backdrop” will automatically close the modal.
- Bootstrap only supports one modal window at a time. Nested modals aren’t supported as we believe them to be poor user experiences.
- Modals use position: fixed, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a .modal within another fixed element.
- Once again, due to position: fixed, there are some caveats with using modals on mobile devices. See our browser support docs for details.
- Due to how HTML5 defines its semantics, the autofocus HTML attribute has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:
```js
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})
```