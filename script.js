const url = "https://jsonplaceholder.typicode.com/users";

const postReq = async (data) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};
const getReq = async () => {
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    renderReq(responseData);
  } catch (error) {
    console.log(error);
  }
};

getReq();

const renderReq = (data) => {
  const newList = data.map(
    (item) => ` <div class="miniDiv">
      <h2>${item.name}</h2>
      <h2>${item.username}</h2>
      <a href='${item.email}'</>${item.email}</a>
      <h4>${item.address.street}</h4>
      <span>${item.address.suite}</span>
      <span>${item.address.city}</span>
      <span>${item.address.zipcode}</span>
      <span>${item.address.geo.lat}</span>
      <span>${item.address.geo.lng}</span>
      <p>${item.phone}</p>
      
    </div>`
  );
  const mainDiv = document.getElementById("mainDiv");
  mainDiv.innerHTML = newList.join("");
};

const button = document.getElementById("button");

button.addEventListener("click", filterName);

function filterName() {
  const input = document.getElementById("input").value.toLowerCase();
  const divs = document.getElementsByClassName("miniDiv");

  for (let div of divs) {
    const name = div.getElementsByTagName("h2")[0].textContent.toLowerCase();
    if (name.includes(input)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

const deleteReq = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};
