<template>
    <section class="section-projects">
        <app-heading-H2>My Projects</app-heading-H2>
        <AppProjectsCard />

    </section>
</template>

<script>
import AppHeadingH2 from '@/components/common/AppHeadingH2'
import AppProjectsCard from '@/components/projects/AppProjectsCard'
export default {
    components: {
        AppHeadingH2,
        AppProjectsCard
    }

}
</script>

<style lang='scss'>
.section-projects {
    background-color: $color-gray-light-1;
    padding: 25rem 0 15rem 0;
    margin-top: -9rem;

    @include respond(tab-port) { 
        padding: 20rem 0 10rem 0;

        app-heading-H2 {
            margin-bottom: -2rem;
        }
     }
    
}

</style>
