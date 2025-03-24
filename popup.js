fetch('config.json')
  .then(response => response.json())
  .then(config => {
    const labPrefix = config.labPrefix;

document.getElementById("btn-open-lab").addEventListener("click", function() {
  let code = document.getElementById("codeInput").value;
  if (code.length === 4) {
    window.open(`http://${labPrefix}${code}.com`, "_blank");
  } else {
    alert("Please enter a 4-digit code");
  }
});

document.getElementById("btn-open-logs").addEventListener("click", function() {
  let code = document.getElementById("codeInput").value;
  if (code.length === 4) {
    window.open(`http://${labPrefix}${code}.com?globallogsviever.jsp`, "_blank");
  } else {
    alert("Please enter a 4-digit code");
  }
  });
  })
  .catch(error => console.error("Error loading config.json", error));

document.getElementById("codeInput").addEventListener("input", function(event) {
  this.value = this.value.replace(/\D/g, '').slice(0, 4);
});