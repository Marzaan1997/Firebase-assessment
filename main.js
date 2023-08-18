// Initialize Firebase
const firebaseConfig = {
    apiKey: "26f86758182b40c4bd654c4fde1f89f8",
    authDomain: "fir-assessment-67948.firebaseapp.com",
    projectId: "fir-assessment-67948",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Authentication listener
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      console.log(user);
      fetchNews();
    } else {
      // User is not signed in
      console.log('User is not signed in.');
      window.location.href = "index.html";
    }
  });
  function fetchNews() {
    const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=26f86758182b40c4bd654c4fde1f89f8";
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const articles = data.articles;
        const articlesList = document.getElementById("articles-list");
  
        articles.forEach((article) => {
          const articleCard = document.createElement("div");
          articleCard.className = "article-card";
          
          const articleTitle = document.createElement("h2");
          articleTitle.textContent = article.title;
          
          const articleDescription = document.createElement("p");
          articleDescription.textContent = article.description;
          
          const articleSource = document.createElement("a");
          articleSource.textContent = "Read More";
          articleSource.href = article.url;
          
          articleCard.appendChild(articleTitle);
          articleCard.appendChild(articleDescription);
          articleCard.appendChild(articleSource);
          articlesList.appendChild(articleCard);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
    
    