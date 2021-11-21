import img404 from "../assets/404.svg";

export const NotFound = () => {
  return (
    <div style={{ backgroundImage: `url(${img404})` }}>
      <h1>Página no encontrada</h1>
    </div>
  );
};
