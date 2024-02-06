import logo from "./assets/logo-notes.svg";

export function App() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <input type="text" placeholder="Busque em suas notas..." />
    </div>
  );
}
