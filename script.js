// Sample Script for Interactivity

document.addEventListener("DOMContentLoaded", function () {
    // Example: form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Thank you for sharing your story!");
    });

    // Example: Populate sentiment analysis (dummy data)
    const sentimentData = {
        positive: 40,
        neutral: 30,
        negative: 30,
    };

    const sentimentContainer = document.getElementById('sentiment');
    sentimentContainer.innerHTML += `
    <ul>
      <li>Positive: ${sentimentData.positive}%</li>
      <li>Neutral: ${sentimentData.neutral}%</li>
      <li>Negative: ${sentimentData.negative}%</li>
    </ul>
  `;
});
