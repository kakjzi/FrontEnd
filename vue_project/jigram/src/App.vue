<template>
  <div class="header">
    <div v-if="!step == 0">
      <ul class="header-button-left">
        <li @click="step = 0">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li @click="actionSomeThing">{{btn_right[step-1]}}</li>
      </ul>
    </div>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :step="step" :postData="postData" :upload_URL="upload_URL" 
  @write="writeContent = $event" @selectImg="upload_URL = $event"/>
  <button  v-if ="step == 0" @click="more(morePostNum)">더보기 (ajax 기능구현)</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="uploadFile" accept="image/*" type="file" id="file" class="inputfile" />
      <div v-if ="step == 0" >
        <label for="file" class="input-plus">+</label>
      </div>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue"
import Data from "./components/data.js"
import axios from 'axios'

export default {
  name: "App",
  data(){
    return {
      btn_right : ['Next','Complete'],
      postData : Data,
      morePostNum : 0,
      step : 0,
      upload_URL : '',
      writeContent : '',
    }
  },
  components: {
    Container,
  },
  methods: {
    more(morePostNum){
      axios.get(`https://kakjzi.github.io/more${morePostNum}.json`)
      .then((result)=> {
        //success
        this.postData.push(result.data);
        this.morePostNum ++;
      }).catch((err)=>{
        console.log(err);
        this.morePostNum = 0 ;
        alert("다시하면 될듯?")
      })
    },
    uploadFile(e){
      let userFile = e.target.files;
      let fileType = ['image'];
      const userFileType = userFile[0].type.split('/')
      /*console.log(파일);  -> fileLIst
      console.log(파일[0]); -> file
      console.log(파일[0].type); */ 
      if (userFileType[0] == fileType){
        let upload_URL = URL.createObjectURL(userFile[0]);
        console.log(upload_URL);
        this.upload_URL = upload_URL.valueOf(Blob);
        this.step++;
      }
    },
    actionSomeThing(){
      let dt = new Date();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let dateStr = `${monthNames[(dt.getMonth())]} ${dt.getDate()}`;

      if (this.step == 2){
        this.step = 0;
        this.postData.unshift({
          name: "신지우",
          userImage: this.postData[0].userImage,
          postImage: this.upload_URL,
          likes: 9999,
          date: dateStr,
          liked: false,
          content: this.writeContent,
          filter: "perpetua"
        })
      }else {
        this.step = 2;
      }
    }
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: rgb(219, 219, 219);
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: black;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: black;
  float: right;
  text-align: right;
  padding-right: 20px;
  width: 80px;
  cursor: pointer;
  margin-top: 10px;

 
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: rgb(219, 219, 219);;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 500px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
