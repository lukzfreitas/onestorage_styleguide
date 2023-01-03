import Input from "./Input";
import Title from "./Title";

interface TableProps {
  title: string;
  header: string[];
  rows: { key: string; columns: string[] }[];
}

const Table = (props: TableProps) => {
  return (
    <div className="p-3">
      <Title label={props.title} />
      <div className="row">
        <div className="col-8">
          <Input key="search" placeholder="Pesquisar" />
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary">
            Pesquisar
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="list-group" id="list-tab" role="tablist">
            <section
              className="list-group-item list-group-item-secondary"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              style={{ cursor: "pointer" }}
              aria-controls="home"
            >
              <div className="row">
                {props.header.map((item, index) => (
                  <div key={index} className="col">
                    {item}
                  </div>
                ))}
              </div>
            </section>
            {props.rows.map((row) => (
              <section
                key={row.key}
                className="list-group-item list-group-item-action"
                id="list-home-list"
                data-toggle="list"
                role="tab"
                style={{ cursor: "pointer" }}
                aria-controls="home"
              >
                <div className="row">
                  {row.columns.map((column: string, index: number) => (
                    <div key={index} className="col">
                      {column}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
