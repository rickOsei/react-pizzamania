import React, { Component } from "react";

export default class PizzaType extends Component {
  render() {
    return (
      <div class="container pizza-types">
        <div class="row">
          <h3 class="text-center">{this.props.name} Types</h3>
          <div class="col-md-3">
            <div class="thumbnail">
              <img
                src="/images/getulio-moraes-Wz3u9_GtkWc-unsplash.jpg"
                alt=""
              />
              <div class="caption">
                <h3>Pepperoni Pizza</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ipsa facilis molestiae fugit nam cupiditate
                  distinctio modi natus laboriosam omnis.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="thumbnail">
              <img src="/images/pexels-taryn-elliott-7172068.jpg" alt="Vegan" />
              <div class="caption">
                <h3>Vegan Pizza</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ipsa facilis molestiae fugit nam cupiditate
                  distinctio modi natus laboriosam omnis.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="thumbnail">
              <img src="/images/pizza-2000600.jpg" alt="Cheese" />
              <div class="caption">
                <h3>Chesse Pizza</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ipsa facilis molestiae fugit nam cupiditate
                  distinctio modi natus laboriosam omnis.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="thumbnail">
              <img
                src="/images/mahyar-motebassem-pGA4zHvpo5E-unsplash.jpg"
                alt="Bossu"
              />
              <div class="caption">
                <h3>Bossu Pizza</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ipsa facilis molestiae fugit nam cupiditate
                  distinctio modi natus laboriosam omnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
