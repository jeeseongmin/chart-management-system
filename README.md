# Chart System

## Outline

내가 원하는 차트 모양을 만들어보고, 해당 차트의 옵션들을 복사하여 사용할 수 있는 기능.

## Needs

echart는 원하는대로 커스텀하기에 좋지만, 자유도가 높다보니 사용하기에 좀 어려울 수 있다.

그렇기 때문에 사용자가 실제로 UI를 클릭해서 만들어보고 원하는 모양이 나왔을 경우에 그 옵션을 가져다가 사용할 수 있도록 한다면, 편리하게 echart를 응용할 수 있게 된다.

## Work Flow

1. 워크 스페이스를 생성한다.
2. 차트를 생성한다.
3. 차트 생성 시 모달 창 내에서 여러가지 설정이 가능하다.
    1. 차트 타입
    2. 차트 명
    3. 데이터 선택 (Excel로 직접 입력, 예시 데이터 선택 가능)
    4. 각종 옵션 (추후 정리)

## Data Modeling

### 워크스페이스

#### Definition

개인이 여러 차트를 만들어 사용할 수 있는 작업 공간

#### Schema

```javascript
const workspaceSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
  },
  ...
})
```

### 차트

#### Definition

개인이 UI 설정값들을 사용하여 보여지는 차트

#### Schema

```javascript
const chartSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 20,
  },
  description: {
    type: String,
    maxlength: 30,
  },
  ...
});
```

### 유저

#### Definition

본인의 워크스페이스를 만들고 차트를 테스트해볼 수 있는 권한을 가진 개인

#### Schema

```javascript
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 10,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  ...
});
```

## TASK

### FRONTEND

- [ ] 차트 관리 페이지
- [ ] 차트 생성 페이지
- [ ] echart 라이브러리 검토
- [ ] ...

### BACKEND

- [ ] 데이터 모델링 및 스키마 정의
- [ ] 예시 데이터 구축 (워크스페이스, 차트)
- [ ] 카카오톡 로그인
- [ ] ...