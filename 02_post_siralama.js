const posts = [
  { title: "Makale 1", author: "Yazar 1" },
  { title: "Makale 2", author: "Yazar 1" },
  { title: "Makale 3", author: "Yazar 1" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.title);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};

async function showPosts() {
  try {
    await addPost({ title: "Makale 4", author: "Yazar 4" });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();
