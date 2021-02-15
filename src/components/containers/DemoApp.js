// vendor modules
import React from 'react';
// components
import Search from '../controls/Search/Search';
// ui
import { GlobalStyle, DemoFrame, AppBody, Head } from 'ui/DemoApp';

export default function DemoApp() {
  return (
    <DemoFrame>
      <AppBody>
        <GlobalStyle />

        <Head>
          <Search />
        </Head>
      </AppBody>
    </DemoFrame>
  );
}
