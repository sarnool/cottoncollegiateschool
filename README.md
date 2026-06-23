# Cotton Collegiate Alumni Association Website

## Project Structure

This website has been refactored from a single-page application to a multi-page, modular architecture with complete separation of concerns.

### Directory Structure

```
cottoncollegiateschool/
├── index.html                  # Homepage
├── about.html                  # About Us page
├── contact.html                # Contact Us page with form
├── assets/
│   ├── css/
│   │   └── styles.css         # All CSS styles (separated from HTML)
│   └── js/
│       └── main.js            # All JavaScript functionality (separated from HTML)
└── pages/
    ├── vision-mission.html    # Vision & Mission
    ├── objectives.html        # Objectives & Activities
    ├── odaa.html              # Office of Development & Alumni Affairs
    ├── activities.html        # Main Activities page
    ├── events-calendar.html   # Calendar of Events
    ├── events-committee.html  # Events/Programs Committee
    ├── affiliates.html        # Affiliates & Partners
    ├── alumni-achievers.html  # Main Alumni Achievers page
    ├── limelight.html         # Alumni in Lime Light
    ├── notable-alumni.html    # Notable Alumni
    ├── directory.html         # Alumni Directory
    ├── get-involved.html      # Get Involved main page
    ├── membership.html        # Membership Benefits
    ├── giving.html            # Giving & Donations
    ├── student-services.html  # Student Services main page
    ├── performers.html        # Top Performers
    └── counseling.html        # Student Counseling Cell
```

## Key Changes Made

### 1. **HTML Separation**
   - **Before:** Single `index.html` file with all content sections hidden/shown via JavaScript
   - **After:** 18 individual HTML files, each representing a distinct page/section
   - Navigation now uses traditional page links instead of JavaScript hash-based routing

### 2. **CSS Separation**
   - **Before:** Embedded `<style>` tag in HTML (500+ lines)
   - **After:** External stylesheet at `assets/css/styles.css`
   - All pages link to this single CSS file for consistent styling
   - Easy to maintain and update styles globally

### 3. **JavaScript Separation**
   - **Before:** Inline `<script>` tag with `showSection()` function
   - **After:** External script at `assets/js/main.js`
   - Clean, reusable JavaScript functions for common functionality
   - Smooth navigation and navigation menu management

### 4. **Navigation Structure**
   - Modern multi-level dropdown navigation
   - Proper href linking between pages
   - Consistent navigation across all pages
   - Responsive design maintained

## File Organization

### Root Level Pages
- `index.html` - Homepage with welcome and quick links
- `about.html` - About Us overview page
- `contact.html` - Contact form page

### Pages Directory
Contains all section-specific pages organized logically:
- **About Section:** `vision-mission.html`, `objectives.html`, `odaa.html`
- **Activities Section:** `activities.html`, `events-calendar.html`, `events-committee.html`, `affiliates.html`
- **Alumni Section:** `alumni-achievers.html`, `limelight.html`, `notable-alumni.html`, `directory.html`
- **Get Involved Section:** `get-involved.html`, `membership.html`, `giving.html`
- **Student Services:** `student-services.html`, `performers.html`, `counseling.html`

### Assets
- **CSS:** `assets/css/styles.css` - Complete stylesheet with all color variables, layouts, and responsive design
- **JavaScript:** `assets/js/main.js` - Navigation handling, page interactions, and utility functions

## Usage

### For Users
- Simply click on navigation menu items to browse different sections
- All pages maintain consistent styling and layout
- Mobile-responsive design works across all devices
- Contact form uses Formspree (update the form ID in `contact.html`)

### For Developers

#### Adding a New Page
1. Create a new HTML file in the appropriate directory
2. Copy the header, nav, hero, container, and footer from any existing page
3. Update the page title and content
4. Ensure all navigation links are properly updated

#### Updating Styles
- Edit `assets/css/styles.css` directly
- All pages automatically use the updated styles
- CSS variables (--primary-color, --secondary-color, etc.) can be modified in `:root`

#### Adding JavaScript Functionality
- Add functions to `assets/js/main.js`
- Include the script tag: `<script src="../assets/js/main.js"></script>` (adjust path based on location)
- For pages in `pages/` folder, use: `<script src="../assets/js/main.js"></script>`
- For root level pages, use: `<script src="assets/js/main.js"></script>`

## Navigation Links

All pages are properly linked with:
- **Root level:** Use `index.html`, `about.html`, `contact.html` or `pages/filename.html`
- **From pages folder:** Use `../index.html`, `../about.html`, or `../contact.html` for root pages, and `filename.html` for sibling pages

## Benefits of This Structure

1. **Maintainability:** Changes to one section don't affect others
2. **Performance:** Each page loads only what's needed
3. **SEO:** Proper page structure and individual page titles
4. **Scalability:** Easy to add new pages without bloating existing files
5. **Separation of Concerns:** HTML, CSS, and JavaScript are completely separated
6. **Code Reusability:** Common styles and scripts are shared across all pages
7. **Team Collaboration:** Multiple developers can work on different pages simultaneously

## Migration Notes

The original single-page application functionality has been completely replaced with a traditional multi-page structure. The JavaScript that previously showed/hid sections has been removed, and all navigation is now done through standard HTML links.

## Future Enhancements

Consider implementing:
- Database backend for dynamic content
- Search functionality across alumni directory
- Advanced form handling with backend
- Blog/news section for updates
- Member login portal
- Analytics tracking
