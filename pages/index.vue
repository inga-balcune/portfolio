<template>
  <div>
    <AppNavigation />
    <AppHeader />
    <main>
      <AppAboutMe id='about' />
      <AppSkills id='skills' />
      <AppProjects id='projects' />
      <AppContactForm id='contact' />
    </main>
    <AppFooter />
    
  </div>
</template>

<script>
import AppNavigation from '@/components/navigation/AppNavigation'
import AppHeader from '@/components/header/AppHeader'
import AppAboutMe from '@/components/about/AppAboutMe'
import AppSkills from '@/components/skills/AppSkills'
import AppProjects from '@/components/projects/AppProjects'
import AppContactForm from '@/components/contact/AppContactForm'
import AppFooter from '@/components/footer/AppFooter'

export default {
  components: {
    AppNavigation,
    AppHeader,
    AppAboutMe,
    AppSkills,
    AppProjects,
    AppContactForm,
    AppFooter,
    
  }
}
</script>

<style lang="scss">

</style>


