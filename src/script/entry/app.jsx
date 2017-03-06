// @flow
import React from 'react';
import {
  inject,
  observer,
} from 'mobx-react';

import Top from '../shared/component/top.jsx';
import LoginForm from './component/login-form.jsx';
import SearchForm from './component/search-form.jsx';
import TabTrigger from './component/tab-trigger.jsx';
import TabContent from './component/tab-content.jsx';

import type EntryStore from './store';
import type EntryEvent from './event';


class EntryApp extends React.Component {
  props: {
    event: EntryEvent;
    store: EntryStore;
  };

  render() {
    const {
      search,
      ui,
      tabNames,
    } = this.props.store;
    const {
      onClickTab,
      onLoginSubmit,
      onChangeKeyword,
    } = this.props.event;

    return (
      <div className="EntryApp">
        <Top />

        <TabTrigger
          tabNames={tabNames}
          visibleTab={ui.visibleTab}
          onClick={onClickTab}
        />
        <TabContent
          tabContents={{
            login: <LoginForm
                     onSubmit={onLoginSubmit}
                     hasError={ui.hasLoginError}
                   />,
            search: <SearchForm
                      keyword={search.keyword}
                      results={search.results}
                      onChange={onChangeKeyword}
                    />,
          }}
          visibleTab={ui.visibleTab}
        />
      </div>
    );
  }
}

export default inject('event')(observer(EntryApp));
