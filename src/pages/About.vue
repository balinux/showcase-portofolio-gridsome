<template>
  <Layout>
    <div class="about">
      <div class="about-text">
        <h1>About Me</h1>
        <p>
          Halo saya Rio, saya seorang mobile developer (Flutter and React Native) di salah satu
          universitas besar di bali, dan seorang web
          developer menggunakan Laravel, vuejs, nodejs, react. Memiliki
          ketertarikan untuk menjadi full-stack developer dikarnakan dulu juga
          pernah bekerja di salah satu mitra Indosat untuk mengerjakan semua hal
          yang terkait tentang Jaringan kemputer, router, switch dan server.
        </p>
      </div>
      <div class="about-photo">
        <g-image
          src="~/assets/images/profile-rio-juniyantara-putra.jpg"
          class="image-cover"
          width="300"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About Me",
  },
};
</script>

<style lang="scss" scoped>
.about {
  &-text {
    text-align: left;
  }
}
.image-cover {
  border-radius: 5px;
  margin-top: 10%;
  &:hover {
    margin-top: 0%;
    -webkit-transition: all 0.5s 0s ease-in-out;
    -moz-transition: all 0.5s 0s ease-in-out;
    -o-transition: all 0.5s 0s ease-in-out;
    transition: all 0.5s 0s ease-in-out;
  }
}
@media screen and (min-width: 768px) {
  .about {
    display: flex;
    flex-wrap: wrap;
    &-text {
      margin-right: 30px;
      max-width: 350px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .about-text {
    margin-right: 50px;
    max-width: 600px;
  }
}
</style>

