// add-restaurant.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('restaurantForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const restaurant = {
      name: document.getElementById('name').value.trim(),
      owner: document.getElementById('owner').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      address: document.getElementById('address').value.trim(),
      cuisine: document.getElementById('cuisine').value.trim(),
      description: document.getElementById('description').value.trim(),
    };

    // Here, you can send this data to a server or API
    console.log("Submitted restaurant:", restaurant);

    // Show success message
    successMessage.classList.add('visible');

    // Reset form
    form.reset();

    // Hide success after 4 seconds
    setTimeout(() => {
      successMessage.classList.remove('visible');
    }, 4000);
  });
});
