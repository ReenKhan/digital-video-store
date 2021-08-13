import "../css/Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 MFlix  
    </span>
  );
};

export default Header;
