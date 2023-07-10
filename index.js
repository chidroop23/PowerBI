const images = [
    {
        title:"Creating a Power BI Dashboard",
        path: "/assets/Before removing col.png",
        desc: "The image above shows the raw dataset. The Dataset is a survey used to depict the type of job title and their work culture around the world. It provides insight on data professionals survey and their interests."
    },
    {
        path: "/assets/Shift + select col & hit remove cols.png",
        desc: "Cleaning the raw dataset in PowerBI. We can clearly see the highlighted columns are empty and hence will be removed. To remove columns we select the remove columns option as marked by the black arrow in the image and press 'shift' + select the columns to remove."
    },
    {
        path: "/assets/other col 1.png",
        desc: "In the image above we can see the highlighted column has many listings under 'Other'. We will merge all the various listings under 'Other' into a single 'Other'. "
    },
    {
        path: "assets/split by Delimeter.png",
        desc: "We select 'Split Column' option as shown in the screenshot above and then select 'By Delimeter' "
    },
    {
        path: "assets/split by open bracket .png",
        desc: "We select 'Custom' option and enter '(' in the empyt box below. Since the listing 'Other' is followed by an open bracket, we will enter '(' to merge all the listings of 'other' into a single 'other'. "
    },
    {
        path: "/assets/post splitting (OTHER).png",
        desc: "The above image shows the column after  merging  all the listings under 'other' into a single 'other'"  
    },

    {
        path: "/assets/duplicate salary col to filter.png",
        desc: "In the above image we can see 'Salary' column has a variable range of salary for different people. We will try and normalize it. So we create a duplicate column of the same " 

    },

    {
        path: "/assets/split by digit and non num.png",
        desc: "In this image we select 'Split Column' option and select 'By Digit to Non-Digit' as shown above to split and merge the 'salary' Column" 
    },

    {
        path: "/assets/post splitting by digit. of salary 1.png",
        desc: "We can see how the  copy of the 'Current Yearly Salary' has changed in the above image" 
    },

    {
        path: "/assets/Replace symbols 2.png",
        desc: "We can see the column consists of symbols and letters prior to the number hence to replace them we will, Right click and then select 'Replace Values'. " 
    },

    {
        path: "/assets/post replacing symbols 3.png",
        desc: "We can see the column does not consists of any symbols or characters post replacing specific values with empty space. " 
    },
    
    {
        path: "/assets/adding a  custom col 4.png",
        desc: "Now select 'Custom Column' option as shown in the above figure to add another custom column " 
    },

    {
        path: "/assets/Custom avg salary copy inserted 5.png",
        desc: "Name the new column as 'Average Salary'. Since we want to merge the two copy columns from the previous step to only having a single average salary column" 
    },

    {
        path: "/assets/Adding title via text box 6.png",
        desc: "Now that we have cleaned the data we can start working on the Daashboard. We set a Title to the dashboard using the 'Text Box' option as shown above. " 
    },

    {
        path: "/assets/Adding title via text box 7.png",
        desc: "After setting the title we will work on the visualization and select 'card' as the graph type as shown in the figure above " 
    },

    {
        path: "/assets/count distint uni id 8.png",
        desc: "We select the 'Unique ID' column and Right-click on the column under 'Fields' and select 'Count by Distinct' Option as shown in the figure above" 
    },
    
    {
        path: "/assets/Similarly for average age 9using Card.png",
        desc: "Select another 'Card' visualization from the options and repeat the previous steps for the 'Age' column." 
    },

    {
        path: "/assets/Viz 1 Creating a clustered bar chart 10.png",
        desc: "Select 'Clustered Chart' option to create another visualization as shown in the figure above." 
    },

    {
        path: "/assets/Avg salary by title Clustered bar chart 11.png",
        desc: "Select the X-axis and Y-axis as 'Average Salary' and 'Which title Best Fits your Curent Role?' columns respectively, and set Legend as 'Which title Best Fits your Curent Role?' as shown in the above figure. " 
    },


    {
        path: "/assets/Stacked Chart 12.png",
        desc: "Select 'Stacked Chart' option. Set the X-asis and Y-asis with the respective columns to create a Stacked Chart as shown in the figure above to create another visualization" 
    },

    {
        path: "/assets/Stacked Chart 12.png",
        desc: "Select 'Stacked Chart' option. Set the X-asis and Y-asis with the respective columns to create a Stacked Chart as shown in the figure above to create another visualization" 
    },

    {
        path: "/assets/Count by country (Tree Map) 13.png",
        desc: "To Create another graph we can select 'Tree Map' visualization option and set filter as countries." 
    },

    {
        path: "/assets/Gauge Chart 14.png",
        desc: "To Create another graph we can select 'Guage Chart'  visualization option and set filter as shown in the figure above." 
    },

    {
        title:"Final Power BI Dashboard",
        path: "/assets/Final Dashboard After editing .png",
        desc: "The Final Dashboard post editing and formatting will look like the above image" 
    },




]


const slider = document.querySelector(".slider")

const initImages = () => {
    images.forEach((img, ind) => {
        // Create a slide component
        const slide = document.createElement("div");
        slide.className = "slide";
        // Create a text container
        const container = document.createElement("div");
        container.className = "text-container";
        // Indicate page number
        const numberIcon = document.createElement('p');
        numberIcon.innerText = `${ind + 1}/${images.length}`
        numberIcon.className = "number-icon";
        if(img?.title){
           const title = document.createElement("h2");
            title.innerText=img.title;
            slide.appendChild(title);
        }
        // Create the image component
        const image = document.createElement("img");
        image.src = img.path;
        // Create the description
        const description = document.createElement("p");
        description.innerHTML = img.desc;
        // Complete the text component
        container.appendChild(description);
        container.appendChild(numberIcon);
        // Complete the slide component
        slide.appendChild(image);
        slide.appendChild(container);
        // Apeend it as child to slider component  
        slider.appendChild(slide, slider.firstChild);
    })
}
initImages();
// Select all slides
const slides = document.querySelectorAll(".slide");
// maximum number of slides
let maxSlide = slides.length - 1;
// select next slide button
const nextSlideButton = document.querySelector(".btn-next");
// select prev slide button
const prevSlideButton = document.querySelector(".btn-prev");

// current slide counter
let curSlide = 0;




// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// add event listener and navigation functionality
nextSlideButton.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
    // updateNumberIcon()
});


// add event listener and navigation functionality
prevSlideButton.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
    // updateNumberIcon()
});