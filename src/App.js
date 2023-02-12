import React, { Fragment } from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPosters from './Components/RowPosters/RowPosters';
import { ORIGINALS ,ACTION,HORROR,C0MEDY} from './Constants/Constants';


function App() {
  
 
return (
	<Fragment>
  <Navbar/>
  <Banner/>
  <RowPosters size={'w400'} title={'Netflix Original'} type={ORIGINALS}/>
  <RowPosters size={'w300'} title={'Action'} type={ACTION}/>
  <RowPosters size={'w300'} title={'Horror'} type={HORROR}/>
  <RowPosters size={'w300'} title={'Comedy'} type={C0MEDY}/>
	</Fragment>
);
}
	
export default App;
