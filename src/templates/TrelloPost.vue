<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <g-image style="width: 300px" :src="$page.post.image" />
    <div v-html="$page.post.content" />
    <hr />
    <h3>Demo / Preview</h3>
    <ul>
      <li v-for="(attachment, index) in $page.post.attachments" :key="index">
        <a :href="attachment" v-if="attachment !== '' ">{{ attachment }}</a>
        <a :href="attachment" v-else class="visibledata">-</a>

        <!-- <p v-if="attachment !== '' ">aaa</p> -->
        <!-- <p v-else>bbbb</p> -->
      </li>
    </ul>
  </Layout>
</template>

<page-query>

query TrelloPost($id: ID!){
  post : trelloPost (id: $id){
    title,
    content,
    image,
    attachments
  }
}

</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss">
.visibledata {
    display: none;
    visibility: hidden;
}
</style>