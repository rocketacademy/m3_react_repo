import { useState } from "react";
import axios from "axios";

export default function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [image_url, setImage_url] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let request = await axios.post("http://localhost:8080/fruit", {
      name,
      description,
      colour,
      price,
      stock,
      image_url,
    });
    console.log(request);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label>Colour:</label>
        <input
          type="text"
          name="colour"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
        />
        <br />

        <label>Image URL:</label>
        <input
          type="text"
          name="image_url"
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
        />
        <br />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
