import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import heroesImg from "../../assets/heroes.png";
import logoHeroes from "../../assets/logo.svg";
import "./styles.scss";
import api from "../../services/api";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });
      alert(`Login feito ${response.data.id}`);
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (error) {
      alert("Erro ao logar");
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoHeroes} alt="Be the hero" />
        <form onSubmit={handleLogin}>
          <h1> Faça seu logon</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link to="/register" className="back-link ">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="HeroesImg" />
    </div>
  );
}
