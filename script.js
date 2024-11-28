document.getElementById('calculateBudget').addEventListener('click', () => {
    const resultElement = document.getElementById('result');

    // Display a loading spinner
    resultElement.innerHTML = `<div class="loader"></div>`;
    resultElement.style.display = "block";

    setTimeout(() => {
        // Fetch values
        const from = parseInt(document.getElementById('from').value) || 0;
        const destinationElement = document.getElementById('destination');
        const destination = parseInt(destinationElement.value) || 0;
        const transport = parseInt(document.getElementById('transport').value) || 0;
        const accommodation = parseInt(document.getElementById('accommodation').value) || 0;
        const meals = parseInt(document.getElementById('meals').value) || 0;
        const activities = parseInt(document.getElementById('activities').value) || 0;

        // Calculate total budget
        const totalBudget = from + destination + transport + accommodation + meals + activities;

        // Nearby places
        const nearbyPlaces = destinationElement.options[destinationElement.selectedIndex].dataset.places || "No nearby places";

        // Populate the result
        resultElement.innerHTML = `
            <h2>Budget Prediction</h2>
            <p><strong>Total Budget:</strong> ₹${totalBudget}</p>
            <p><strong>From:</strong> ${document.getElementById('from').options[document.getElementById('from').selectedIndex].text}</p>
            <p><strong>Destination:</strong> ${destinationElement.options[destinationElement.selectedIndex].text}</p>
            <p><strong>Nearby Places:</strong> ${nearbyPlaces}</p>
        `;
    }, 1000);
});
