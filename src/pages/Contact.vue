<template>
  <Layout>
    <div class="layout">
      <h2 class="bottom-line">get in touch?</h2>
      <p>
        Jika Anda ingin menanyakan tentang proyek baru, mengobrol tentang desain
        produk, atau sekadar menyapa, jangan ragu untuk menghubungi melalui
        kontak di bawah ini.
      </p>
      <ul>
        <li>
          Telegram:
          <a class="email-link" href="https://t.me/balinux"
            >@balinux</a
          >
        </li>
        <li>
          Email:
          <a class="email-link" href="mailto:example@gmail.com"
            >ryojuniyantara@gmail.com</a
          >
        </li>
        <li>Twitter: <a class="email-link" href="https://twitter.com/rio_7"
            >@rio_7</a
          ></li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact Me",
  },
};
</script>

<style lang="scss"scoped>
h2 {
  margin-bottom: 2rem;
}
.bottom-line {
  position: relative;
}
.bottom-line::after {
  content: "";
  height: 3px;
  width: 80px;
  background: var(--accent-color);
  position: absolute;
  bottom: -10px;
  left: 0;
}
.email-link {
  text-decoration: underline;
}
</style>