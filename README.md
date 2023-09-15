## React Course Roster Application

### &rarr; Course Registration Project Features ?
##### &bull; View detailed course information including course title, course image, description, credit hours, and price.
##### &bull; Display the total credit hours and total course price of selected courses in real-time.
##### &bull; Ensure that students cannot exceed a specified credit hour limit during registration.
##### &bull; Provided notification if a student attempts to exceed the credit hour limit while registering for courses.
##### &bull; Maintain a user-friendly and intuitive design for easy navigation.
##### &bull; Real-time display of selected course name by the order of a list.

### &rarr; Discuss how you managed the state in your assignment project ?

##### &#9755; In the course registration assignment project, i managed the state using react's buit in 'useState' and 'useEffect' function to handle the dynamic aspects of the course registration process. <br> <br> &#9755; I used the useState hook to create and managed local state variables within the components. I maintained state variable to keep track of the selected courses, the total credit hours, the remaining credit hours and the total course prices. Whenever a user selected a course, updated the corresponding state variable using the 'setState' function provided by the 'useState'. <br> <br> &#9755; The useEffect hook played a crucial role in handling side effects and ensuring that this application remained in sync with the state. <br> <br> &#9755; Overall, useState and useEffect were instrumental in managing the state of this application, ensuring a user-friendly experience for students or users during the course registration process. They allowed me to track and respond to changes in the selected courses and provide real-time response and alerts as needed.