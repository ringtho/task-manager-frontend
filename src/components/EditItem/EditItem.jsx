import React, { useState } from 'react'
import './EditItem.scss'
import PropTypes from 'prop-types'

const EditItem = ({ setList, setIsActive, itemId, list }) => {
  const { id, title, subtasks, description, completed } = itemId
  const [item, setItem] = useState({
    id,
    title,
    subtasks,
    description,
    completed
  })

  const handleChange = (e) => {
    const itemName = e.target.name
    const value = e.target.value
    const checked = e.target.checked
    setItem((prev) => {
      return { ...prev, [itemName]: e.target.id === 'completed' ? checked : value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedList = list.map((oldItem) => {
      if (oldItem.id === id) {
        return {
          ...oldItem,
          title: item.title,
          description: item.description,
          subtasks: item.subtasks,
          completed: item.completed
        }
      }
      return oldItem
    })
    setList(updatedList)
    setIsActive(false)
  }

  console.log(itemId)

  return (
    <div className="add__item">
      <form className="add__form" onSubmit={handleSubmit}>
        <h3>Edit Task</h3>
        <div className="add__item-wrapper">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={item.title}
            onChange={handleChange}
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={item.description}
            onChange={handleChange}
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            required
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="subtasks">Subtasks</label>
          <input
            type="text"
            id="subtasks"
            name="subtask"
            value={item.subtasks}
            onChange={handleChange}
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="status">Current Status</label>
          <select id="status">
            <option>To do</option>
            <option>In progress</option>
            <option>Completed</option>
          </select>
        </div>
        <button onClick={() => setIsActive(false)} className="button-cancel">
          Cancel
        </button>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

EditItem.propTypes = {
  setList: PropTypes.func,
  setIsActive: PropTypes.func,
  itemId: PropTypes.object,
  list: PropTypes.array
}

export default EditItem
