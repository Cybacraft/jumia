import React, {Component} from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import { Home, KeyboardArrowRight, Work, ShoppingCart, FreeBreakfast, Language, Computer, Tv, MobileScreenShare, ChildCare, FitnessCenter, Casino, AllInclusive } from '@material-ui/icons';
import Nav4 from './Nav4';
import List from './List';
import Gallery from './Gallery';
import Grid from './Grid';

class Land extends Component{

    state = {
        displayMenu: false,
      };

      showDropdownMenu = (event) => {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }

      hideDropdownMenu =()=> {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    
 

    render(){
        return (
            <div>
          
                <div className="bodyDiv">
                    <ul className="bodyUl">
                        <BrowserRouter>
                        <NavLink className="newAppy" onClick={this.showDropdownMenu}>
                        <li className="bodyLi"><ShoppingCart />FREE DELIVERY</li>
                        </NavLink>   { this.state.displayMenu ? ( <List/>) : (null) }
                        <NavLink className="newAppy">
                        <li className="bodyLi"><MobileScreenShare />PHONES & TABLETS</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><Computer />COMPUTING</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><Tv />ELECTRONICS</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><Home/>HOME & OFFICE</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><Work />FASHION</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><FitnessCenter />HEALTH & BEAUTY</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><Casino />GAMING</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><FreeBreakfast />GROCERY</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><Language />GLOBAL STORE</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><ChildCare />BABY PRODUCTS</li>
                        </NavLink>
                        <NavLink className="newAppy">
                        <li className="bodyLi"><AllInclusive />OTHER CATEGORIES</li>
                        </NavLink>
                        </BrowserRouter>
                    </ul>
                
                </div>
            </div>
        )

    
    }
}

export default Land;