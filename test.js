



const links = [
  {
    name: "Signup",
    path: "/signup",
   
  },
  {
    name: "Login",
    path: "/login",
    
  },
  {
    name: "Menu",
    path: "/menu",

  },
  {
    name: "Workthrough",
    path: "/workthrough",

  },
  {
    name: "Progress",
    path: "/progress",

  },
  {
    name: "What is test anxiety?",
    path: "/test-anxiety",
   
  },
  {
    name: "Thinking Traps",
    path: "/thinking-traps",
   
  },
  {
    name: "Tips/Tricks",
    path: "/tips-tricks",
  
  },
  {
    name: "Meditations",
    path: "/meditations",
  
  }
];

const filterLinks = links.filter(function(link) {
  return link.name !== "Signup" && link.name !== "Login"
})

console.log(filterLinks)
