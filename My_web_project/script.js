document.getElementById('addEventButton').addEventListener('click', function() {
    const eventInput = document.getElementById('eventInput').value;
    const daySelect = document.getElementById('daySelect').value;
    const timeSelect = document.getElementById('timeSelect').value;

    const cellId = daySelect + '-' + timeSelect;

    if (eventInput) {
        document.getElementById(cellId).innerText = eventInput;
        document.getElementById('eventInput').value = ''; // Clear input
    } else {
        alert('Please enter an event!');
    }
});
