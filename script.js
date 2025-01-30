// document.getElementById('get-recommendations').addEventListener('click', () => {
//     const genre = document.getElementById('user-preference').value.trim();
//     const mood = document.getElementById('user-mood').value.trim();
    
//     if (genre && mood) {
//         fetchRecommendations(genre, mood);
//     } else {
//         alert("Please enter both genre and mood.");
//     }
// });

// async function fetchRecommendations(genre, mood) {
//     try {
//         // Make a request to the backend API with both the genre and mood
//         const response = await fetch(`http://localhost:8888/recommendations?genre=${genre}&mood=${mood}`);
        
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();

//         // Display the recommendations
//         displayRecommendations(data);
//     } catch (error) {
//         console.error('Error fetching recommendations:', error);
//         alert("Error fetching recommendations. Please try again.");
//     }
// }

// function displayRecommendations(data) {
//     const recommendationsDiv = document.getElementById('recommendations');
//     recommendationsDiv.innerHTML = '';

//     if (data.length > 0) {
//         data.forEach(item => {
//             const div = document.createElement('div');
//             div.textContent = item.title || item; // Assuming item is a movie object with a title
//             recommendationsDiv.appendChild(div);
//         });
//     } else {
//         recommendationsDiv.innerHTML = "<div>No recommendations found for this genre and mood combination.</div>";
//     }
// }





document.getElementById('get-recommendations').addEventListener('click', () => {
    const preference = document.getElementById('user-preference').value.trim();
    
    if (preference) {
        fetchRecommendations(preference);
    } else {
        alert("Please enter a valid genre.");
    }
});

async function fetchRecommendations(preference) {
    try {
        // Make a request to the backend API with the given preference
        const response = await fetch(`http://localhost:8080/recommendations?preference=${preference}`);
        
        // If the response is not OK, throw an error
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response data as JSON
        const data = await response.json();

        // Display the recommendations using the provided function
        displayRecommendations(data);
    } catch (error) {
        console.error('Error fetching recommendations:', error);

        // Show an alert with an error message
        alert("Error fetching recommendations. Please try again.");
    }
}

// A function to display the recommendations (you should implement this function)
function displayRecommendations(data) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    if (data.length > 0) {
        // Loop through the data and display each recommendation
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('list-group-item');
            div.textContent = item.title || item;  // Assuming item is a movie object with a title or just a string
            recommendationsDiv.appendChild(div);
        });
    } else {
        // If no recommendations are found, display a message
        recommendationsDiv.innerHTML = "<div class='list-group-item'>No recommendations found for this genre.</div>";
    }
}


