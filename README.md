** Project Overview: Travel Dashboard
This project is a Travel Dashboard application built using ReactJS, structured with reusable components and clean page management.

##Project Structure
  • public/: Static files like index.html.

  • src/: All the main source code.

  • assets/images/: Image files used in the app.

  • components/: Reusable UI components.

  • Accommodation/: Components related to stay details.

  • Activities/: Components related to activities users can do.

  • BottomNav/: Bottom navigation bar component.
 
  • Button/: Custom button component.

• FlightDetails/: Component showing flight information (with .jsx and .scss for styling).

• InputField/: Custom input field component.

• TripCard/: Cards showing trip information.

• pages/: Different screens of the app (e.g., Dashboard, Onboarding).

• styles/: General CSS styling.

• App.jsx: Main React app file.

• App.css, index.css: App-wide styling files.

• index.js: Entry point to render the app.

• main.jsx: Additional setup or app rendering.

  ##Component Hierarchy

 App
 ├── BottomNav
 ├── Pages
 │     ├── Dashboard
 │     └── Onboarding
 │
 ├── Components
 │     ├── Accommodation
 │     ├── Activities
 │     ├── TripCard
 │     ├── FlightDetails
 │     ├── InputField
 │     └── Button
 │
 └── Styles
       ├── App.css
       └── index.css
       
##Challenges Faced

— Folder Structure Planning:
• Organizing components into clear folders like Accommodation/, Activities/, and FlightDetails/ took extra planning but helped keep the project clean.

— Component Reusability:
• Creating highly reusable components like Button and InputField was tricky at first, especially managing props and consistent styling.

— Styling Conflicts:
• Using separate SCSS files (e.g., FlightDetails.scss) helped avoid global style conflicts but required careful import management.

— Main Entry Points:
• Having both index.js and main.jsx needed careful management to avoid duplication or confusion during app rendering.

— Testing Setup:
• setupTests.js was prepared for running component tests with tools like Jest, but setting up meaningful test cases was challenging for more dynamic or stateful components.


