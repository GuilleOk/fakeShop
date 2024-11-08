import { correctNameCategory } from "../helpers/correctNameCategory"

/* eslint-disable react/prop-types */
const CategoryItem = ({ category, selectCategory }) => {
  const name = correctNameCategory({ name: category.category })
  
  const handleCategory = () => {
    selectCategory(category)
  }
  return (
    <div className='category' onClick={handleCategory}>
      <div className='categoryPictureContainer'>
        <img src={category.content[0].image} alt={category.category} className='categoryPicture' />
      </div>
      <div>
        <h3 className='categoryName'>{name}</h3>
      </div>
    </div>
  )
}

export default CategoryItem
