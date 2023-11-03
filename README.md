## dummyserver
 더미데이터 생성 및 테스트용 서버
# 실행 방법

npm run start로 실행</br>
web에서 [localhost:3000](http://localhost:3000) 입력 시 현재 post_info json 형태 확인 가능</br>
url 창에 [localhost:3000/post_info](http://localhost:3000/post_info)를 입력하면 json 형태로 쉽게 받아올 수 있다.</br>

# DB

현재 AWS 서버에 올라가있다.</br>
ip는 3.39.225.117 port는 3306</br>
id: macro, pw:macro</br>
[HeidiSQL](https://www.heidisql.com/) 다운 받아서 실행하면 dummyData를 쉽게 생성하고 관리할 수 있다.</br>

# 23/11/03
## 추가 사항
- mysql schema 설계
- / : main 화면. post_info 예쁜 json 형태
- /post_info : post_info json api
- 아직 사진부분은 구현 하지 않았다