// agenda.js

const events = [
    { date: "2023-10-01", title: "Project Deadline" },
    { date: "2023-10-05", title: "Team Meeting" },
    { date: "2023-10-10", title: "Presentation" },
];

// Function to render events
function renderEvents() {
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `${event.date}: ${event.title}`;
        eventList.appendChild(li);
    });
}

// Call the function to render events on page load
document.addEventListener('DOMContentLoaded', renderEvents);