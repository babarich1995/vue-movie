<template>

    
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
            
              <div class="card card-plain">
                 
                <div class="pb-0 text-white">
                  <h2>Welcome Back,Olivia</h2>
                <p>Welcome back please enter your details</p>
                 <button type="button" class="button mb-3">
                   <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(3.000000, 2.000000)" fill-rule="nonzero">
                        <path
                          d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                          fill="#4285F4"
                        />
                        <path
                          d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                          fill="#34A853"
                        />
                        <path
                          d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                          fill="#FBBC05"
                        />
                        <path
                          d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                          fill="#EB4335"
                        />
                      </g>
                    </g>
                  </svg>
                  {{ isLoginMode ? 'Login with Google' : 'Sign Up with Google' }}</button>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <input class="form-control" type="email" placeholder="Email" name="email" size="lg" />
                    </div>
                    <div class="mb-3">
                      <input type="password" class="form-control" placeholder="Password" name="password" size="lg" />
                    </div>
                   
                      <div class="form-group">
                        <button type="submit"  class="button1 text-dark text-bold">
                            {{ isLoginMode ? 'Login' : 'Sign Up' }}
                        </button>
                    </div>
                    
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                 <div class="form-group">
                        <a class="text-white"  style="cursor: pointer;text-decoration:none" @click="onSwitchMode()">
                            {{ isLoginMode ? 'Dont have an account? Sign Up' : 'Already have an account? Login' }}
                        </a>
                        
                    </div>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div  v-for="movie in  nowPlaying.slice(0,1)" :key="movie">
           
                 <img class="image" :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' +movie.poster_path" alt="movie.title">
                  <div class="foots">
                    <h2>{{movie?.title}}</h2>
                    <p>{{movie?.release_date}}</p>
                  </div>
                
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import axios from "axios"
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",

  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-dark-100");
    this.getNowPlaying(1);
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-dark-100");
  },

  data(){
    return {
      isLoginMode:true,
      nowPlaying:[]
    }
  },
  methods:{
    onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  },
   getNowPlaying(page){
      
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c3612c0718ad5a9e707c01215bac2e37&page= ${page}&language=en-US&region=US`,
       
     
        )
        .then(({data}) => {
          this.nowPlaying=data.results
          
          this.loading=false
        }).catch(() => {
          
        });
        },
  }
};
</script>
<style scoped>

    .form-control {
        display: block;
        width: 100%;
        outline: none;
        border: none;
        height: calc(1.5em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        background-color: transparent;
        border-bottom: 1px solid #4D4B4B;
       
       }
       .button{
width:100%;
border:1px solid #4D4B4B;
border-radius: 10px;
padding:15px 20px;
background-color:transparent;
color:white;
cursor:pointer;
margin-bottom:10px;
}
.button1{
width:100%;
border:1px solid #4D4B4B;
border-radius: 10px;
padding:15px 20px;
background-color:white;
color:white;
cursor:pointer;
margin-bottom:10px;
}
.image {
    width: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    height: 100vh;
    background-position: center center;
  }
  .foots{

    color: #fff;
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 6px;
    position: absolute;
    right: 100px;
    bottom: 20px;
}

</style>
