import "./styles/Header.css";

export default function SidebarHeader() {
  return (
    <header>
      <div className="header-left">
        <span class="material-symbols-outlined">view_sidebar</span>
        <span class="material-symbols-outlined">download</span>
        <p>CV Application Builder</p>
      </div>
      <span class="material-symbols-outlined">light_mode</span>
    </header>
  );
}
