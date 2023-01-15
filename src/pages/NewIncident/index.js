import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logoHeroes from "../../assets/logo.svg";
import api from "../../services/api";
import "./styles.scss";

export default function NewIncident() {
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const data = { title, description, value };

  async function handleNewIncident(e) {
    e.preventDefault();
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });
      alert("Sucesso");
      history.push("/profile");
    } catch (error) {
      alert("Erro");
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoHeroes} alt="Be the hero" />
          <h1>Cadasrro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
          </p>
          <Link to="/profile" className="back-link ">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
