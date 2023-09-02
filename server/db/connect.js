// 데이터베이스 관련 코드를 관리
const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url);
}