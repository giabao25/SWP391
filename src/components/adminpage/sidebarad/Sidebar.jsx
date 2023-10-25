import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css"
function Sidebar() {
  useEffect(() => {
    const handleItemClick = (event) => {
      const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
      const clickedItem = event.target;
      const li = clickedItem.parentElement;

      allSideMenu.forEach((item) => {
        item.parentElement.classList.remove('active');
      });

      li.classList.add('active');
    };

    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    allSideMenu.forEach((item) => {
      item.addEventListener('click', handleItemClick);
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      allSideMenu.forEach((item) => {
        item.removeEventListener('click', handleItemClick);
      });
    };
  }, []);

  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">AdminPage</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text"> <Link to="/user">User</Link></span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-message-dots"></i>
            <span className="text">Message</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-group"></i>
            <span className="text">Team</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;