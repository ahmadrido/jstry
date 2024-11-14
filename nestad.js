import react from 'react';
import { createRoot } from 'react-dom/cjs/react-dom.production.min';

const heading = react.createElement('h1', { className: 'h1' }, 'Biodata Perusahaan');

const list1 = react.createElement('li', null, 'Nama : Dicoding');
const list2 = react.createElement('li', null, 'Bidang : Education');
const list3 = react.createElement('li', null, 'Tagline : Decode Ideas');
const list = react.createElement('ol', null, [list1, list2, list3]);

const div = react.createElement('div', null, [heading, list]);

const root = createRoot(document.getElementById('root'));

root.render(div);
