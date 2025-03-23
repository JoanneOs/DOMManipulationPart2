// Cache the elements for easier use
const topMenuEl = document.getElementById("top-menu");
const subMenuEl = document.getElementById("sub-menu");
const mainEl = document.getElementById("main-content");

// Define the menu links with sublinks
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Function to build and display the submenu
function buildSubmenu(subLinks) {
  // Clear existing submenu items
  subMenuEl.innerHTML = "";

  // Loop through sublinks and create anchor tags
  subLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  });

  // Show submenu
  subMenuEl.style.height = "100%";
}

// Attach click event listener to top menu
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  // Only handle if an anchor tag was clicked
  const clickedEl = event.target;
  if (clickedEl.tagName !== "A") return;

  // Remove "active" class from all links
  const allLinks = topMenuEl.querySelectorAll("a");
  allLinks.forEach((link) => link.classList.remove("active"));

  // Add "active" class to clicked link
  clickedEl.classList.add("active");

  // Find the corresponding link object from menuLinks
  const linkObj = menuLinks.find(
    (link) => link.text === clickedEl.dataset.link
  );

  // Check if clicked menu has sublinks
  if (linkObj && linkObj.subLinks) {
    buildSubmenu(linkObj.subLinks);
  } else {
    subMenuEl.style.height = "0"; // Hide submenu if no sublinks
  }
});

// Attach click event listener to submenu
subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  // Only handle if an anchor tag was clicked
  const clickedEl = event.target;
  if (clickedEl.tagName !== "A") return;

  // Update main content with clicked submenu text
  mainEl.innerHTML = `<h1>${clickedEl.textContent}</h1>`;

  // Hide submenu
  subMenuEl.style.height = "0";
});
