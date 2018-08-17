import React, { Component } from 'react';
import {
  govukButton,
  govukHeader,
  govukHeaderContainer,
  govukHeaderLogo,
  govukHeaderLink,
  govukHeaderLogotype,
  govukHeaderLogotypeCrown,
  govukBreadcrumbs,
  govukBreadcrumbsList,
  govukBreadcrumbsListItem,
  govukBreadcrumbsLink,
} from "govuk-frontend-emotion";

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>GOV.UK</Header>
        <div className={govukBreadcrumbs}>
          <ol className={govukBreadcrumbsList}>
            <li className={govukBreadcrumbsListItem}>
              <a className={govukBreadcrumbsLink} href="#">Home</a>
            </li>
            <li className={govukBreadcrumbsListItem}>
              <a className={govukBreadcrumbsLink} href="#">Passports, travel and living abroad</a>
            </li>
            <li className={govukBreadcrumbsListItem} aria-current="page">Travel abroad</li>
          </ol>
        </div>
        <button className={govukButton}>Hi</button>
      </div>
    );
  }
}

export default App;
