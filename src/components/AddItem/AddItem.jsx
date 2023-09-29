import React, { useState } from 'react'
import './AddItem.scss'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

const AddItem = ({ setList, setIsActive }) => {
  const [item, setItem] = useState({
    id: nanoid(),
    title: '',
    description: '',
    subtasks: [],
    completed: false
  })

  const handleChange = (e) => {
    const itemName = e.target.name
    const value = e.target.value
    setItem(prev => {
      // const subtasks = {...prev, subtasks: [...prev, ]}
      return { 
        ...prev, 
        [itemName]: value 
      }
    })
  }

  console.log(item)

  const handleSubmit = (e) => {
    e.preventDefault()
    setList(prev => (
      [item, ...prev]
    ))
    setItem({
      id: nanoid(),
      title: '',
      description: '',
      subtasks: [],
      completed: false
    })
    setIsActive(false)
  }

  return (
    <div className="add__item">
      <form className="add__form" onSubmit={handleSubmit}>
        <h3>Add New Task</h3>
        <div className="add__item-wrapper">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={item.name}
            onChange={handleChange}
            placeholder="e.g Take a break"
            required
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
          <label htmlFor="subtasks">SubTasks</label>
          <input
            type="text"
            id="subtask"
            name="subtasks"
            value={item.name}
            onChange={handleChange}
            placeholder="e.g Take Coffee"
          />
          <input
            type="text"
            id="name"
            name="name"
            value={item.name}
            onChange={handleChange}
            placeholder="e.g Workout"
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="status">Status</label>
          <select id='status'>
            <option>To do</option>
            <option>In progress</option>
            <option>Completed</option>
          </select>
        </div>
        <button onClick={() => setIsActive(false)} className="button-cancel">
          Cancel
        </button>
        <button type="submit">Create Task</button>
      </form>
    </div>
  )
}

AddItem.propTypes = {
  setList: PropTypes.func,
  setIsActive: PropTypes.func
}

export default AddItem
