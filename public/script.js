// Information to reach API
const url = '/submit'; // Replace with your API endpoint URL

// Some page elements
const username = document.querySelector('#username');
const submitButton = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function to submit data
const submitData = async () => {
  const newusername = username.value;
  const data = JSON.stringify({ username: newusername });
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      responseField.innerHTML = JSON.stringify(jsonResponse, null, 2); // Display JSON response
    }
  } catch (error) {
    console.log(error);
  }
};

// Clear page and call asynchronous function
const displayResponse = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  submitData();
};

submitButton.addEventListener('click', displayResponse);
