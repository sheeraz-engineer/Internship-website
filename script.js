document.getElementById("contactform").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("messgage").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        e.preventDefault();
    }
    
})