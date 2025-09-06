<script>
  // Get the last modified date of the document
  const lastModifiedDate = new Date(document.lastModified);

  // Format it nicely: DD/MM/YYYY HH:MM:SS
  const options = { 
    day: '06', 
    month: '09', 
    year: '2025', 
    hour: '14', 
    minute: '08', 
    second: '32'
  };
  const formattedDate = lastModifiedDate.toLocaleDateString('en-GB', options).replace(',', '');

  // Update the footer text
  document.getElementById("lastModified").textContent = "Last Modification: " + formattedDate;
</script>
