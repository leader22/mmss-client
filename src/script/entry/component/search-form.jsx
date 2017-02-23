// @flow
import React from 'react';
import { observer } from 'mobx-react';

import type { SearchResult } from '../object/search';


const SearchForm = ({
  results,
  onInput,
}: {
  results: SearchResult;
  onInput: (keyword: string) => void;
}) => {
  const _onInput = (ev: Event): void => {
    ev.preventDefault();
    if (ev.currentTarget instanceof HTMLInputElement) {
      const keyword = ev.currentTarget.value;
      onInput(keyword);
    }
  };

  return (
  <div>
    <div>
      <input name="keyword" type="text" onInput={_onInput} placeholder="keyword" />
    </div>
    <div>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  </div>
  );
};

export default observer(SearchForm);