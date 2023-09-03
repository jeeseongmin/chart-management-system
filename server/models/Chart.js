// 데이터베이스 스키마 저장
const mongoose = require('mongoose');

const ChartSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  config: Object, // 추후 인터페이스 생성
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Chart', ChartSchema)