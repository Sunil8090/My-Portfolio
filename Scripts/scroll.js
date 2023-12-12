let elem = document.querySelector("#welcome");
let add_remove = document.querySelector(".add_remove");
let str = " Wonder we are there!";

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
  src:"devicon-html5-plain",
  lang:"HTML"
  }
  ,
  {
    src:"devicon-css3-plain",
    lang:"CSS"
  },
  {
    src:"devicon-tailwindcss-original-wordmark",
    lang:"Tailwind CSS"
  },
  {
    src:"devicon-javascript-plain",
    lang:"JavaScript"
  },
  {
    src:"devicon-react-original",
    lang:"React"
  },
 {
  src: "devicon-redux-original",
  lang:"redux"
 },
  {
    src:"devicon-firebase-plain",
    lang:"FireBase"
  },
  {
    src:"devicon-nodejs-plain",
    lang:"Node JS"
  },
  {
    src:"devicon-express-original",
    lang:"Express JS"
  },
  {
    src:"devicon-mongodb-plain",
    lang:"MongoDB"
  }
];



icon_arr.forEach((element) => {
  let skill_btn = document.createElement("div");
  skill_btn.classList.add("skill_button");

  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  let img = document.createElement("i");
  img.classList.add(element.src,"svg_icon");
  span3.append(img);
  img.style.backgroundColor = "white"
  let span4 = document.createElement("span");

  let p = document.createElement("p");
  p.textContent = element.lang
  p.className = "panner"

  skill_btn.append(span1, span2, span3, span4,p);

  skill_container.append(skill_btn);
});
