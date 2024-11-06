# SCSS Stylesheets

This directory houses the cascading style sheets (SCSS), following the Atomic Design methodology:<br>
https://bradfrost.com/blog/post/atomic-web-design/

## Organization

The SCSS files are arranged into five distinct categories:

* **Atoms:** Foundational building blocks (e.g., colors, typography, spacing).
* **Molecules:** Simple combinations of atoms (e.g., buttons, form labels).
* **Organisms:** Relatively complex UI components (e.g., headers, navigation menus).
* **Templates:** Page-level layouts defining the structure and placement of organisms.
* **Pages:** Concrete instances of templates populated with real content.

And a few other files right here:

* **Main.scss:** This is the main entry point, import your newly files here.
* **Variables.scss:**  Holds all the variables used (colors, spacers etc.) accross all classes. Adjust/add your values used in other files.
* **Mixsins.scss:**  Mixins for creating grids (and other stuff) with less code and by using variables
* **Fonts.scss:**  Font-faces

## Usage

Import the necessary SCSS files into your main stylesheet to apply the styles. Please ensure that your build process compiles the SCSS into CSS for browser compatibility.