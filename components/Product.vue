<template>
    <div class="news_container__item new">
      <img src="../assets/img/newsImg/newImg.jpg" class="new__img" alt="" />
      <div class="new__content new_info">
        <h1 class="new_info__title">
          {{title}}
        </h1>
        <p class="new_info__paragraph">
          {{description}}----{{description2}}
        </p>
        <div class="new_info__footer new_info_footer">
          <p class="new_info_footer__publish_time">{{time}}</p>
          <p class="new_info_footer__author">
            Автор: <span>{{author}}</span>
          </p>
        </div>
        <hr />
        <div class="new_info__reactions">
          <svg
            width="18"
            class="main_info_footer__likes_img"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 14.4504C9.3355 14.8212 9.33556 14.8211 9.33566 14.821L9.33599 14.8207L9.33719 14.8196L9.34172 14.8155L9.35913 14.7997L9.42608 14.7386C9.48451 14.6851 9.56991 14.6066 9.67843 14.5059C9.89544 14.3046 10.205 14.0146 10.5763 13.6589C11.3185 12.9479 12.3096 11.9724 13.3018 10.9167C13.4154 10.7959 13.5291 10.674 13.6425 10.5511C13.473 10.741 13.3022 10.9297 13.1312 11.1165C12.014 12.3371 10.8956 13.467 10.0558 14.2923C9.6361 14.7047 9.2865 15.0406 9.04208 15.2731C9.02769 15.2868 9.01366 15.3002 9 15.3132C8.98634 15.3002 8.97231 15.2868 8.95792 15.2731C8.7135 15.0406 8.3639 14.7047 7.94421 14.2923C7.10438 13.467 5.98599 12.3371 4.86883 11.1165C4.69781 10.9297 4.52704 10.741 4.35748 10.5511C4.47093 10.674 4.58463 10.7959 4.69818 10.9167C5.69045 11.9724 6.68146 12.9479 7.42365 13.6589C7.79498 14.0146 8.10456 14.3046 8.32157 14.5059C8.43009 14.6066 8.51549 14.6851 8.57392 14.7386L8.64087 14.7997L8.65828 14.8155L8.66281 14.8196L8.66401 14.8207L8.66434 14.821C8.66444 14.8211 8.6645 14.8212 9 14.4504ZM9 14.4504L9.3355 14.8212L9 15.1248L8.6645 14.8212L9 14.4504ZM7.34375 1.67448C7.38425 1.70826 7.42416 1.74207 7.46343 1.77578C7.07805 1.49692 6.67427 1.22193 6.3054 1.00476C6.08955 0.877679 5.8763 0.764814 5.67948 0.682323C5.49441 0.604755 5.27505 0.532636 5.0625 0.532636C3.5266 0.532636 2.37174 0.817562 1.61774 1.57631C0.863535 2.33527 0.625 3.4535 0.625 4.82149C0.625 5.18105 0.740216 5.56879 0.911569 5.95498C0.885749 5.90443 0.86101 5.85456 0.837382 5.80539C0.602853 5.31736 0.5 4.94343 0.5 4.68445C0.5 3.18863 0.888577 2.17447 1.58973 1.52521C2.29857 0.868839 3.41794 0.5 5.0625 0.5C5.36565 0.5 5.73703 0.619191 6.15213 0.84328C6.56057 1.06377 6.97165 1.36404 7.34375 1.67448ZM11.6941 1.00474C11.3261 1.22138 10.9235 1.49555 10.539 1.77371C10.5775 1.74068 10.6166 1.70757 10.6562 1.67448C11.0283 1.36404 11.4394 1.06377 11.8479 0.84328C12.263 0.619191 12.6344 0.5 12.9375 0.5C14.5821 0.5 15.7015 0.868623 16.4103 1.52487C17.1114 2.17398 17.5 3.18809 17.5 4.68445C17.5 4.94343 17.3971 5.31736 17.1626 5.80539C17.139 5.85457 17.1142 5.90444 17.0884 5.95499C17.2598 5.5688 17.375 5.18105 17.375 4.82149C17.375 3.4535 17.1365 2.33527 16.3823 1.57631C15.6283 0.817563 14.4734 0.532636 12.9375 0.532636C12.7249 0.532636 12.5055 0.604701 12.3203 0.682291C12.1234 0.764786 11.91 0.877657 11.6941 1.00474Z"
              fill="#F2F2F2"
              stroke="#4F4F4F"
            />
          </svg>
          <span class="main_info_footer__likes_count">20</span>
          <svg
            width="17"
            height="17"
            class="main_info_footer__comments"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.50136 0C10.7737 0 12.9093 0.883456 14.5133 2.48823C17.8289 5.80376 17.8289 11.1978 14.5133 14.5134C12.8879 16.1395 10.6994 17 8.48238 17C7.27382 17 6.05736 16.7445 4.9192 16.2178C4.58384 16.0833 4.26983 15.9568 4.04442 15.9568C3.78499 15.9584 3.43619 16.0786 3.09925 16.1948C2.40796 16.4321 1.54742 16.7279 0.910717 16.0936C0.276384 15.4585 0.569031 14.6004 0.804731 13.9099C0.920999 13.5698 1.04043 13.2186 1.04043 12.9529C1.04043 12.7346 0.935236 12.4562 0.773884 12.0552C-0.707545 8.85591 -0.0225914 5.00019 2.49022 2.48902C4.09425 0.884247 6.22899 0 8.50136 0ZM8.50215 1.18638C6.54616 1.18638 4.70881 1.94724 3.32862 3.32818C1.16619 5.48897 0.577731 8.80688 1.86301 11.5854C2.04809 12.0433 2.22684 12.4894 2.22684 12.9529C2.22684 13.4156 2.06786 13.8814 1.92786 14.2927C1.81239 14.6312 1.63759 15.1421 1.7499 15.2544C1.85984 15.3683 2.37395 15.1888 2.71327 15.0725C3.1206 14.9333 3.58251 14.7736 4.04046 14.7704C4.49921 14.7704 4.93185 14.9444 5.3898 15.1287C8.19527 16.4258 11.5133 15.8358 13.6749 13.675C16.527 10.8213 16.527 6.17945 13.6749 3.32739C12.2939 1.94645 10.4574 1.18638 8.50215 1.18638ZM11.6239 8.03787C12.0605 8.03787 12.4148 8.39141 12.4148 8.82878C12.4148 9.26616 12.0605 9.6197 11.6239 9.6197C11.1873 9.6197 10.8298 9.26616 10.8298 8.82878C10.8298 8.39141 11.1802 8.03787 11.6168 8.03787H11.6239ZM8.45319 8.03787C8.88979 8.03787 9.24413 8.39141 9.24413 8.82878C9.24413 9.26616 8.88979 9.6197 8.45319 9.6197C8.01659 9.6197 7.65909 9.26616 7.65909 8.82878C7.65909 8.39141 8.00868 8.03787 8.44607 8.03787H8.45319ZM5.28216 8.03787C5.71876 8.03787 6.0731 8.39141 6.0731 8.82878C6.0731 9.26616 5.71876 9.6197 5.28216 9.6197C4.84556 9.6197 4.48806 9.26616 4.48806 8.82878C4.48806 8.39141 4.83844 8.03787 5.27504 8.03787H5.28216Z"
              fill="#4F4F4F"
            />
          </svg>
          <nuxt-link :to="`/products/${_id}`">КЛИКНУТЬ</nuxt-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    title: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    description2: {
      type: String,
      default: "",
    },

    time: {
      type: String,
      default: "",
    },
    _id:{
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    }
  },
  mounted() {
    console.log('product component')
  }

};
</script>


