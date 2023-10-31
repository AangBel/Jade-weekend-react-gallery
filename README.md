# Project Name
<img width="1492" alt="Gallery" src="https://github.com/AangBel/Jade-weekend-react-gallery/assets/119378254/6772f2d2-36ac-4b39-bd96-fdf992604963">
<img width="1492" alt="Clicked description" src="https://github.com/AangBel/Jade-weekend-react-gallery/assets/119378254/62e7ca4f-ad59-451b-a983-4150293963a2">

---

**Title: React - Gallery of My Life**

**Description:**
The "React - Gallery of My Life" project is a dynamic web application that serves as a personal gallery to showcase and share pictures of the moments and memories that matter most. This project not only provides an opportunity to create a personalized digital gallery but also offers hands-on experience with React, Axios, and server-side interaction, making it an excellent platform for learning and practice.

**Setup:**
Before diving into the project, you'll need to set up your environment and image data:
- No database component in the base mode, data is stored in an array on the server.
- Add images to the `public/images` folder and update `server/modules/data.js` with unique identifiers (`id`), titles, descriptions, and paths for each image.
- Running the server code requires `nodemon`, so make sure to install it globally using `npm install nodemon --global`.
- Run the server and client in separate terminal tabs to get started.

**Base Mode:**
For the base mode of this project, you will create a gallery page where visitors can explore your favorite images, view their descriptions, and interact by liking images. You will build this gallery using multiple React components, including:
- `App`: Represents the overall application.
- `GalleryList`: Represents the gallery of images, designed to be reusable in different applications.
- `GalleryItem`: Represents an individual image in the gallery, allowing users to toggle between the image and description and like images.

**Wireframes:**
The wireframes for the gallery layout can be found in the project materials.

**Task List:**
- Utilize `axios` to retrieve data from `/gallery` and store it in `App.jsx`.
- Create a new **component** for the `GalleryList` and pass gallery data from `App` via `props`. This component will loop over the gallery data and create `GalleryItems`.
- Develop a new **component**, `GalleryItem.jsx`, and pass individual gallery items via `props`. Update the `GalleryList` to use this component to display images.
- Implement a click functionality to swap between the image and description, using [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
- Display the number of likes for each item and include a like button. When clicked, use `Axios` to update (`PUT`) the like count for `/gallery/like/:id`.
- Ensure that the gallery updates each time a like button is clicked.


