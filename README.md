# menuEditorFE

Hi ShareBite! Here is the repo for the assessment.
## Getting Started

(1) Fork the repo and clone it down to your computer.

(2) Open it in VS Code (or whatever IDE you use) like you normally would.

(3) In your terminal, from the root directory, run

```
npm install
```

(4) then run 
```
npm build-dev
```
(NOTE: this is intended to be a development build)

(5) then run this to start your server
```
npm run start
```
(6) Once done, type
```
localhost:3000
```
into your browser and hit ENTER to run the webpage locally.

#
## FINAL THOUGHTS
I know the CSS is a bit basic, but the logic is present. 

I spent a bit more time than I think I'd like to admit, but keeping to MVP and time constraints, I'll submit it as is.

The sample JSON object given in the insturctions is missing a comma and has some minor inconsistencies. I made some workarounds that are purely front end focused, but I think I would deal with them on the backend to make it better.

I feel like a better overall solution requires a full stack overhaul. I have very basic experience with GraphQL, however I think with a dataset like this it would be able to use it very well. Even without graphQL, API endpoints cound be used to query Selections individually to potentially speed up rendering on the frontend. Since I used a sample object, I feel like it is a good idea to point this out.

I adjusted the functionality for one of the bullets to show the information one column at a time:

```
When a card is selected, the information in the menu viewer should show all information that is lower in the object hierarchy than the selected card.
ie. Selecting a menu section card should show its section items in the "Section Items" column. Selecting a section item should show its item options in the "Item Options" column. Selecting an item option should show its item option choices in the "Item Option Choices" column.
```
It makes more logical sense to be able to make your selections as you go through the flow instead of showing them all at once.