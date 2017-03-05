// @flow
import React from 'react';
import {
  inject,
  observer,
} from 'mobx-react';

import PlaylistItem, { PlaylistHeader } from '../component/playlist/item.jsx';

import type MmssEvent from '../event';
import type PlaylistObject from '../store/object/playlist';
import type UiObject from '../store/object/ui';


class Playlist extends React.Component {
  el: HTMLDivElement;
  _handleMouseEnter: () => void;
  _handleMouseLeave: () => void;
  props: {
    event: MmssEvent;
    playlist: PlaylistObject;
    ui: UiObject;
  };

  constructor() {
    super();

    this._handleMouseEnter = () => {
      this.props.event.onMouseEnterPlaylist();
    };
    this._handleMouseLeave = () => {
      this.props.event.onMouseLeavePlaylist();
    };
  }


  render() {
    const {
      items,
      nowPlayingIdx,
    } = this.props.playlist;
    const { isPlaylistShown } = this.props.ui;
    const { onClickPlaylistItem } = this.props.event;

    return (
    <div
      ref={(ref) => { this.el = ref; }}
      className={`Playlist ${isPlaylistShown ? '-shown' : ''}`}
    >
      <div className="Playlist_Header">
        <PlaylistHeader />
      </div>
      <ul className="Playlist_Inner">
        { items.map((song, idx) => (
        <li
          key={`${song.path}`}
          className="Playlist_Row"
        >
          <PlaylistItem
            item={song}
            isPlaying={nowPlayingIdx === idx}
            onClick={onClickPlaylistItem}
          />
        </li>
        )) }
      </ul>
    </div>
    );
  }

  componentDidMount() {
    this.el.addEventListener('mouseenter', this._handleMouseEnter, false);
    this.el.addEventListener('mouseleave', this._handleMouseLeave, false);
  }

  componentWillUnmount() {
    this.el.removeEventListener('mouseenter', this._handleMouseEnter, false);
    this.el.removeEventListener('mouseleave', this._handleMouseLeave, false);
  }
}

export default inject('event')(observer(Playlist));
