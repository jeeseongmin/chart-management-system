// 데이터베이스 스키마 저장
const mongoose = require('mongoose');

const WorkspaceSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Workspace', WorkspaceSchema)