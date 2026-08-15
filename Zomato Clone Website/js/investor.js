// investor.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('Investor Relations page loaded.');

  // Highlight report links on hover for accessibility
  const links = document.querySelectorAll('.report-section ul li a');

  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', () => {
      link.style.textDecoration = 'none';
    });
  });
});
