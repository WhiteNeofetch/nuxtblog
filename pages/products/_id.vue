
<template>
  <div>
    <main class="intro container--intro">
    <div class="intro__carts">
      <div class="intro__cart">
        <h1 class="intro__cart__title">{{this.item.title}}</h1>
      </div>
      <div class="intro__text">
        <h2 class="intro__content">{{ this.item.description }}</h2>
      </div>
    </div>
  </main>
  <div class="next">
    <div class="next__inner container--intro">
      <button class="next__btn"><a href="next__link">НАЗАД</a></button>
    </div>
  </div>
  <footer class="footer">
    <div class="footer__inner container--intro">
      <h3 class="2022 nft ">2022 nft</h3>
      <div class="footer__social">
        <a class="vk" href="https://vk.com/water1bear"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M15.07294,2H8.9375C3.33331,2,2,3.33331,2,8.92706V15.0625C2,20.66663,3.32294,22,8.92706,22H15.0625C20.66669,22,22,20.67706,22,15.07288V8.9375C22,3.33331,20.67706,2,15.07294,2Zm3.07287,14.27081H16.6875c-.55206,0-.71875-.44793-1.70831-1.4375-.86463-.83331-1.22919-.9375-1.44794-.9375-.30206,0-.38544.08332-.38544.5v1.3125c0,.35419-.11456.5625-1.04162.5625a5.69214,5.69214,0,0,1-4.44794-2.66668A11.62611,11.62611,0,0,1,5.35419,8.77081c0-.21875.08331-.41668.5-.41668H7.3125c.375,0,.51044.16668.65625.55212.70831,2.08331,1.91669,3.89581,2.40625,3.89581.1875,0,.27081-.08331.27081-.55206V10.10413c-.0625-.97913-.58331-1.0625-.58331-1.41663a.36008.36008,0,0,1,.375-.33337h2.29169c.3125,0,.41662.15625.41662.53125v2.89587c0,.3125.13544.41663.22919.41663.1875,0,.33331-.10413.67706-.44788a11.99877,11.99877,0,0,0,1.79169-2.97919.62818.62818,0,0,1,.63544-.41668H17.9375c.4375,0,.53125.21875.4375.53125A18.20507,18.20507,0,0,1,16.41669,12.25c-.15625.23956-.21875.36456,0,.64581.14581.21875.65625.64582,1,1.05207a6.48553,6.48553,0,0,1,1.22912,1.70837C18.77081,16.0625,18.5625,16.27081,18.14581,16.27081Z"/></svg></a>
        <a class="tg" href="https://t.me/spbsite"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg></a>
      </div>
    </div>
  </footer>
  </div>
   
</template>



<!-- <template>
  <div>
    Заголовок : {{ this.item.title }} <br>
    Картинка :
    <img :src="this.item.imageUrl" alt="" />
    <br>
    Описание1 : {{ this.item.description }} <br>
    Описание2 : {{ this.item.price }}<br>
    Количество : {{ this.item.amount }}<br>
    Категория : {{ this.item.category }}<br>
    <input type="text" v-model="model.description"/>
    <input type="text"  v-model="model.title"/>
    <button @click="Createcomments">добавить коммент</button>
    <Comment
      v-for="(comment, key) in comments"
      :key="key"
      :title="comment.title"
      :description="comment.description"
    />
  </div>
</template>-->


