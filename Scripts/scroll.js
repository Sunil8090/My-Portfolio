let elem = document.querySelector("#welcome");
let add_remove = document.querySelector(".add_remove");
let str = " I am a Full Stack Developer";

document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const opacityValue = 1 - Math.min(scrollPosition * 0.003, 1);
  elem.style.opacity = opacityValue;
});

let letter_count = 0;
let flag = true;

let add_fn = () => {
  let index = 0;

  let id = setInterval(() => {
    add_remove.textContent += str[index];
    index++;

    if (index == str.length) {
      clearInterval(id);
      remove_fn();
    }
  }, 200);
};

let remove_fn = () => {
  let id = setInterval(() => {
    let content = add_remove.textContent;
    add_remove.textContent = content.slice(0, -1);

    if (content.length == 0) {
      clearInterval(id);
      add_fn();
    }
  }, 200);
};

add_fn();

//end of the effect

// animate the about poster
const sections = document.querySelector(".about");
const about_content = document.querySelector(".slide");
const table = document.getElementById("table");
const pot = document.getElementById("pot");
const person = document.getElementById("person");
const books = document.getElementById("books");

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // , "books_top", "pot_top", "person_top"
      table.classList.add("table_top");
      books.classList.add("books_top");
      pot.classList.add("pot_top");
      person.classList.add("person_top");
      // about_content.classList.add("about_content_form_left");
    } else {
      table.classList.remove("table_top");
      books.classList.remove("books_top");
      pot.classList.remove("pot_top");
      person.classList.remove("person_top");
      // about_content.classList.remove("about_content_form_left");
    }
  });
}

const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin around the viewport
  threshold: 0.2, // Trigger when 50% of the target is visible
};

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(sections);
//end of the animation

//skills
let skill_container = document.querySelector(".skill_container");

let icon_arr = [
  {
    src: "devicon-html5-plain",
    lang: "HTML",
  },
  {
    src: "devicon-css3-plain",
    lang: "CSS",
  },
  {
    src: "devicon-tailwindcss-original-wordmark",
    lang: "Tailwind CSS",
  },
  {
    src: "devicon-javascript-plain",
    lang: "JavaScript",
  },
  {
    src: "devicon-react-original",
    lang: "React",
  },
  {
    src: "devicon-redux-original",
    lang: "redux",
  },
  {
    src: "devicon-firebase-plain",
    lang: "FireBase",
  },
  {
    src: "devicon-nodejs-plain",
    lang: "Node JS",
  },
  {
    src: "devicon-express-original",
    lang: "Express JS",
  },
  {
    src: "devicon-mongodb-plain",
    lang: "MongoDB",
  },
];

icon_arr.forEach((element) => {
  let skill_btn = document.createElement("div");
  skill_btn.classList.add("skill_button");

  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  let img = document.createElement("i");
  img.classList.add(element.src, "svg_icon");
  span3.append(img);
  img.style.backgroundColor = "white";
  let span4 = document.createElement("span");

  let p = document.createElement("p");
  p.textContent = element.lang;
  p.className = "panner";

  skill_btn.append(span1, span2, span3, span4, p);

  skill_container.append(skill_btn);
});

//smooth scrool

let home = document.querySelector(".Home_link");
let about = document.querySelector(".About_link");
let skills = document.querySelector(".Skills_link");
let projects = document.querySelector(".Projects_link");
let github = document.querySelector(".github_link");
let contact = document.querySelector(".Contact_link");

let Home_page = document.querySelector(".Home_page");
let about_page = document.querySelector(".about");
let skills_page = document.querySelector(".skills");
let projects_page = document.querySelector(".projects");
let github_page = document.querySelector(".Github");
let contact_page = document.querySelector(".Contact");

home.addEventListener("click", (e) => {
  e.preventDefault();
  Home_page.scrollIntoView({ behavior: "smooth" });
});

about.addEventListener("click", (e) => {
  e.preventDefault();
  about_page.scrollIntoView({ behavior: "smooth" });
});

skills.addEventListener("click", (e) => {
  e.preventDefault();
  skills_page.scrollIntoView({ behavior: "smooth" });
});

projects.addEventListener("click", (e) => {
  e.preventDefault();
  projects_page.scrollIntoView({ behavior: "smooth" });
});

github.addEventListener("click", (e) => {
  e.preventDefault();
  github_page.scrollIntoView({ behavior: "smooth" });
});

contact.addEventListener("click", (e) => {
  e.preventDefault();
  contact_page.scrollIntoView({ behavior: "smooth" });
});

//highlight the navlinks

let personal_details = document.getElementById("personal_details");

function handleIntersection_links(entries, observer_links) {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    const link = document.querySelector(`.nav_link[href="#${sectionId}"]`);
    if (entry.isIntersecting) {
      link.classList.add("active-link");

      if (sectionId == "section_6") {
        personal_details.style.transform = "translateY(0) scale(1)";
        personal_details.style.opacity = 1;
      }
    } else {
      if (sectionId == "section_6") {
        personal_details.style.transform = "translateY(150px) scale(0)";
        personal_details.style.opacity = 0;
      }

      link.classList.remove("active-link");
    }
  });
}

// Create an intersection observer
const observer_links = new IntersectionObserver(handleIntersection_links, {
  root: null,
  rootMargin: "-50% 0px -50% 0px", // Adjust the rootMargin to observe only when the middle of the target is in the middle of the screen
  threshold: 0, // Adjust the threshold as needed
});

// Target all sections with the class "observe-section"
document.querySelectorAll("section").forEach((section) => {
  observer_links.observe(section);
});

//projects
function handleIntersection_project(entries, observer_links) {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.style.transform = "scale(1)";
    } else {
      target.style.transform = "scale(0)";
    }
  });
}

const observer_project = new IntersectionObserver(handleIntersection_project, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
});

document.querySelectorAll(".project-card").forEach((project) => {
  observer_project.observe(project);
});

//end point
const svg = document.getElementById("scrollCircle");
svg.style.display = "none";

svg.addEventListener("click", () => {
  Home_page.scrollIntoView({ behavior: "smooth" });
});

// Function to handle scroll event
function handleScroll() {
  // Calculate the percentage scrolled
  const scrollPercentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  if (scrollPercentage > 5) {
    svg.style.display = "block";
  } else {
    svg.style.display = "none";
  }

  // Calculate the corresponding dash offset based on the percentage
  const circumference = 188.49556; // Circumference of the circle
  const dashOffset = ((100 - scrollPercentage) / 100) * circumference;

  // Update the stroke-dashoffset attribute
  svg.querySelector("circle").setAttribute("stroke-dashoffset", dashOffset);
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);

// Trigger the handleScroll function initially to set the initial state
handleScroll();
