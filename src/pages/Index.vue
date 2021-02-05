<template>
  <Layout>
    <div class="work-cards">
      <WorkCardTrello v-for="edge in $page.trellopost.edges" :key="edge.node.id" :work="edge.node" />
      <WorkCard v-for="edge in $page.portfolio.edges" :key="edge.node.id" :work="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query{
  portfolio: allPortfolio( filter: {published: {eq: true}}, sortBy: "date"){
    edges{
      node{
        id
        title
        path
        cover_image(width: 700, height: 400, blur: 7, fit:cover )
        date(format: "D. MMMM YYYY")
        tags{
          id
          title
          path
        }
      }
    }
  }

  trellopost: allTrelloPost{
    edges{
      node{
        title,
        path,
        id,
        image,
        labels,
        attachments,
        date
      }
    }
  }

}

</page-query>

<script>
import WorkCard from '~/components/WorkCard.vue';
import WorkCardTrello from '~/components/WorkCardTrello.vue'

export default {
  components: {
    WorkCard,
    WorkCardTrello
  },
  metaInfo: {
    title: 'My Works'
  }
};
</script>

<style lang="scss">
</style>
