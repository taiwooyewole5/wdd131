// Get the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);

// Format it nicely: DD/MM/YYYY HH:MM:SS
const options = { 
  day: '2-digit', 
  month: '2-digit', 
  year: 'numeric', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit',
  hour12: false
};
const formattedDate = lastModifiedDate.toLocaleDateString('en-GB', options).replace(',', '');

// Update the footer text
document.getElementById("lastModified").textContent = "Last Modification: " + formattedDate;
