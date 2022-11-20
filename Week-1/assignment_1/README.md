Browser

a. What is the main functionality of the browser?What is the main functionality of the browser?

Browser is a software that allows users to navigate world wide web [Internet], it allows users to access web pages and browse through connected web pages.

It allows users to upload/download/browse content from websites.
It parses HTML/CSS code into webpages by rendering them into dom model.
It allows users to communicate with other people on internet.



b. High Level Components of a browser

1. User Interface - help user to interact with all visual components in web page
2. Browser Engine - acts like bridge between user and rendering engine, handles queires received from user and rendering engine
3. Rendering Engine - helps rendering web pages on browser, it interprets html, css, images and show on web page with proper layout 
4. Networking - responsible for managing networking calls using protocols like http, https, etc. Also, handles security issues as part of netwrok calls.
5. UI Backend  -  This is used for drawing basic widgets and combo boxes . This backend exposes a generic interface that is not platform specific.  # Need to underand this more clearly.
6. JavaScript Interpreter - This is responsible for parsing and interpreting javascript code
7. Data Storage - This is persistance data storage layer for browser to keep data in the form of cookies and cache



c. Rendering engine and its use

Rendering engine is responsible to render the html, css and image components on web page. This is done in 4 steps:
1. It parses the html to make content tree or DOM tree
2. construct render tree
3. layout of the render tree - in this process, the position and size of the values are created. Every DOM node is assigned cordinate/position.
This ensures that every node is rendered in its assigned coordinates on screen.
4. Final step is to paint the whole screen with the layput picture. 



d. Parsers (HTML, CSS, etc)

Rendering engine parses html, css etc into chunks and then they are converted into  nodes in DOM/Content tree



e. Script Processors

Script processors executes Javascript code to process events. The processore uses GO implementation
of ECMAScript 5.1 and has no external dependencies.





f. Tree construction

Rendering engine build the DOM tree after parsing of the htm/css is completed. Render tree included both the styling information as well as the visual instructions that define the order in which it gets displayed on the screen.





g. Order of script processing

HTML document is processed from top to bottom, so if any script tag is kept inside the body tag, it will process it then move ahead. This can create issue in loading of the site as script tag might contain complex logic which takes time, so for better user experience, 
script tags are kept at the end of the bdoy tag. And if there are multiple script tags, it will call those files from server therby increasing overall network calls and hence latency, this could be handled better by calling all script files in one network call, to avoid unnecessary network calls.

h. Layout and Painting

When DOM tree is conmstructed by redering engine, layout is done, i.e. each node of the DOM tree is given proper coordinates/values according to which it is shown in the screen. Painting is showing those  nodes at their assigned coordingated on the screen.

