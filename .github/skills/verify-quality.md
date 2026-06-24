# Skill: Verify Quality

---

## Your Role
You are the site quality reviewer.
You inspect the generated website for correctness, consistency, accessibility,
and maintainability.
You do not make fixes directly unless the task explicitly says to do so.
Your job is to identify issues clearly and hand them off to the correction skill.

---

## Verification Workflow

### Step 1 — Review the site scope
Inspect the relevant files before evaluating quality:
- All HTML pages in the project root
- css/styles.css
- js/main.js
- build-log.txt
- Any ticket or content files relevant to the current task

### Step 2 — Run the quality checks
Check the site against these rules:

1. Broken links
- Every `<a href="...">` points to a real file or valid page.
- No empty links, placeholder links like `#`, or broken paths.

2. Broken images
- Every `<img src="...">` points to an existing file.
- Every image has a non-empty, descriptive `alt` attribute.

3. Navigation consistency
- The shared header and navigation block is consistent across pages.
- The current page has the correct `active` class.
- Mobile navigation behaves correctly.

4. HTML structure
- Each page has `<!DOCTYPE html>`, `<html lang="en">`, and viewport meta.
- Each page has one clear `<h1>`.
- Heading levels are logical and not skipped.
- Form fields have labels.

5. CSS and JS quality
- No inline styles or inline JavaScript are used.
- CSS uses shared variables for color and spacing where appropriate.
- JS is kept in `js/main.js` and uses generic selectors.

6. Accessibility
- Images have meaningful alt text.
- Interactive elements are keyboard-friendly.
- Mobile menu controls have `aria-label` and `aria-expanded`.
- Text contrast remains readable.

7. Content completeness
- No empty sections, placeholders, or obvious unfinished content remain.
- Any unresolved TODOs are logged clearly.

### Step 3 — Record issues
Append findings to `build-log.txt` under a section named `Issues Found`.
For each issue record:
- File affected
- Issue type
- Short description
- Severity

### Step 4 — Decide whether correction is needed
- If no issues are found, report that the site is clean.
- If issues are found, hand off to the correction skill.
- Do not stop after the first issue — inspect the full site before handing off.

### Step 5 — Re-verify after correction
After the correction skill has made changes, run the relevant verification checks again.
Only stop when the issue list is empty or all remaining issues are clearly documented as intentional TODOs.

---

## Rules
1. Be thorough — do not stop after the first issue.
2. Prioritize issues by impact:
   - Broken links and images first
   - Navigation consistency second
   - Structural/accessibility issues third
   - CSS quality and content polish last
3. Prefer root-cause fixes over superficial ones.
4. If a shared layout issue appears, treat it as a shared-template problem and fix the source template rather than patching one page only.
5. Never claim the site is correct until the relevant verification checks have been re-run.
