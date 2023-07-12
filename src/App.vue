<!-- <template>
  <q-layout class="bg-black ">
    <q-header :elevated="isNavbarElevated" reveal class="text-white">
      <q-page-sticky expand position="top" class="bg-transparent mobile-hide platform-ios-hide platform-android-hide">
        <q-toolbar class="justify-center">
          <q-tabs v-model="selected_tab" shrink>
            <q-tab :style="[
              selected_tab == 'id_home'
                ? { color: theme_color }
                : { color: colorWhite },
            ]" class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_home')"
              style="width: 90px; min-height: auto !important" label="Home" />
            <q-tab :style="[
              selected_tab == 'id_about'
                ? { color: theme_color }
                : { color: colorWhite },
            ]" class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_about')"
              style="width:90px;min-height:auto; !important;" label="About" />
            <q-tab :style="[
              selected_tab == 'id_skills'
                ? { color: theme_color }
                : { color: colorWhite },
            ]" class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_skills')"
              style="width: 90px; min-height: auto !important" label="Skills" />
            <q-tab :style="[
              selected_tab == 'id_education'
                ? { color: theme_color }
                : { color: colorWhite },
            ]" class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_education')"
              style="width: 90px; min-height: auto !important" label="Education" />
            <q-tab :style="[
              selected_tab == 'id_experience'
                ? { color: theme_color }
                : { color: colorWhite },
            ]" class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_experience')"
              style="min-height: auto !important" label="Experience" />
            <q-tab :style="[
              selected_tab == 'id_projects'
                ? { color: theme_color }
                : { color: colorWhite },
            ]" class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_projects')"
              style="width: 90px; min-height: auto !important" label="Projects" />

            <q-tab :style="[
              selected_tab == 'id_contactDetails'
                ? { color: theme_color }
                : { color: colorWhite },
            ]" class="q-mr-sm q-py-xs custom_tab" @click="scrollToElement('id_contactDetails')"
              style="min-height: auto !important" label="Contact" />

          </q-tabs>
        </q-toolbar>
      </q-page-sticky>
    </q-header>

    <q-footer id="id_contactDetails" class="text-center q-pt-none q-mt-none row bg-image">
      <q-toolbar class="q-pt-none q-mt-none">
        <div class="column col">
          <div class="absolute-top text-center">
            <a href="#id_home" v-smooth-scroll :style="{ textDecoration: 'none' }">
              <q-btn fab icon="keyboard_arrow_up" class="text-white" />
            </a>
          </div>

          <div class="text-h6 text-center q-pb-sm col-12">Thanks for your visit !!</div>

         
          <div>
            <ProfileCard2 title="SUBHASH SUBRAHMANIAN" subTitle="Software Engineer"
              otherDetails="subhash20jith@gmail.com || 7012099752" phoneNumber="7012099752"
              emailId="subhash20jith@gmail.com" linkedinUrl="https://www.linkedin.com/in/subhash-subrahmanian-37245a1b1"
              instagramUrl="https://instagram.com/_lucidnex_?igshid=ZGUzMzM3NWJiOQ=="
              imgUrl="../assets/photos/1685709617796.png"></ProfileCard2>
          </div>

          <div class="text-grey text-center items-center q-pa-sm absolute-bottom text-h6">
           
            &copy;
            <a class="text-grey-8 text-italic text-decoration-none text-subtitle2"
              href="https://instagram.com/_lucidnex_?igshid=ZGUzMzM3NWJiOQ==" target="_blank">
              lucidNeX
            </a>
          </div>
        </div>
      </q-toolbar>
    </q-footer>

    <q-page-container class="q-pb-none q-mb-none">
      <div class="">
        <Home id="id_home" />
      </div>
    </q-page-container>
  </q-layout>
</template> -->




 <template>
  <transition name="vite-bounce">
    <Header :dimensions="dimensions" v-if="showHeader" />
  </transition>

  <div class="App">
    <router-view :dimensions="dimensions"></router-view>
  </div>
        <Home/>

  <Navigation />
</template> 
<script>
import { gsap } from 'gsap';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { debounce } from './utils';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Home from './components/Home.vue'
import { VITE_APP_CONFIG } from './config';

export default {
  components: {
    Header,
    Navigation,
    Home,
  },
  setup() {
    document.title = VITE_APP_CONFIG.SiteName;
    const dimensions = reactive({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    const showHeader = ref(true);
    onMounted(() => {
      window.addEventListener('resize', debouncedHandleResize);
      window.addEventListener('scroll', debounceHandleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.removeEventListener('scroll', debounceHandleScroll);
    });

    gsap.to('body', 0, { css: { visibility: 'visible' } });

    const debouncedHandleResize = debounce(() => {
      dimensions.height = window.innerHeight;
      dimensions.width = window.innerWidth;
    }, 1000);

    const debounceHandleScroll = debounce(() => {
      const heightY = document.documentElement.scrollTop;
      if (heightY < 100) {
        showHeader.value = true;
      } else {
        showHeader.value = false;
      }
    }, 100);

    return {
      dimensions,
      showHeader,
    };
  },
};
</script>
<style>
/* scroll css animation */
.vite-bounce-enter-active {
  animation: vite-bounce-in 0.5s;
}
.vite-bounce-leave-active {
  animation: vite-bounce-in 0.3s reverse;
}
@keyframes vite-bounce-in {
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(1.05);
  }
  100% {
    transform: scaleY(1);
  }
}
.overlay {
  background: linear-gradient(rgba(32, 30, 32, 0.53), rgba(30, 26, 26, 0.52));
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
