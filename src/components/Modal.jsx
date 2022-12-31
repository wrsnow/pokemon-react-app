import React from "react";
import { useEffect } from "react";

export default function Modal(props) {
  const { modalState, selectedPoke, showModal } = props;

  const { name, height, weight, image } = selectedPoke;
  const modal_state = modalState ? "" : "hide--modal";

  useEffect(() => {
    if (modalState) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modalState]);

  const heightInMeters = height / 10 + " m";
  const weightInKilograms = weight / 10 + " kg";

  return (
    <div className={`modal--body ${modal_state}`}>
      <div onClick={showModal} className="modal__overlay"></div>
      <div className="modal--content">
        <div className="content--header">
          <button onClick={showModal}>CLOSE</button>
        </div>
        <img src={image} alt={name} />
        <h2 className="text">{name}</h2>
        <p className="text">Height: {heightInMeters}</p>
        <p className="text">Weight: {weightInKilograms}</p>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, suscipit
          expedita earum quasi animi ratione dicta obcaecati sunt libero
          mollitia dolorum ipsam officiis ad molestias sapiente? Perferendis
          accusamus sunt facilis! Rerum, quis! Maxime vitae minus aliquid
          voluptatibus eius. Mollitia nobis voluptas temporibus voluptate,
          debitis minima aliquam facilis incidunt sint cumque eos fuga optio
          saepe velit, eius nihil. Odio, atque aliquam. Minima provident
          possimus obcaecati? Culpa tempora ipsa nulla non repellat? Culpa non
          perspiciatis, inventore optio incidunt hic ea unde similique sunt
          consequuntur expedita repellat corrupti voluptate blanditiis, sed,
          esse assumenda? Magni eius hic ab sint, reiciendis doloribus facilis
          rem pariatur tempora, aliquid iste voluptatem dolores error adipisci
          mollitia, a consequuntur beatae similique obcaecati iure illo ullam.
          Soluta consectetur qui quos. Placeat officia nihil blanditiis
          molestias hic officiis, tempore obcaecati repellendus ipsum ipsam nisi
          cupiditate omnis architecto unde sed. Eaque quos, nobis cum
          accusantium recusandae corporis quo incidunt. Quasi, unde illo. Fuga
          obcaecati esse ipsum quisquam eum aperiam, dolore labore minus facere
          possimus. Nesciunt iusto nihil perspiciatis temporibus quos eos
          provident distinctio maiores soluta culpa. Aliquid consequuntur ea
          ullam veritatis numquam! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Vero aperiam error eligendi fugiat optio hic, ipsam
          temporibus expedita harum, sed qui repudiandae voluptate obcaecati
          tenetur eum ea dolorum alias omnis.
        </p>
      </div>
    </div>
  );
}
