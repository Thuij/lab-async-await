async function fetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    const postsContainer = document.getElementById("posts-container");

    postsContainer.innerHTML = "";

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;

      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);

    const postsContainer = document.getElementById("posts-container");

    if (postsContainer) {
      postsContainer.textContent = "Unable to load posts.";
    }
  }
}

fetchPosts();
