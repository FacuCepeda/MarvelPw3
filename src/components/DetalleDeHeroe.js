import ListaDeLinks from "./ListaDeLinks";

function renderEmptyList() {
  return <div>No hay un heroe seleccionado</div>;
}

function DetalleDeHeroe(props) {
  if (!props.heroe) {
    return renderEmptyList();
  }
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.heroe.thumbnail.path + "." + props.heroe.thumbnail.extension}
        alt={props.heroe.name}
      />
      <div className="card-body">
        <h5 style={{ color: props.color }} className="card-title">
          {props.heroe.name}
        </h5>
      </div>

      <div className="accordion" id="accordionExample">
        {/* TODO: extraer a un componente */}

        {props.heroe.comics.items.length > 0 && (
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Comics
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ListaDeLinks lista={props.heroe.comics.items} />
              </div>
            </div>
          </div>
        )}

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Series
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ListaDeLinks lista={props.heroe.series.items} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Stories
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ListaDeLinks lista={props.heroe.stories.items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleDeHeroe;
