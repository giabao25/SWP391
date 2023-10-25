import React, { useState, useEffect } from 'react';
import "./manage.css"
function Manager() {
    const [showSearchForm, setShowSearchForm] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      if (window.innerWidth < 768) {
        // Hide sidebar
      } else if (window.innerWidth > 576) {
        // Reset search form and button icon
        setSearchFormVisible(false);
        setSearchButtonIcon('bx-search');
      }
    }, []);
  
    const handleSearchButtonClick = (e) => {
      if (window.innerWidth < 576) {
        e.preventDefault();
        setSearchFormVisible(!showSearchForm);
  
        if (showSearchForm) {
          setSearchButtonIcon('bx-search');
        } else {
          setSearchButtonIcon('bx-x');
        }
      }
    };
  
    const handleWindowResize = () => {
      if (window.innerWidth > 576) {
        setSearchFormVisible(false);
        setSearchButtonIcon('bx-search');
      }
    };
  
    const handleDarkModeChange = (e) => {
      setDarkMode(e.target.checked);
    };
  
    const setSearchFormVisible = (visible) => {
      setShowSearchForm(visible);
    };
  
    const setSearchButtonIcon = (icon) => {
      // Update the search button icon
    };
  return (
    <section id="content">
      {/* NAVBAR */}
      <nav>
        <i className='bx bx-menu'></i>
        <a href="#" className="nav-link">Search</a>
        <form action="#">
          <div className="form-input">
            <input type="search" placeholder="Search..." />
            <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
          </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden />
        <label htmlFor="switch-mode" className="switch-mode"></label>
        <a href="#" className="notification">
          <i className='bx bxs-bell'></i>
          <span className="num">8</span>
        </a>
        <a href="#" className="profile">
          <img src="img/people.png" alt="profile" />
        </a>
      </nav>
      {/* NAVBAR */}

      {/* MAIN */}
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>
                <a className="active" href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="box-info">
          <li>
            <i className='bx bxs-calendar-check'></i>
            <span className="text">
              <h3>1020</h3>
              <p>New Order</p>
            </span>
          </li>
          <li>
            <i className='bx bxs-group'></i>
            <span className="text">
              <h3>2834</h3>
              <p>Visitors</p>
            </span>
          </li>
          <li>
            <i className='bx bxs-dollar-circle'></i>
            <span className="text">
              <h3>$2543</h3>
              <p>Total Sales</p>
            </span>
          </li>
        </ul>


        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Registered User</h3>
              <i className='bx bx-search'></i>
              <i className='bx bx-filter'></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Date Order</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="img/people.png" alt="user" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="user" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="user" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status process">Process</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="user" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="user" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="todo">
            <div className="head">
              <h3>Todos</h3>
              <i className='bx bx-plus'></i>
              <i className='bx bx-filter'></i>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded'></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded'></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded'></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded'></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded'></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
      {/* MAIN */}
    </section>
  );
}

export default Manager;