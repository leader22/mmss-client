// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import EntryApp from './app.jsx';
import EntryStore from './store';
import EntryEvent from './event';


export default function(musicRes: MusicJSON) {
  const store: EntryStore = new EntryStore(musicRes, location.hash);
  const event: EntryEvent = new EntryEvent(store);

  ReactDOM.render(
    <Provider event={event}>
      <EntryApp store={store} />
    </Provider>,
    document.getElementById('root')
  );
}
