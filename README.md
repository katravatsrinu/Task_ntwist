# NTWIST Frontend Assignment

This project is a multi-page mini web application created using HTML, CSS, and Vanilla JavaScript as part of the NTWIST frontend developer assessment.

## Pages Implemented

### 1. Responsive Form with Validation (index.html)
- Form fields: Name, Email, Message
- HTML5 validations implemented (required, type, pattern)
- Tracks and displays time spent filling the form (from first focus to submit)
- Shows confirmation message on successful submission and clears form
- Includes a star rating widget as a bonus feature

### 2. Sortable List Viewer (sort.html)
- Displays a hardcoded list of names in an unordered list
- Includes a button to sort the list alphabetically
- Uses JavaScript for sorting without page reload
- Includes an additional reset button to restore original order
- Visual feedback during sorting with animations

### 3. FAQ Accordion (faq.html)
- Created using only HTML/CSS without JavaScript
- Implements two different accordion approaches:
  - Using HTML5 `<details>` and `<summary>` elements
  - Using CSS-only approach with hidden checkboxes and labels

## Features Added

- **Responsive Design**: All pages are mobile responsive with a layout that adapts to different screen sizes
- **Fixed-width Sidebar**: Implemented on Form and Sort pages with scrollable main content
- **CSS Transitions**: Added smooth transitions for hover states and interactions
- **Form Timer**: Tracks time spent filling out the form
- **Star Rating Widget**: Added custom star rating component using only HTML, CSS, and JS
- **Visual Feedback**: Animations for sorting and form submission
- **Navigation**: Consistent navigation between pages
- **Modern Layout**: Used CSS Grid and Flexbox for layout
- **No Layout Shift**: Designed to avoid layout shift on hover/focus

## How to Run Locally

1. Clone the repository:
```
git clone https://github.com/your-username/ntwist-frontend-assignment.git
```

2. Navigate to the project directory:
```
cd ntwist-frontend-assignment
```

3. Open `index.html` in your browser to view the form page.

No build process or dependencies are required as this project uses only vanilla HTML, CSS, and JavaScript.

## Browser Compatibility

This project has been tested and works well on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technical Specifications

- **HTML**: Semantic HTML5
- **CSS**: Modern CSS including Flexbox and Grid for layouts
- **JavaScript**: Vanilla JavaScript with no external libraries
- **Responsive Design**: Mobile-first approach with media queries
