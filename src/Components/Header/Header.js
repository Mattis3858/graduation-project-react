import './Header.css';

function Header() {
  return (
    <div class="header">
      <a href="logo"class="logo">Logo</a>
      <div class="header-right">
        <input type="search" placeholder="Search..."></input>
        <a class="active" href="">關於我們</a>
        <a href="">最新消息</a>
        <a href="#contact">聯絡資訊</a>
        <a href="#">登入/註冊</a>
      </div>
    </div>
  );
}

export default Header;