// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the saved theme
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    updateToggleButton();
  } else {
    body.classList.remove('dark-mode');
    updateToggleButton();
  }
}

// Apply saved theme when the page loads
applySavedTheme();

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
  updateToggleButton();
});

// Update toggle button icon
function updateToggleButton() {
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
}