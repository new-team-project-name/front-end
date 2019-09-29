# SEI 04 HangOuts

### Links for SEI 04 Full Stack Project

#### Front-end
* https://new-team-project-name.github.io/front-end/
* https://github.com/new-team-project-name/front-end

#### Back-end
* https://sei-04-hangouts.herokuapp.com/
* https://github.com/new-team-project-name/backend

## Front-end Technologies Used
* HTML5
* JavaScript
* CSS
* SASS
* Bootstrap
* Handlebars
* AJAX
* jQuery

## Back-end Technologies Used
* Express
* Mongoose
* MongoDB
* JavaScript

# Planning:
### Back-end Repository
* Entity Relationship Diagram: https://drive.google.com/file/d/1xMWPn0lqkRRFwocyPiOQSORsKJ5P5BaE/view

### Front-end Repository
## Wireframes
* Unregistered: https://drive.google.com/file/d/12lvoUPp0QOly8RMco8TTG74vPFPP-8kw/view
* Registered: https://drive.google.com/file/d/1OxAk6s2ejlbY49SGihXrv0ndfnOHrLeh/view?usp=sharing
* Stretch Goals: https://drive.google.com/file/d/1Ks5cKApPRpqZ8zCpXyLdDxQzitSekS-m/view?usp=sharing

Team gathered together to share idea concerning the theme of the hangouts page. Once the GA SEI 04 cohort theme was decided, the back-end lead proposed a schema for the "hangout resource." Front-end lead drew up wireframes for the project and the group noted stretch goals that were desired.

### User Stories:
* As an unregistered user, I would like to sign up with email and password.
* As an unregistered user, I would like to see all events.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to RSVP to an event.
* As a signed in user, I would like to create my own event.
* As a signed in user, I would like to update my own events.
* As a signed in user, I would like to delete my own events.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.

# Development Process and Problem Solving
* Wireframes, the relationship model, and project goals were discussed and agreed upon as a team at the start of the project.
* Roles and codebase ownership were agreed upon early in the process, along with how design conflicts would be handled.
* Stand ups were held to review task assignments.
* Each day started with a planning session and ended with a brief retro.
* Pair programming was utilized to build the backend api using Express and MongoDB.
* Pair programming was used to create the more complex logic on the front-end.
* Less complex items were broken down into tickets, which were assigned during planning and as needed.
* Merge conflicts and complex PRs were reviewed as a team.

### Difficulties Faced
* Managing different developer standards.
* Managing different stretch goals and priorities between developers.
* Multiple people working on the same file at the same time.
* Several merge conflicts.
* Challenges with the logic for checking attendance (for attendees list).
* Data formatting forced by Mongoose based on data type.
* A local host server not cooperating with WSL.
* Logic to populate the correct buttons based on user authentication and resource ownership.

## Goals for Future Versions and Unsolved Issues
### Goals
* Sort by event date.
* Picture for each event.
* Confirmation required in order to delete an event.
* Comment capability.
* User profiles including a profile picture.
* List of individuals who have marked "not going".
* Conversion of app into template that future cohorts can download, modify, and host with their own information.

### Unsolved Issues
* Time of event should be a required form field and displayed for all events.
* Sing Up/ Sign In input form is not large enough to see full email address or the form field placeholders.
* New event input is not realistic for entering actual descriptions.
* Date format is not set for user's ease.
* Popover window formatting and styling.
* When attendees list is empty, the popover is an empty black oval.
* Transitions and breakpoints on mobile.
* The fixed "header" needs fine tuning.
* RSVP button still present after RSVPing/ does not provide dual functionality with the ability to un-rsvp.
