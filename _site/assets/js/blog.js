// Blog JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // Category filtering
  function filterPosts(category) {
    const posts = document.querySelectorAll('.post-card');
    const buttons = document.querySelectorAll('.category-btn');
    
    // Update active button
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.category === category) {
        btn.classList.add('active');
      }
    });
    
    // Filter posts
    posts.forEach(post => {
      const postCategories = post.dataset.categories ? post.dataset.categories.split(',') : [];
      if (category === 'all' || postCategories.includes(category)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  }

  // Add category filter listeners
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterPosts(btn.dataset.category);
    });
  });

});
