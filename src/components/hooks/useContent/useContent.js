import { NavLink } from 'react-router-dom';

import map from '../../../resources/img/map.jpg';
import house from '../../../resources/img/house-solid.svg';
import phoneIcon from '../../../resources/img/phone-solid.svg';
import printIcon from '../../../resources/img/print-solid.svg';
import envelopIcon from '../../../resources/img/envelope-solid.svg';

const useContent = (content) => {
    let sectionContent = content.map(item => {
        if(item.paragraph) {
            const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);

            return (
                <p className="section-paragraph" key={id}>
                    { item.paragraph }
                </p>
            )
        } else if(item.list) {
            const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);

            let list = item.list.map((li, i) => {
                return (
                    <li 
                        className="section-li"
                        key={id+i}
                    >
                        { li.list_item }
                    </li>
                )
            })

            return (
                <ol className="section-list" key={id}>
                    { list }
                </ol>
            )
        } else if(item.columns) {

            let columns = item.columns.map((el, i) => {
                const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);
                const { icon, subtitle, text } = el.column;
                const svgIcon = require(`../../../resources/img/${icon.icon_name}.svg`);
                // console.log(el);

                return (
                    <div className="section-column" key={ id }>
                        <div className="column-icon">
                            <a 
                                href={ icon.link }
                                className="icon-link"
                            >
                                <img 
                                    src={svgIcon} 
                                    alt={icon.icon_name} 
                                    className="icon"
                                />
                            </a>
                        </div>
                        <h4 className="column-subtitle">
                            { subtitle }
                        </h4>
                        <p className="column-text">
                            { text }
                        </p>
                    </div>
                )
            })

            return columns;

        } else if(item.button) {
            const { text, link } = item.button;
            const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);
            
            return (
                <div className='button-container' key={id}>
                    <a href={ link } className="column-button">
                        { text.toUpperCase() }
                    </a>
                </div>
            )

        } else if(item.products) {
            const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);

            let columns = item.products.map((el, i) => {
                const { subtitle, list } = el;

                let columnList = list.map((el, i) => {

                    if(el.text == 'Base Oils') {
                        return (
                            <NavLink 
                                end
                                to="/base-oil-products" 
                                className="column-item item-link" 
                                key={id+i}
                                >
                                { el.text }
                            </NavLink>
                        )
                    }
                    return (
                        <p className="column-item" key={id+i}>
                            { el.text }
                        </p>
                    )
                })

                return (
                    <div className="section-column" key={id+i}>
                        <h4 className="column-subtitle">
                            { subtitle }
                        </h4>
                        <div className="column-list">
                            { columnList }
                        </div>
                    </div>
                )
            })

            return columns;

        } else if(item.map) {
            const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);

            return (
                <img src={ map } alt={ item.map.alt } key={ id } className="column-map" />
            )
        } else if(item.offices) {
            const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);

            let offices = item.offices.map((el, i) => {
                let phone, fax, email;

                if(el.phone) {
                    phone = <a href={ `tel:${el.phone}` } className="column-link">
                                <img src={ phoneIcon } alt="Fax icon" className="icon" />
                                { el.phone }
                            </a>;
                }

                if(el.fax) {
                    fax = <a href={ `tel:${el.fax}` } className="column-link">
                                <img src={ printIcon } alt="Fax icon" className="icon" />
                                { el.fax }
                            </a>;
                }

                if(el.email) {
                    email = <a href={ `mailto:${el.email}` } className="column-link">
                                <img src={ envelopIcon } alt="Email icon" className="icon" />
                                { el.email }
                            </a>;
                }

                return (
                    <div className="section-column column-office" key={id+i}>
                        <h4 className="column-subtitle">
                            { el.city.toUpperCase() }
                        </h4>
                        <p className="column-subtitle_italic">
                            <em>
                                { el.subtitle }
                            </em>
                        </p>
                        <p className="column-adress">
                            <img src={ house } alt="House icon" className="icon" />
                            { el.adress }
                        </p>
                        { phone }
                        { fax }
                        { email }
                    </div>
                )
            });

            return offices;
        }
    })

    return sectionContent;
}

export default useContent;