<style lang="scss" scoped>
.product-list {
  display: flex;
}

body {
  background-color: #e5e5e5;
}
.container {
  width: 100%;
  max-width: 1368px;
  margin: 0 auto;
  background-color: #e5e5e5;
}
.main {
  display: flex;
  padding-top: 32px;
}
.main_img {
  width: 750px;
  height: 500px;
  margin-right: 43px;
}
.main_content {
  max-width: 540px;
}

.main_content__title {
  font-family: poppinsRegular;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  color: #e8211d;
}
.main_content__paragraph {
  font-family: ibmPlexSerifSemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 2.1333rem;
  color: #333333;
  margin-top: 50px;
}

.main_content__description {
  display: none;
}

.main_info_footer {
  display: flex;
  margin-top: 46px;
  align-items: center;
}

.main_info_footer__publish_time {
  margin-right: auto;
  font-family: poppinsRegular;
  font-size: 0.8667rem;
}
.main_info_footer__author {
  margin-right: 10px;
  font-family: poppinsRegular;
  font-size: 0.8667rem;
}

.main_info_footer__author span {
  font-size: 0.8667rem;
}

.main_info_footer__likes_count {
  margin-left: 7px;
  margin-right: 19px;
  font-family: poppinsMedium;
  font-size: 0.7333rem;
}
// Конец стилей блока main
// Стили блока news
.news__filters {
  padding: 13px 34px 14px 15px;
  max-width: 770px;
  max-height: 54px;
  background: #0e1e32;
  margin-top: 66px;
  margin-bottom: 8px;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.filters__title {
  color: #f2f2f2;
  font-family: poppinsSemiBold;
  font-size: 1.2rem;
}
.filters__item {
  color: rgba(242, 242, 242, 0.8);
  font-family: poppinsSemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9333rem;
}

.news_items {
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  // padding-bottom: 60px;
}
.new {
  width: 438px;
  height: 520px;
  margin-bottom: 30px;
  margin-right: 26px;
  background: #ffffff;
  box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
  border-radius: 3px;
}

.new:nth-child(3n) {
  margin-right: 0;
}
.new__img {
  width: 438px;
  height: 210px;
}
// .new_row_last {
//   margin-right: 0;
// }
.new_info {
  width: 100%;
  padding: 15px 25px 20px 25px;
}
.new_info__title {
  // font-family: ibmPlexSerifSemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 27px;
  color: #4f4f4f;
}
.new_info__paragraph {
  font-family: nunitoSansLight;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  margin-top: 17px;
  line-height: 22px;
  color: rgba(79, 79, 79, 0.8);
}
.new_info_footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
}
hr {
  width: 100%;
}
.new_info__reactions {
  display: flex;
  justify-content: center;
  margin-top: 19px;
}

