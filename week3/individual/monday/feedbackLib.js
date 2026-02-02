const { getAllFeedbacks } = require("./feedbackHandlers")

let feedbacks = []
let nextId = 1

const addOne = (sender, message, rating, platform) => {
    const feedback = {
        id: nextId,
        sender,
        message,
        rating,
        platform
    }
    nextId??
    feedbacks.push(feedback)
    return feedback
}

const getAll = () => {
    return getAllFeedbacks
}

const findById = (id) => {
    return feedbacks.find(f => f.id === id)
}

const updateById = (id, updateData) => {
    const feedback = findById(id)
    if (!feedback) return null

    Object.assign(feedback, updatedData)
    return feedback
}

const deleteById = (id) => {
    const index = feedbacks.findIndex(f => f.id === id)
    if (index === -1) return false

    feedbacks.slice(index, 1)
    return true
}

module.exports = {
    addOne,
    getAll,
    findById,
    updateById,
    deleteById
}