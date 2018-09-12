/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <section>
        <h2>ᠦᠪᠦᠷ ᠮᠤᠩᠭ᠋ᠤᠯ</h2>
        <p style="text-indent: 1.5em">ᠰᠤᠷᠭᠠᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠤᠨ ᠶᠠᠮᠤᠨ ᠲᠦᠷᠦᠭᠦᠬᠡᠨ ᠲᠦᠪ ᠤᠨ ᠬᠡᠪᠯᠡᠯ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ ᠤᠨ ᠬᠢᠨ ᠲᠠᠢ ᠬᠠᠮᠲᠤᠷᠠᠨ 2018 ᠤᠨ ᠤ ᠤᠯᠤᠰ ᠳᠠᠶᠠᠭᠠᠷ ᠤᠨ ᠵᠢᠭᠠᠨ ᠬᠦᠮᠦᠵᠢᠬᠦᠯᠦᠭᠰᠡᠨ ᠦᠯᠢᠭᠡᠷ ᠳᠠᠭᠤᠷᠢᠶᠠᠯ ᠰᠤᠩᠭᠤᠬᠤ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠦᠷᠨᠢᠭᠦᠯᠵᠦ᠂ ᠡᠯ᠎ᠡ ᠳᠡᠰ ᠡᠯ᠎ᠡ ᠲᠦᠷᠦᠯ ᠤᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠨᠤᠭᠤᠳ ᠤᠨ ᠳᠡᠪᠰᠢᠭᠦᠯᠦᠭᠰᠡᠨ ᠪᠠ ᠮᠤᠵᠢ ᠶᠢᠨ ᠳᠡᠰ ᠤᠨ ᠰᠤᠷᠭᠠᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠤᠨ ᠰᠠᠯᠠᠭ᠎ᠠ ᠮᠦᠴᠢᠷ ᠤᠨ ᠰᠢᠯᠢᠨ ᠳᠡᠪᠰᠢᠭᠦᠯᠦᠭᠰᠡᠨ ᠪᠦᠬᠦᠢᠯᠡ ᠨᠡᠷ᠎ᠡ ᠳᠡᠪᠰᠢᠭᠰᠡᠳ ᠢ ᠵᠤᠬᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠺᠤᠮᠢᠰ ᠡᠴᠡ ᠬᠢᠨᠠᠨ ᠰᠢᠯᠭᠠᠬᠰᠠᠨ ᠤ ᠳ᠋ᠦ᠋ᠩ ᠳᠤ 64 ᠪᠠᠬᠰᠢ ᠵᠢ ᠵᠢᠰᠢᠭᠳᠡᠭᠴᠢ ᠪᠡᠷ ᠰᠤᠩᠭᠤᠪᠠ᠃ ᠦᠪᠦᠷ ᠮᠤᠩᠭᠤᠯ ᠤᠨ ᠬᠦᠬᠡᠬᠤᠲᠠ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠤ ᠳᠡᠭᠡᠳᠤ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠫᠷᠤᠹᠸᠰᠰᠤᠷ ᠠᠯᠲᠠᠨᠰᠠᠩ ᠪᠤᠯᠤᠨ ᠪᠤᠭᠤᠲᠤ ᠬᠤᠲᠠ ᠶᠢᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠳᠤᠮᠳᠠᠳᠤ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠡᠮᠡᠭᠲᠡᠢ ᠶᠢᠨ ᠠᠯᠠᠭᠠᠳᠠᠬᠤ ᠪᠦᠮᠪᠦᠭᠡ ᠶᠢᠨ ᠲᠠᠰᠬᠠᠯᠵᠢᠭᠤᠯᠤᠬᠴᠢ ᠬᠤᠤ ᠵᠸᠨ ᠱᠸᠩ ᠬᠤᠶᠠᠷ ᠪᠠᠬᠰᠢ ᠡᠳᠡᠭᠡᠷ ᠵᠢᠰᠢᠭᠳᠡᠭᠴᠢ ᠶᠢᠨ ᠳᠤᠮᠲᠠ ᠪᠠᠬᠲᠠᠯᠴᠠᠵᠠᠢ᠃</p>
      </section>
      <section>
        <h2>ᠰᠢᠨᠬᠤᠸᠠ ᠮᠤᠩᠭ᠋ᠤᠯ ᠨᠧᠲ</h2>
        <p>ᠰᠢᠨᠬᠤᠸᠠ ᠮᠤᠩᠭ᠋ᠤᠯ ᠨᠧᠲ ᠬᠦᠬᠡᠬᠤᠳᠠ ᠶᠢᠨ 9 ᠰᠠᠷ᠎ᠠ ᠶᠢᠨ 6 ᠤ᠋ ᠡᠳᠤᠷ ᠤᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠮᠡᠳᠡᠬᠡ ( ᠪᠠᠢ ᠯᠢᠩ ᠳ᠋ᠢ ᠰᠢᠦᠢ ᠮᠧᠢ) 6 ᠤ ᠡᠳᠤᠷ ᠦᠪᠦᠷ ᠮᠤᠩᠭ᠋ᠤᠯ ᠤᠨ ᠦᠪᠡᠷᠳᠡᠬᠡᠨ ᠵᠠᠰᠠᠬᠤ ᠤᠷᠤᠨ ᠤ ᠠᠷᠪᠠᠨ ᠲᠦᠷᠪᠡᠳᠤᠬᠡᠷ 《 ᠲᠠᠯ᠎ᠠ ᠨᠤᠳᠤᠭ ᠤᠨ ᠰᠤᠶᠤᠯ ᠤᠨ ᠦᠪ ᠤᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠯᠳᠠ ᠶᠢᠨ ᠡᠳᠤᠷ》 ᠤᠨ ᠴᠤᠪᠤᠷᠠᠯ ᠦᠵᠡᠰᠬᠦᠯᠡᠩ ᠦᠪᠦᠷ ᠮᠤᠩᠭ᠋ᠤᠯ ᠤᠨ ᠦᠵᠡᠰᠬᠦᠯᠡᠩ ᠤᠨ ᠤᠷᠳᠤᠨ ᠳᠤ ᠨᠡᠬᠡᠬᠡᠯᠳᠡ ᠪᠡᠨ ᠬᠢᠪᠡ᠃
        </p>
      </section>
      <section>
        <p>ᠲᠤᠯᠤᠭᠠᠨ ᠡᠳᠤᠷ ᠦᠷᠬᠦᠯᠵᠢᠯᠡᠬᠦ ᠨᠠᠶᠢᠷ ᠤᠨ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠳᠤ ᠮᠤᠷᠢᠨ ᠮᠡᠷᠬᠡᠵᠢᠯ ᠤᠨ ᠲᠤᠭᠯᠠᠯᠳᠠ᠂ ᠮᠤᠷᠢᠨ ᠤ ᠤᠷᠤᠯᠳᠤᠭᠠᠨ᠂ ᠠᠳᠤᠭᠤᠨ ᠰᠤᠶᠤᠯ ᠤᠨ ᠦᠵᠡᠰᠬᠦᠯᠡᠩ ᠵᠡᠷᠬᠡ ᠭᠤᠤᠯ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠦᠷᠨᠢᠬᠦᠯᠵᠤ᠂ ᠢᠷᠭᠡᠳ ᠲᠦ ᠤᠶᠢᠷ᠎ᠠ ᠵᠠᠢ ᠡᠴᠡ ᠠᠳᠤᠭᠤᠨ ᠰᠤᠶᠤᠯ ᠤᠷᠠᠯᠢᠭ ᠢ ᠲᠠᠨᠢᠭᠤᠯᠵᠤ ᠮᠡᠳᠡᠷᠡᠬᠦᠯᠦᠨ᠎ᠡ᠃

        ᠲᠤᠰ ᠤᠳᠠᠭᠠᠨ ᠤ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠶᠢ ᠦᠪᠦᠷ ᠮᠤᠩᠭ᠋ᠤᠯ ᠤᠨ ᠦᠪᠡᠷᠳᠡᠬᠡᠨ ᠵᠠᠰᠠᠬᠤ ᠤᠷᠤᠨ ᠤ ᠨᠠᠮ ᠤ ᠬᠤᠷᠢᠶᠠᠨ ᠤ ᠤᠬᠠᠭᠤᠯᠬᠤ ᠬᠡᠯᠳᠡᠰ᠂ ᠬᠦᠬᠡᠬᠤᠳᠠ ᠶᠢᠨ ᠨᠠᠮ ᠤᠨ ᠬᠤᠷᠢᠶ᠎ᠠ᠂ ᠵᠠᠰᠠᠭ ᠤᠨ ᠤᠷᠳᠤᠨ ᠡᠴᠡ ᠰᠠᠨᠠᠭᠠᠴᠢᠯᠠᠭᠰᠠᠨ ᠪᠠᠶᠢᠨ᠎ᠠ᠃
    
    </p>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
