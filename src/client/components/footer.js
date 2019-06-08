import React, { Component } from 'react';

class Footer extends Component {

  render() {

    return (
      <footer>
        <div className="wrap">
          <div className="content">
            {/* <div className="copyright">&copy; 2019 <a href="https://www.acumenicus.com/" target="_blank">Acumenicus Research LLP</a></div> */}
            © 2019 Acumenicus Research LLP. All Rights Reserved
          </div>

          <div className="social">
            <ul>
              <li className="first">
                <a href="https://www.acumenicus.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.acumenicus.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.acumenicus.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="last">
                <a href="https://www.acumenicus.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;