.container_pagination_btns {
  margin-top: 53px;
  display: flex;
  margin-bottom: 60px;
  justify-content: center;
}

.container_pagination_btns--active {
  background-color: red !important;
  width: 25px !important;
}

.container_pagination_btns__item {
  width: 15px;
  margin-right: 17px;
  height: 4px;
  background-color: #ff6f6c;
}

.container_pagination_btns__btn {
  display: none;
  width: 215px;
  text-align: center;
  height: 50px;
  background: #0e1e32;
  font-family: poppinsLight;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 31px;
  letter-spacing: 0.02em;
  color: #ffffff;
}

@media screen and (max-width: 1440px) {
  .container {
    max-width: 1195px;
    //   padding: 0 122px 0 123px;
    //   background-color: #e5e5e5;
  }
  .main_img {
    width: 611px;
    height: 411px;
    margin-right: 43px;
  }
  .main_content__paragraph {
    font-family: ibmPlexSerifSemiBold;
    font-style: normal;
    font-weight: 600;
    font-size: 2.1333rem;
    color: #333333;
    margin-top: 50px;
  }
  .new {
    width: 390px;
    height: 520px;
    margin-bottom: 22px;
    margin-right: 10px;
    background: #ffffff;
    box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
    border-radius: 3px;
  }

  .new:nth-child(3n) {
    margin-right: 0;
  }

  .new__img {
    width: 390px;
    height: 210px;
  }
  .new_info__reactions {
    margin-top: 10px;
  }
}
@media screen and (max-width: 768px) {
  body {
    background-color: #fff;
  }
  .container {
    max-width: 738px;
    background-color: #fff;
  }
  .main {
    flex-direction: column;
  }
  .main_img {
    width: 737px;
    height: 500px;
  }

  .main_content__paragraph {
    margin-top: 21px;
  }

  .main_content__description {
    // max-width: 540px;
    margin-top: 15px;
    display: block;
    font-family: poppinsLight;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: rgba(51, 51, 51, 0.85);
  }

  .main_info_footer {
    display: flex;
    margin-top: 37px;
  }

  // Конец стилей блока main
  // Стили блока news

  .news_items {
    padding-bottom: 50px;
  }
  .new {
    width: 358px;
    margin-bottom: 22px;
    margin-right: 22px;
  }
  .new:nth-child(3n) {
    margin-right: 22px;
  }
  .new:nth-child(2n) {
    margin-right: 0;
  }
  .new__img {
    width: 358px;
    height: 210px;
  }

  .new_info {
    padding: 12px 20px 20px 20px;
  }

  .new_info__paragraph {
    margin-top: 15px;
  }
  .new_info_footer {
    margin-top: 21px;
    margin-bottom: 3px;
  }
  hr {
    width: 100%;
  }
  .new_info__reactions {
    margin-top: 15px;
  }

  @media screen and (max-width: 360px) {
    .container {
      padding: 0;
    }
    .main {
      // padding-top: 28px;
      padding: 28px 16px 0 15px;
    }
    .main_img {
      width: 319px;
      height: 173px;
    }

    .main_content__paragraph {
      margin-top: 14px;
      font-size: 18px;
      line-height: 23px;
    }

    .main_content__description {
      width: 320px;
      //   margin-top: 15px;
      //   display: block;
      //   font-family: poppinsLight;
      //   font-style: normal;
      //   font-weight: 300;
      //   font-size: 15px;
      //   line-height: 22px;
      //   color: rgba(51, 51, 51, 0.85);
    }

    .main_info_footer {
      display: flex;
      margin-top: 16px;
    }
    .main_info_footer__likes_count {
      margin-right: 15px;
    }

    // Конец стилей блока main
    // Стили блока news

    .filters {
      margin-top: 25px;
      width: 100vw;
      height: 189px;
    }
    .news__filters {
      // position: absolute;
      height: 189px;
      flex-direction: column;
      max-height: 189px;
      left: 0;
      // margin: 0;
      margin-top: 25px;
      margin-bottom: 25px;
    }

    // .fake {
    //   margin-top: 25px;
    //   margin-bottom: 25px;
    //   display: block;
    //   width: 100vw;
    //   height: 189px;
    // }

    .news_items {
      padding-bottom: 50px;
    }
    .new {
      width: 360px;
      margin-bottom: 22px;
      margin-right: 0px;
    }
    .new__img {
      width: inherit;
      height: 210px;
    }

    .new_info {
      padding: 12px 20px 20px 20px;
    }

    .new_info__paragraph {
      margin-top: 15px;
    }
    .new_info_footer {
      margin-top: 21px;
      margin-bottom: 3px;
    }
    hr {
      width: 100%;
    }
    .new_info__reactions {
      margin-top: 15px;
    }

    .container_pagination_btns__btn {
      display: block;
    }

    .container_pagination_btns__item {
      display: none;
    }
  }
}
</style>
