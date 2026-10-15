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

    posts.forEach((post) => {
      const title = document.createElement("h1");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      const item = document.createElement("li");
      item.className = "post";
      item.appendChild(title);
      item.appendChild(body);

      postList.appendChild(item);
    });
  } catch (error) {
    console.error("Error fetching posts:", error.name, error.message);
  }
}
