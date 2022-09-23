<template>
  <main class="home">
    <h1 class="container">{{ title }}</h1>
    <div class="news container">
      <CardNews
        :img="card.imageUrl"
        :time="card.data"
        :title="card.title"
        :description="descriptionUpdate(card.description)"
        :id="card._id"
        v-for="(card, i) of productList"
        :key="i"
      />
      <!-- <div class="primary-news">
      </div> -->
      <!-- <div class="secondary-news"> -->
      <!-- </div> -->
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import CardNews from '../components/CardNews.vue'
import '~/pages/index.scss'

export default {
  name: 'index',
  // layout: 'unauthorized',
  components: {
    CardNews,
  },
  data() {
    return {
      title: 'НФТ НОВОСТИ',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.title,
        },
      ],
    }
  },

  async asyncData({ app, req }) {
    if(req){
console.log(req.rawHeaders[1].split('.')[0])
let underDomain
if(req.rawHeaders[1].split('.')[0] == 'spb' || req.rawHeaders[1].split('.')[0] == 'spb-site')
underDomain = 'Санкт-Петербурге'
else if(req.rawHeaders[1].split('.')[0] == 'msk')
underDomain = 'Москве'
else 
underDomain = 'Санкт-Петербурге'
console.log(underDomain)
return {domain:underDomain}
}else{
  return {domain:'Санкт-Петербурге'}
}
},

  // async mounted() {
  // },
  computed: {
    ...mapGetters({
      products: 'products/items',
      // cartItems: "cartItems",
    }),
    productList() {
      return this.products
    },
    // cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchAll',
    }),
    headerMove(e) {
      const header = document.querySelector('.header')
      e.deltaY > 0
        ? header.classList.add('header-hide')
        : header.classList.remove('header-hide')
    },
    cardsShow(e) {
      const cards = document.querySelectorAll('.card-news')

      cards.forEach((el) => {
        if (!el.className.includes('show')) {
          if ((el.offsetTop * 2) / 5 < window.scrollY) {
            this._quantityClasses++
            el.classList.add('show')
          }
        }
      })

      if (this._quantityClasses === cards.length) {
        delete this._quantityClasses
        document.removeEventListener('scroll', this.cardsShow)
      }
    },
    headerShow() {
      if (!window.pageYOffset) {
        document.querySelector('.header').classList.remove('header-hide')
      }
    },
    descriptionUpdate(str) {
      let result = ''
      const max = 70
      const strLength = str.length

      for (let i = 0; i <= max && i < strLength; i++) {
        result += str[i]
      }

      if (result[result.length - 1] == ' ') {
        result = result.trim()
        result += '...'
      } else {
        result += '...'
      }

      return result
    },
    // ...mapMutations({
    //   addToCart: "addToCart",
    // }),
  },
  mounted() {
    this._quantityClasses = 0
    this.cardsShow()

    document.addEventListener('scroll', this.cardsShow)
    document.addEventListener('scroll', this.headerShow)
    document.addEventListener('wheel', this.headerMove)

    this.$nextTick(async () => {
      await this.fetchProducts()
      // console.log(this.products)
      // console.log(this.products[0])
    })
  },
}
</script>

<style lang="scss"></style>