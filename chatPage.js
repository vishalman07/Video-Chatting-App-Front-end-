// for friends
let friends = document.querySelector(".friends");
friends.addEventListener("click", () => {
  let acFlush = document.querySelector(".accordion-flush");
  acFlush.innerHTML = ` <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button
      onclick="user('random user 2.jpg','Vishal Mankar')"
        class="accordion-button collapsed dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        <img
          src="svgs & images/random user 2.jpg"
          width="50px"
          alt="user image"
          style="border-radius: 50%; margin-right: 10px"
        />
        Vishal Mankar
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body dark">
        Hey there ! I am Using <b>ChatMe</b> for chatting with Friends.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button
      onclick="user('random user 3.jpg','Atharv Mankar')"

        class="accordion-button collapsed dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        <img
          src="svgs & images/random user 3.jpg"
          width="50px"
          alt="user image"
          style="border-radius: 50%; margin-right: 10px"
        />
        Atharv Mankar
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body dark">
        Hey there ! I am Using <b>ChatMe</b> for chatting with Friends.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button
      onclick="user('random user 4.jpg','Rujal Mankar')"

        class="accordion-button collapsed dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFour"
        aria-expanded="false"
        aria-controls="flush-collapseFour"
      >
        <img
          src="svgs & images/random user 4.jpg"
          width="50px"
          alt="user image"
          style="border-radius: 50%; margin-right: 10px"
        />
        Rujal Mankar
      </button>
    </h2>
    <div
      id="flush-collapseFour"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingFour"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body dark">
        Hey there ! I am Using <b>ChatMe</b> for chatting with Friends.
      </div>
    </div>
  </div>

  <div class="accordion-item"> 
  <h2 class="accordion-header" id="flush-headingOne">
    <button
    onclick="user('random user 5.jpg','Karan Bidkar')"

      class="accordion-button collapsed dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseFive"
      aria-expanded="false"
      aria-controls="flush-collapseFive"
    >
      <img
        src="svgs & images/random user 5.jpg"
        width="50px"
        alt="user image"
        style="border-radius: 50%; margin-right: 10px"
      />
      Karan Bidkar
    </button>
  </h2>
  <div
    id="flush-collapseFive"
    class="accordion-collapse collapse"
    aria-labelledby="flush-headingFive"
    data-bs-parent="#accordionFlushExample"
  >
    <div class="accordion-body dark">
      Hey there ! I am Using <b>ChatMe</b> for chatting with Friends.
    </div>
  </div>
</div>
  `;
});

// for favourites

let favourites = document.querySelector(".favourite");
favourites.addEventListener("click", () => {
  let acFlush = document.querySelector(".accordion-flush");
  acFlush.innerHTML = `
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button
      onclick="user('random user 2.jpg','Pratik Mankar')"

        class="accordion-button collapsed dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        <img
          src="svgs & images/random user 2.jpg"
          width="50px"
          alt="user image"
          style="border-radius: 50%; margin-right: 10px"
        />
        Pratik Mankar
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body dark">
        Hey there ! I am Using <b>ChatMe</b> for chatting with Friends.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button
      onclick="user('random user 3.jpg','Atharv Mankar')"

        class="accordion-button collapsed dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        <img
          src="svgs & images/random user 3.jpg"
          width="50px"
          alt="user image"
          style="border-radius: 50%; margin-right: 10px"
        />
        Atharv Mankar
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body dark">
        Hey there ! I am Using <b>ChatMe</b> for chatting with Friends.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button
      onclick="user('random user 4.jpg','Rujal Mankar')"

        class="accordion-button collapsed dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFour"
        aria-expanded="false"
        aria-controls="flush-collapseFour"
      >
        <img
          src="svgs & images/random user 4.jpg"
          width="50px"
          alt="user image"
          style="border-radius: 50%; margin-right: 10px"
        />
        Rujal Mankar
      </button>
    </h2>
    <div
      id="flush-collapseFour"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingFour"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body dark">
        Hey there ! I am Using <b>ChatMe</b> for chatting with Friends.
      </div>
    </div>
  </div>
  `;
});

// for dark mode

let mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  let darkMode = document.querySelectorAll(".dark");
  darkMode.forEach((elem) => {
    elem.classList.toggle("darkMode");
  });
});

  // this is for middleSection and user's top section content change
let middleSection = document.querySelector(".middleSection");
const user = (source, userName) => {
  let userInfo = document.querySelector(".userInfo");
  userInfo.innerHTML = ` 
        <img
        src='./svgs & images/${source}'
        alt=""
        id="appLogo"
        width="50px"
        style="border-radius: 50px;"
      />
      <h5 class=" mx-2">${userName}</h5><label class="form-text mx-3"><i>5 min ago.</i></label>`;

  middleSection.innerHTML = `
        <h3>Hello ${userName.slice(0, 6)}🙋‍♂️</h3>
        <h3>Are you fine.😪🥱 ${userName.slice(0, 6)}?</h3>
        <h3>How can i help you?😉😉🤔</h3>
        
`;
};

  // this is for user info and detail
const options = () => {
  middleSection.innerHTML = `
      <div class="card" style="width:100px;" >
  <div class="card-header">
    Profile
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Mobile No : 9623058051</li>
    <li class="list-group-item">E-mail : vsm@gmail.com</li>
    <li class="list-group-item">Location : Nagpur</li>
  </ul>
</div>
`;
};

  // this is for sending msg and clear text input
const clearInputTag = () => {
  let inputTag = document.getElementById("inputTag");
  middleSection.innerHTML += `<h3  style="text-align: right; margin-left: 30px;">${inputTag.value}</h3>`;
  inputTag.value = "";
};
