import React from "react";

function AboutPizza({ name }) {
  return (
    <div class="container about-pizza">
      <div class="row">
        <h2 class="text-center">About {name}</h2>
        <div class="col-md-6">
          <img
            src="/images/pinar-kucuk-Ae7jQFDTPk4-unsplash.jpg"
            alt="About Pizza"
            class="img-responsive"
          />
        </div>
        <div class="col-md-6">
          <h3>Pizza is awesome!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            est saepe fuga, ab repellendus reiciendis animi quam ad doloribus
            numquam unde provident, aliquam dolor labore magni veniam molestias
            tempore laboriosam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            est saepe fuga, ab repellendus reiciendis animi quam ad doloribus
            numquam unde provident, aliquam dolor labore magni veniam molestias
            tempore laboriosam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            est saepe fuga, ab repellendus reiciendis animi quam ad doloribus
            numquam unde provident, aliquam dolor labore magni veniam molestias
            tempore laboriosam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            est saepe fuga, ab repellendus reiciendis animi quam ad doloribus
            numquam unde provident, aliquam dolor labore magni veniam molestias
            tempore laboriosam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPizza;
