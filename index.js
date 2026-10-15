
async function fetchPosts() {
  const postList = document.querySelector("#post-list");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const posts = await response.json();

    postList.innerHTML = "";

    posts.forEach((post) => {
      const postElement = document.createElement("li");
      postElement.className = "post";

      const title = document.createElement("h1");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      postElement.append(title, body);
      postList.appendChild(postElement);
    });
  } catch (error) {
  console.error("Error fetching posts:", error.name, error.message);
}
}

fetchPosts();