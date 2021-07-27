function ListaDeLinks(props) {
  return (
    props.lista.length > 0 && (
      <>
        <h4>{props.titulo}</h4>
        <ul className="list-group">
          {props.lista.map((elemento) => {
            return (
              <li key={elemento.name} className="list-group-item">
                <a href={elemento.resourceURI}>{elemento.name}</a>
              </li>
            );
          })}
        </ul>
      </>
    )
  );
}

export default ListaDeLinks;
