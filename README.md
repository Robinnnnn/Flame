# Magic Wand

A device that displays a 3D model of the user’s path via Tessel 2, Three.js and Express.js. 

The user has 10 seconds to “create a path” by waving the device around and moving across the room, as long as they are within the reach of WiFi. The user can then view and interact with a 3D model of their path.

# Approach

### Data Transmission
Tessel’s accelerometer outputs data as a series of arrays representing the hardware’s acceleration at each axis (X, Y and Z):

<img src="http://i.imgur.com/hDDFxnU.png">

The initial goal was to stream the data in real-time, but the Tessel’s limited processor could not handle sending multiple requests per second and caused significant lag. In fear of overheating the device, we decided to save the data for 10 seconds before sending it as a bundled, multi-dimensional array. 

After our server received the data, the front-end sent an AJAX get request to render it into a 3D animation.

### Animation
Three.js allows you to implement a mathematical spline curve, which we used to connect and smooth accelerometer data into a visually striking structure. We also utilized orbital controls for the user to interact with their result using rotations and zooming.
