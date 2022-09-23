<template>
  <div class="card-news">
    <div class="card-img">
      <img :src="`${img}`" alt="" />
    </div>
    <div class="card-text">
      <time>{{ time }}</time>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div>
        <nuxt-link :to="`/products/${id}`">
          подробнее
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import '~/components/card-news.scss'

export default {
  props: {
    img: { type: String },
    time: { type: String },
    description: { type: String },
    title: { type: String },
    id: { type: String }
  }
}
</script>