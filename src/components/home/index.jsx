import React, {useState} from 'react';
import style from './index.module.scss';
import data from 'components/data/compareX.json';

const months = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December',
];

const products = ['A', 'B', 'C', 'D'];

const Home = () => {
  const [month] = useState(months[new Date().getMonth()]);
  const [search, setSearch] = useState('');
  const [q, setQ] = useState('');
  const [p1, setP1] = useState(products[0]);
  const [p2, setP2] = useState(products[1]);
  const getKey = () => p1 < p2 ? `Compare${p1}${p2}` : `Compare${p2}${p1}`;
  return <div className={style.home}>
    <div className={style.container}>
      <div className={style.title}>What would you like to compare today?</div>
      <div className={style.dropdownWrap}>
        <select value={p1} onChange={(e) => setP1(e.target.value)} name="products" id="products1">
          {products.map((prod) => <option key={prod} disabled={prod === p2} value={prod}>Product {prod}</option>)}
        </select>
        <select value={p2} onChange={(e) => setP2(e.target.value)} name="products" id="products2">
          {products.map((prod) => <option key={prod} disabled={prod === p1} value={prod}>Product {prod}</option>)}

        </select>
      </div>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
            <g fill="#9cadb9" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
              <g transform="scale(5.12,5.12)">
                <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z">
                </path>
              </g>
            </g>
          </svg>
        </div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='What can we help you find?'/>
        <button onClick={() => setQ(search)}>Search</button>
      </div>
      <div className={style.comparison}>
        <div className={style.title}>
          {month} comparison
        </div>
        <div className={style.content}>
          {
            data.monthly_comparison[month][getKey()].filter((insight) => (q === '') || (q !== '' && insight.value.toLowerCase().includes(q))).map((insight) => {
              return <div key={insight.value} className={style.row}>

                <div className={style.icon}>
                  <img
                    width="48"
                    height="48"
                    src={insight.fav.includes(p1) ? 'https://img.icons8.com/color-glass/48/new.png' : 'https://img.icons8.com/ios-filled/50/bug.png'}
                    alt="new"
                  />
                </div>
                <div className={style.text}>{insight.value}</div>
              </div>;
            })
          }
        </div>
      </div>
      <div className={style.comparison}>
        <div className={style.title}>
          Overall comparison
        </div>
        <div className={style.content}>
          {months.map((mon) => {
            const set = new Set();
            return data.monthly_comparison[mon][getKey()].map((insight) => {
              if (set.has(insight.value)) {
                return null;
              }
              if (q !== '' && !insight.value.toLowerCase().includes(q)) {
                return null;
              }
              set.add(insight.value);
              return <div key={insight.value} className={style.row}>
                <div className={style.icon}>
                  <img
                    width="48"
                    height="48"
                    src={insight.fav.includes(p1) ? 'https://img.icons8.com/color-glass/48/new.png' : 'https://img.icons8.com/ios-filled/50/bug.png'}
                    alt="new"
                  />
                </div>
                <div className={style.text}>{insight.value}</div>
              </div>;
            });
          })}
        </div>
      </div>
    </div>
  </div>;
};

export default Home;
