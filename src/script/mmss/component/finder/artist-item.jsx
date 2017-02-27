// @flow
import React from 'react';
import { observer } from 'mobx-react';


const ArtistItem = ({
  item,
  onClick,
  onClickPlay,
}: {
  item: Artist;
  onClick: (item: Artist) => void;
  onClickPlay: (item: Artist) => void;
}) => (
  <div onClick={() => { onClick(item); }}>
    <div>{item.name}</div>
    <div>
      {item.albums.length} album(s)
    </div>
    <a href="#" onClick={(ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      onClickPlay(item);
    }}>[playAll]</a>
  </div>
);

export default observer(ArtistItem);
