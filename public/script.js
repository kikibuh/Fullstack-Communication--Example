// frontend
document
  .getElementById("getDataButton")
  .addEventListener("click", getDataFromBackend);

function getDataFromBackend() {
  fetch("/api/data")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerText = data.message;
    })
    .catch((error) => {
      console.error(error);
    });
}
