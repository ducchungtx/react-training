import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  { name: "Trang chủ", to: "/", exact: true },
  { name: "To do", to: "/todo", exact: false },
  { name: "To do Redux", to: "/todo-redux", exact: false },
  { name: "Call API (Basic)", to: "/call-api", exact: false },
  { name: "Call API (Redux-Saga)", to: "/call-api-redux-saga", exact: false },
  { name: "Giới thiệu", to: "/about", exact: false },
  { name: "Liên hệ", to: "/contact", exact: false }
];

const MenuLink = ({ label, to, activeOnlyWhenExtract }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExtract}
      children={({ match }) => {
        const active = match ? "active abc" : "";
        return (
          <li className={active}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  state = {};

  showMenus(menus) {
    let kq = null;
    if (menus.length > 0) {
      kq = menus.map((menu, index) => (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExtract={menu.exact}
        />
      ));
    }
    return kq;
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
      </nav>
    );
  }
}

export default Menu;
