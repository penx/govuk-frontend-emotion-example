import React from 'react';
import {
  govukButton,
  govukHeader,
  govukHeaderContainer,
  govukHeaderLogo,
  govukHeaderLink,
  govukHeaderLogotype,
  govukHeaderLogotypeCrown,
} from "govuk-frontend-emotion";

export default (props) => <header className={govukHeader}>
  <div className={govukHeaderContainer}>
    <div className={govukHeaderLogo}>
      <a href="#" className={govukHeaderLink}>
        <span className={govukHeaderLogotype} {...props} />
      </a>
    </div>
  </div>
</header>
