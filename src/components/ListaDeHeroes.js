function ListaHeroes(props) {
  if (!props.heroes || props.heroes.length < 1) {
    return <div>Lista de heroes vacia</div>;
  }
  return (
    props.heroes.length > 0 && (
      <>
        <ul className="list-group">
          {props.heroes.map((elemento, i) => {
            let colorFondo = "white";
            if (i === props.selectedHeroe) {
              colorFondo = "lightblue";
            }
            return (
              <li
                key={elemento.id}
                style={{
                  backgroundColor: colorFondo
                }}
                className="list-group-item"
              >
                <a
                  onClick={() => {
                    props.setSelectedHero(i);
                  }}
                  href={elemento.resourceURI}
                >
                  {elemento.name}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    )
  );
}

export default ListaHeroes;
