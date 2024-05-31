import React from "react";
import { getCategories } from "../../services/Api";
import { Link } from "react-router-dom";
const Categories = ({item}) => {
    const [categories, setCategories] = React.useState([]);
    React.useEffect(()=>{
        getCategories({}).then(({data})=> {
            setCategories(data.rows);
        })
    }, [])

    return (
        <nav className="category">
        <h3 className="category__heading">
          Danh mục
        </h3>
        <ul className="category-list">

        {categories.map((item) =>(
            <li className="category-item category-item">
            <Link to={`/${item.slug}-${item.id}`} className="category-item__link">{item.title}</Link>
          </li>
        ))}
          
        </ul>
      </nav>
)}

export default Categories;