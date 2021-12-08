<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item active>Active action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown>

    <b-button variant="primary" disabled>
    <b-spinner small></b-spinner>
    <span class="sr-only">Loading...</span>
    </b-button>

    <b-button variant="primary" disabled>
      <b-spinner small></b-spinner>
      Loading...
    </b-button>

    <b-accordion flush>
      <b-accordion-item title="Accordion Item #1">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>flush</code> property. This is the first item's accordion body.
      </b-accordion-item>
      <b-accordion-item title="Accordion Item #2">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>flush</code> property. This is the second item's accordion body. Let's imagine this being
        filled with some actual content.
      </b-accordion-item>
      <b-accordion-item title="Accordion Item #3">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>flush</code> property. This is the third item's accordion body. Nothing more exciting
        happening here in terms of content, but just filling up the space to make it look, at least at
        first glance, a bit more representative of how this would look in a real-world application.
      </b-accordion-item>
    </b-accordion>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
