import styled from "styled-components";

const Sidebar = () => (
  <SidebarWrapper>
    <div className="sidebar-logo">huddle</div>
    <div className="sidebar-menu">
      <div>Activity</div>
      <div>Calendar</div>
      <div>Bookmarks</div>
      <div>Budget</div>
      <div>Notes</div>
      <div>Chat</div>
    </div>
    <div className="sidebar-bottom">
      <div>Settings</div>
      <div>Help</div>
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

  .sidebar-logo {
    color: #ccc9c9;
    cursor: pointer;
    font-size: 13px;
    font-weight: bolder;
    letter-spacing: 2px;
    margin: 20px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;
