import styled from "styled-components";

const MENU_ITEMS = [
  "Activity",
  "Calendar",
  "Bookmarks",
  "Budget",
  "Notes",
  "Chat",
];

const Sidebar = () => (
  <SidebarWrapper>
    <div className="sidebar-logo">huddle</div>
    <div className="sidebar-menu">
      {MENU_ITEMS.map((itm) => (
        <div key={itm} className="sidebar-menu-item">
          {itm}
        </div>
      ))}
    </div>
    <div className="sidebar-bottom">
      <div className="sidebar-menu-item">Settings</div>
      <div className="sidebar-menu-item">Help</div>
    </div>
  </SidebarWrapper>
);

export default Sidebar;

const SidebarWrapper = styled.div`
  background-color: white;
  border-right: 0.5px solid #dfdfdf;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;

  .sidebar-logo,
  .sidebar-menu {
    color: #ccc9c9;
    cursor: pointer;
    font-size: 14px;
    font-weight: bolder;
    letter-spacing: 2px;
    margin: 20px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .sidebar-menu {
    text-align: left;

    .sidebar-menu-item {
      font-size: 12px;
      margin: 20px 0px;

      &:hover {
        color: gray;
      }
    }
  }

  .sidebar-bottom {
    margin-bottom: 15px;

    .sidebar-menu-item {
      cursor: pointer;
      font-size: 13px;
      margin: 10px 20px;

      &:hover {
        color: gray;
      }
    }
  }
`;
