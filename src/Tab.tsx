interface MenuItem {
  key: number;
  label: string;
}

interface TabProps {
  menuItens: MenuItem[];
  menuSelected: number;
  onSelectMenuItem: Function;
}

const Tab = (props: TabProps) => {
  const selectMenuItem = (key: number) => props.onSelectMenuItem(key);

  return (
    <section className="mt-3">
      <ul className="nav nav-tabs">
        {props.menuItens.map((item) => (
          <li
            role={"presentation"}
            key={item.key}
            onClick={() => selectMenuItem(item.key)}
            className="nav-item cursor"
            style={{ cursor: "pointer" }}
          >
            <div
              className={
                item.key == props.menuSelected
                  ? "nav-link active"
                  : "nav-link text-primary"
              }
            >
              {item.label}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tab;
