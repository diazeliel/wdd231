// Set last modified date in footer
document.addEventListener('DOMContentLoaded', () => {
 // Set the current year
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Get and format the last modified date
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = lastModified;})