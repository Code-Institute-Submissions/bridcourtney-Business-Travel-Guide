<h1 align="center">Abbott Business Traveller Guide</h1>

[View the live project here.]( https://bridcourtney.github.io/Business-Travel-Guide/)

<h2 align="center"><img src="assets/images/responsive.JPG"></h2>

The Abbott Business Traveller Guide, will give Visitors access to information and map location to a pilot group of Abbott Sites from accross the Globe.  

Abbott Laboratories is an American multinational medical devices and health care company with headquarters in Abbott Park, Illinois, United States. The company was founded by Chicago physician Wallace Calvin Abbott in 1888.  Today, it sells medical devices, diagnostics, branded generic medicines and nutritional products.

Abbott has over 160 office locations across 77 countries.  Employing over 100,00 people around the world.

Business Travel frequency will depend on the employees position in the company.  It is highly probable that most employee will experience business travel as an Abbott Employee at some stage in their Abbott career e.g. when working on large projects across multiple sites, Training Courses etc.

The 'Abbott Business Traveller Guide' will be a valuable resource to all employees that will provide an information bank on Abbott Site & locations.  For example you are with the Company 2 years, your Manager informs you of an opportinity to join a project that will involve a visit to Brazil.  The Guide will provide you with site information as well as Hotels, Restaurants etc in the area  

The 'Contact Us' link will provide users an opportunity to provide feedback and suggestions.

# User Experience (UX)

-   ## Goals

    -   ### Visitor Goals

        The central target audience for Business Travel Guide is:
        - All Employees
        - All Contactors 
 
       User Goals are:
      - View the site I am visiting on a map
      - View the site amenities nearby

-   ## User stories

    -   #### Visitor Stories

        1. As Visitor, I want to easily find out more about the area I am visiting e.g what Hotels, Restaurants and Attractions are in the vicinity
        2. As Visitor, I want to be able to look for information from the Team managaging the Portal
        3. As Visitor, I can learn about Abbott sites around the Globe 
        
-   ## Design Choices

    -   #### Colour Scheme
        -   Color is fundamental in the way we express the Abbott brand. The color palette I used includes, Dark in the header & footer.  The vibrant images for           each Country Card blend well with the background image.

    -   #### Typography.
        -   The 'Trebuchet MS' font is the main font used throughout the whole website. The 'Trebuchet MS'gives the Site an unified appearance throughtout. 
        
    -   #### Imagery 
        -   I selected vibrant images for each Country Card that work well with the header image. 

-   ## Skeleton

    -   Index Page Wireframe - [View](Business-Travel-Guide_Lgr&Med_Devices.pdf)

    -   Mobile / small device Wireframe - [View](Business-Travel-Guide_SM_Devices.pdf)

# Features

-   ## Navbar

    The navigation bar features the Abbott logo in the top left corner also a link to the Contact Us page.

-   ## Country Cards

    Each Country featured has a card with a relevant picture for the country.  Each Country will have a dropdown containing the list of sites available.  
    Step 1, instructs the user to "Select Abbott Site from the Country dropdowns to view on map" -
    
    <h5 align="center"><img src="assets/images/step1.JPG"></h5>
   
    Once User selects the site they are visiting, the site information is displayed.  The site location is displayed on the map by the red marker.  
    The site location is set to the center of the map.
    
    <h2 align="center"><img src="assets/images/step1-result.JPG"></h2>
    
    STEP 2, the User can view details of the amenities in the vicinity of the site by selecting the Hotels, Restaurants & Attractions buttons. The map then             drops & displays green markers for all of the amenities returned in a table, with on-click details for each amenity.
    
     <h2 align="center"><img src="assets/images/step2.JPG"></h2>
    
    To close the Map & Amenities form, the User can click on the 'Close' Button or simply click outside of the modal form
    
    <h2 align="center"><img src="assets/images/close.JPG"></h2>

-   ## 'Contact Us' form
    
    The link to 'Contact Us' form is available in the top right corner of the main page.  User must provide name, email address and add a comment.  User will not       be allowed submit form until all fields are completed.  
    On successful completion user will see a message of success and once they click ok, the user will to redirected to Home Page. 
    
     <h2 align="center"><img src="assets/images/contact.JPG"></h2>
     
# Testing

-   ## Test Plan

    The application was tested end to end.  All requirement functionality was tested and objective evidence of each test script attached.  Please view the Executed     Test Protocol in link below - 

 -   Executed Test Protocol - [View](Testing/Executed-Test-Protocol.pdf)
 
 -   ## Compatibility and Responsiveness
 
     I used the Google Chrome's developer tools to see how it looks across all the different device screen sizes to ensure compatibility and responsiveness.
     I also used Am I Responsive online tool for checking responsiveness on different devices.
     
     On smaller devices the ameneties results table e.g Hotel or Restaurant listing nearby appears below the map, this is not ideal for usability and is flagged as     requirement for next release
   
-   ## Further Testing

-   During testing it was found the 'Geocoder failed due to: INVALID_REQUEST' error was appearing on startup, to fix this I added a default value to #latlng.
-   During testing users reported it was confusing that there was no response when Comment was submitted on Contact page, I fixed this by added a success and fail     Alert.  Also when Contact for successfully completed the User is redirected to the Main Page.
-   The Website was tested on Google Chrome, Internet Explorer & Microsoft Edge.  

-   ## Known Bugs
-   Sometimes the user needs to hit the refresh button to load the map in Chrome
-   Map does not load consistently in Internet Explorer, as the map feature is the focal requirement, I would not recommend application use in Explorer.

# Validators

## Html

All the HTML files were tested through W3C Markup Validation Service. I was able to correct all findings.

## CSS

CSS files were tested through W3C CSS Validation Service. I was able to correct all findings.

## JavaScript

Script files were tested through jshint Validation Service. I was able to correct all findings.

# Technology Used
 - GitPod - an online IDE for developing this project.
 - Git - for version control.
 - GitHub - for remotely storing project's code.
 - GIMP2 - for editing images.
 - Am I Responsive - for creation of the images in the readme file and checking responsiveness.
 
 ## Front-End
 - HTML - to build the foundation of the project.
 - CSS - to create custom styles.

 ## Languages Used
-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://www.javascript.com/)
-   [jQuery](https://jqueryui.com)

## Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
2. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Josefin Sans' font into the style.css file which is used on all pages throughout the project.
3. [jQuery:](https://jquery.com/)
    - jQuery used to hide Site information on page open, and then mouseover & mouseout to show/hide
4. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
5. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
6. [GIMP:](https://developer.gimp.org/)
    - GIMP was used resizing images and editing photos for the website.
7. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.
8. [Places API:](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#maps_places_autocomplete_hotelsearch-javascript)
    - Place Autocomplete Hotel Search Tutorial
9. Maps JavaScript API
10. [Geocoding API:](https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse#maps_geocoding_reverse-javascript)
    - Reverse Geocoding Tutorial
11. [unsplash:](https://unsplash.com/)
    - I used upsplash to find good quality images of countries and landmarks
12. [EmailJS:](https://www.emailjs.com/)
    - In the Contact Us page I used EmailJS to Send Email Directly From JavaScript 
     
## Branching
  I used branching in this project.  I found it very useful at stages when I was embarking on new functionaility and not sure how it was going to turn out, it was reassuring   to know I had a choice whether to merge with the master or not.


# Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

# Credits

## Code

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly     to make site responsive using the     Bootstrap Grid System.
-   The Navbar code was taken from https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp, and taylored to meet my requirements
-   Geocode API https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse#maps_geocoding_reverse-javascript)
-   Places API https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#maps_places_autocomplete_hotelsearch-javascript

## Acknowledgements

-   My Mentor Brian Macharia for very helpful feedback.

-   Tutor support at Code Institute for their support.
