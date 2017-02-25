// @flow
import React from 'react';
import { observer } from 'mobx-react';

import Header from '../shared/component/header.jsx';
import Finder from './container/finder.jsx';
import Playlist from './container/playlist.jsx';
import Player from './container/player.jsx';

import type MmssStore from './store';


class MmssApp extends React.Component {
  props: {
    store: MmssStore;
  };

  render() {
    const {
      playlist,
      finder,
      ui,
      media,
    } = this.props.store;

    return (
      <div className="MmssApp">
        <Header />

        <Finder
          {...{
            finder,
          }}
        />

        <div className="Footer">
          <Playlist
            {...{
              playlist,
              ui,
            }}
          />
          <Player
            {...{
              playlist,
              media,
            }}
          />
        </div>
      </div>
    );
  }
}

export default observer(MmssApp);