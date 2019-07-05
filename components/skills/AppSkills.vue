<template>
    <section class="section-skills">
        <ul class="skills-container">
            <li v-for='(skill, key) in skills' :key="key" class="skills-box">
                <img :src="skill.logo" class='skills-box__logo u-margin-bottom-small' :alt="skill.imageAlt">
                <h3 class="heading-tertiary u-margin-bottom-small">{{ skill.name }}</h3>
                <p class='skills-box__text'> {{ skill.description }} </p>
                <a :href="skill.mainCert" target="_blank" class="skills-box__certificate skills-box__certificate--main">{{ skill.mainCertName }}</a>
                <a :href="skill.certURL" target="_blank" class="skills-box__certificate">{{ skill.certName }}</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                {   name: 'HTML5',
                    logo: require('@/assets/img/HTML5.svg'),
                    description: 'Creating page structure, adding headings, paragraphs, links, images, ordered & unordered lists, tables, quotations, atributes...',
                    certURL: 'https://www.freecodecamp.org/certification/inga-balcune/responsive-web-design',
                    certName: 'freeCodeCamp Certificate',
                    imageAlt: 'HTML5 logo'
                },
                {   name: 'CSS',
                    logo: require('@/assets/img/css_logo.svg'),
                    description: 'Adding styles and flavors to web pages with right fonts, colors, sizing buttons, background images and more. Using flexbox and grid to create responsiviness for desktop and mobile.',
                    certURL: 'https://www.freecodecamp.org/certification/inga-balcune/responsive-web-design',
                    certName: 'freeCodeCamp Certificate',
                    imageAlt: 'CSS logo'
                },
                {   name: 'Sass',
                    logo: require('@/assets/img/sass_logo.png'),
                    description: 'Creating page structure, adding headings, paragraphs, links, images, ordered & unordered lists, tables, quotations, atributes...',
                    certURL: '',
                    certName: '',
                    imageAlt: ''
                },
                {   name: 'Javascript',
                    logo: require('@/assets/img/javascript_logo.svg'),
                    description: 'Creating page structure, adding headings, paragraphs, links, images, ordered & unordered lists, tables, quotations, atributes...',
                    mainCert: 'https://www.freecodecamp.org/certification/inga-balcune/javascript-algorithms-and-data-structures',
                    mainCertName: 'freeCodeCamp Certificate',
                    certURL: 'https://www.udemy.com/certificate/UC-9XDGCWFO/',
                    certName: 'Udemy Certificate',
                    imageAlt: 'Javascript logo'
                },
                {   name: 'VueJS',
                    logo: require('@/assets/img/vuejs_logo.png'),
                    description: 'Creating page structure, adding headings, paragraphs, links, images, ordered & unordered lists, tables, quotations, atributes...',
                    certURL: 'https://www.udemy.com/certificate/UC-9109QQHJ/',
                    certName: 'Udemy Certificate',
                    imageAlt: 'VueJS logo'
                },
                
            ]
        }
    }

}
</script>

<style lang='scss'>

.section-skills {
    padding: 15rem 0;
    background-image: 
        linear-gradient(
            to right bottom,
             rgba($color-primary-light,.6), 
             rgba($color-primary-dark, .6)),
        url(../../assets/img/Botanic-small.jpg);
    background-size: cover;
    background-position: center;
    transform: skewY(-7deg);
    margin-top: -15rem;

        & > * {
            transform: skewY(7deg);
        }

        // add image with higher resolution here and in skills section add smaller image
    @media (min-resolution: 192dpi) and (min-width: 37.5em), 
    (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    (min-width: 125em) {
        background-image: 
        linear-gradient(
            to right bottom,
             rgba($color-primary-light,.6), 
             rgba($color-primary-dark, .6)),
        url(../../assets/img/Botanic.jpg);
    }
}

.skills-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 15rem;
    list-style-type: none;

    @include respond(tab-port) { 
        margin: 0 5rem;
    }
    

    .skills-box {
        background-color: rgba($color-white, .8);
        font-size: 1.5rem;
        padding: 3rem;
        margin: 2rem;
        max-width: 25rem;
        min-width: 20rem;
        min-height: 37rem;
        max-height: 50rem;
        text-align: center;
        border-radius: 3px;
        box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
        transition: transform .2s;
        position: relative;

        @include respond(phone) { 
            max-width: 35rem;
            min-width: 30rem;
         }

        &__logo {
            width: 35%;

            @include respond(phone) { 
                width: 20%;
             }
        }

        &__icon {
            font-size: 6rem;
            margin-bottom: .5rem;
            display: inline-block;
            background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
            color: transparent;
        
        }

        &:hover {
            transform: translateY(-1rem) scale(1)
        }

        &__text {
            // padding: 0 1rem;
            // text-align: left;
            text-decoration: none;
        }

        &__certificate {
            font-size: 1.2rem; 
            text-decoration: none;
            display: block;
            text-align: right;
            position: absolute;
            bottom: 1rem;
            right: 2.5rem;
            margin-top: .5rem;
            color: $color-primary;

            &--main {
                padding-top: 1rem;
                position: absolute;
                bottom: 3rem;
            }

            &:link,
            &:visited {
                color: $color-primary-dark;
                background-color: transparent;
                text-decoration: none;
                // text-transform: uppercase;
                display: inline-block;
                transition: all .2s;

            }

            &:hover, 
            &:active {
                color: $color-primary-dark;
                box-shadow: 0 1rem 2rem rgba($color-black, .4);
                transform: rotate(-5deg) scale(1.3);
            }
        }

      

    }

}




</style>
