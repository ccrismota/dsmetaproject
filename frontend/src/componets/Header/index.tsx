import logo from '../../assets/img/image.svg';
import './styles.css'; 

function Header() {
  return (
    <header>
      <div className="ds-meta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por{" "}
          <a href="https://github.com/ccrismota">@Cristiano Mota</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
