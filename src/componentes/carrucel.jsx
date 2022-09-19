import React from "react";
import imagenes from "../datos";
export const Carrucel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imagenes.imagane1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imagenes.imagane2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imagenes.imagane3} class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src={imagenes.imagane4} class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src={imagenes.imagane5} class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src={imagenes.imagane6} class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src={imagenes.imagane7} class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src={imagenes.imagane8} class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src={imagenes.imagane9} class="d-block w-100" alt="..." />
          </div><div class="carousel-item">
            <img src={imagenes.imagane10} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
