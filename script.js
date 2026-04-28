const cloudConcepts = [
  {
    title: "Elasticity",
    desc: "The cloud breathes with your traffic. It expands when millions visit and shrinks when they sleep.",
  },
  {
    title: "On-Demand Self-Service",
    desc: "No more waiting for IT to rack a server. You click a button, and the resource is yours in seconds.",
  },
  {
    title: "Utility Pricing",
    desc: "Stop buying the whole car. In the cloud, you only pay for the miles you actually drive.",
  },
  {
    title: "Global Reach",
    desc: "Deploy your code in New York, and have it served from a data center in Tokyo in milliseconds.",
  },
];

let currentIndex = 0;

function nextConcept() {
  currentIndex = (currentIndex + 1) % cloudConcepts.length;

  // Selecting the DOM elements
  const titleEl = document.getElementById("concept-title");
  const descEl = document.getElementById("concept-desc");

  // Injecting the new data
  titleEl.textContent = cloudConcepts[currentIndex].title;
  descEl.textContent = cloudConcepts[currentIndex].desc;
}