<script>
import { mapGetters, mapActions } from "vuex";
import MevnHeader from "../../components/layouts/Header.vue";
import Comment from "../../components/Comment.vue";
export default {
  name: "App",
   layout: 'unauthorized',
  components: {
    MevnHeader,
    Comment,
  },
  data: () => ({
    model: {
      title: "155",
      description: "155",
    },
  }),
  data() {
    return {
      title: '123',
    }
  },
  head() {
    return {
      title: 'НФТ НОВОСТИ ' + this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.title,
        },
      ],
    }
  },
  async asyncData({ params, $axios }) {
      const post = await $axios.$get(`https://ap-term.nftnews1.ru/api/v1/products/${params.id}`)
      return { post }
    },
  async mounted() {
    await this.fetchItem(this.$route.params.id);
    await this.fetchComments();
    console.log(this.item);
    console.log(this.comments);
    console.log(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      fetchItem: `products/fetchOne`,
      fetchComments: `comments/fetchAll`,
      createComment: `comments/create`,
      async Createcomments() {
        await this.createComment(this.model);
            await this.fetchComments();
          console.log(this.comments);
      },
    }),
  },
  computed: {
    ...mapGetters({
      item: `products/item`,
      comments: `comments/items`,
    }),
  },
};
</script> 

<style scoped>
/*Обнуление*/
* {
  /* outline: 1px solid #000; */
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
/*--------------------*/

body {
  background-color: rgb(255, 255, 255);
  /* background-attachment: fixed; */
  font-family: 'Montserrat', sans-serif;
}

/* модификатор */

.container--intro {
  max-width: 800px;
  margin: 0 auto;
}

.container--header {
  max-width: 460px;
  margin: 0 auto;
}



.header {
  background-color: black;
}

.header__inner {

}

.header__title {
  text-align: center;
  color: #fff;
  padding: 60px 0;
  text-transform: uppercase;
  line-height: 1.5;
}

.header__nav {
  display: flex;
  justify-content: center;
  font-size: 11px;
  text-transform: uppercase;
  padding-bottom: 74px;
}



.header__link {
  color: #fff;
  margin-right: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  transition: border 0.5s;
}

.header__link:last-child {
  margin-right: 0px;
}

.header__link:hover {
  border-bottom: 1px solid rgba(165, 165, 165, 0.605);
}

.intro__cart {
  /* background-image: url(/src/img/blogcard.png); */
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px 5px 0 0;
}

.intro__cart__title {
  font-size: 28px;
  color: black;
  padding: 220px 0 40px 60px;
}

.intro__text {
  /* background-color: rgb(131, 131, 131); */
  border: 1px solid;
  border-radius: 0 0 5px 5px;
}

.intro__content{
  color: rgb(0, 0, 0);
  padding: 36px 60px 44px 60px;
}

/* .intro__cart__perfect {
  background-image: url(/src/img/IMAGEcart.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.intro__cart__we{
  background-image: url(/src/img/we.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.subscription {
  display: flex;
  justify-content: center;
}

.subscription__title {
  color: #fff;
}

.subscription__btn {
  display: flex;
  justify-content: center;
} */

.next__inner{
  padding: 50px;
  display: flex;
  justify-content: center;
}

.next__btn{
  padding: 10px 30px;
  border-radius: 5px;
  background-color: rgb(10, 173, 248);
}

.next__btn a{
  color: #fff;
}


.footer{
  border-top: 1px solid #000;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.vk {
  margin-right: 5px;
}


@media (min-width: 900px) {
  body{
    width: 100%;
  }

}

@media (max-width: 600px) {
  .intro__cart__title{
    font-size: 35px;
    line-height: 1.5;
    padding: 220px 10px 40px 10px;
  }

  .intro__content{
    font-size: 20px;
    line-height: 1.5;
    padding: 36px 10px 44px 10px
  }

}

@media (max-width: 480px) {
  .intro__cart__title{
    font-size: 30px;
    line-height: 1.5;
    padding: 220px 10px 40px 10px;
  }

  .intro__content{
    font-size: 20px;
    line-height: 1.5;
    padding: 36px 10px 44px 10px
  }




}

@media (max-width: 390px) {
  .intro__cart__title{
    font-size: 29px;
    line-height: 1.5;
    padding: 220px 10px 40px 10px;
  }

  .intro__content{
    font-size: 20px;
    line-height: 1.5;
    padding: 36px 10px 44px 10px
  }

}

@media (max-width: 300px) {
  .intro__cart__title{
    font-size: 15px;
    padding: 220px 10px 40px 10px;
  }

}
</style>


