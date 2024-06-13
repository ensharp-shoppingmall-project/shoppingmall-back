const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser') //bodyparser가 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해주는 것
const { User } = require("./models/User")

//application/x-www-form-urlencoded <- 이렇게 된 데이터를 분석해서 가져올 수 있게 해주는 코드
app.use(bodyParser.urlencoded({extended: true})) 
//application/json <- json 타입으로 된 것을 분석해서 가져올 수 있게 해주는 코드
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aalicen44:tummypocket10@db-shoppingmall.taznv8f.mongodb.net/?retryWrites=true&w=majority&appName=DB-ShoppingMall')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', function (req, res) {
  res.send('루트 경로')
})

app.post('/signup', (req, res) => {
  //회원 가입할 떄 피룡한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  user.save()
    .then(userInfo => {
      return res.status(200).json({
        success: true
      })
    })
    .catch(err => {
      return res.json({success: false, err})
    })

})


app.listen(port, () => console.log(`Example app listening on port ${port}!'`))