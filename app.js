const container = document.getElementById("card-container");

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => { 
       
        data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            const kards = document.createElement("div");
            kards.classList.add("card-kards");

            card.innerHTML = `
                <img src="${item.thumbnailUrl}" alt="Photo">
                <div class="card-content">
                    <p class="card-title">${item.title}</p>
                    <p class="card-id">ID: ${item.id}</p>
                </div>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error("Xato:", error));


