
fetch('https://api.github.com/users/UditKumarSaraswat')
  .then(response => response.json())
  .then(data => {
    document.getElementById("fullData").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.log("Error fetching data:", error));
