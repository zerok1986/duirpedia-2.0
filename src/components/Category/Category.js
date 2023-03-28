/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSwapiData } from '../../services/swapi'
import './Category.css'

function Category({ category }) {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getSwapiData(category)
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [category])

  return (
    <div className="category">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <ul>
        {data.map((item) => (
          <li key={item.url}>
            <a
              href="#"
              onClick={() =>
                navigate(`/${category}/${item.url.split('/').slice(-2, -1)[0]}`)
              }
            >
              {item.name || item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
