<template>
 <nav
    class="navbar navbar-main navbar-expand-lg px-0 mx-4  mb-3 shadow-none border-radius-xl"
    :class="
      this.$store.state.isRTL ? 'top-0 position-sticky z-index-sticky' : ''
    "
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
     
      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar"
      >
      
        <div
          class="pe-md-12 d-flex"
          :class="'ms-md-auto'"
        >
          <div class="input-group d-none d-md-flex">
          
            <input
              type="text"
              class="form-control  text-white"
              style="background: #212121; height:65px;width:705px; border-radius:30px"
              v-model="searchStr"
              @keyup.enter="searchMovies()"
              :placeholder="
                'Search for movies, Tv shows...'
              "
            />
             
          </div>
        
        </div>
      
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item dropdown top-0 d-flex align-items-center me-4">
             <span class="avatar avatar-md brround">
               <i class="fa fa-bell avatar avatar-md brround"></i></span>
            
          </li>
        
         
          <li
            class="nav-item dropdown top-0 d-flex align-items-center"
            :class="'pe-2'"
          >
            <a
              href="#"
              class="p-0 nav-link text-dark"
              :class="[showMenu ? 'show' : '']"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu; showMenu1=false"
            >
            <div class="d-flex my-auto font-weight-bold text-dark">
              <span class="avatar avatar-md brround">
                <img src="https://images.unsplash.com/photo-1587918842454-870dbd18261a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=943&q=80" alt="Profile-img" 
              class="avatar avatar-md brround me-4"></span>
             
              
                      
                </div>
           
            </a>
            <ul
              class="me-3 dropdown-menu dropdown-menu-end me-sm-n4
              menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px
              dropdown-menu dropdown-menu-right dropdown-menu-arrow"
              style="width:205px;right: 25px !important;"
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
            >
          <span class="ml-8 me-3 ms-4 text-center">{{name}}</span>
          <hr>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex px-3">
                    <div class="my-auto">
                      
                      <i class="dropdown-icon mdi mdi-account-outline  me-3"></i>
                      <span class="text-lg">Profile</span>
                    </div>
                    
                  </div>
                </a>
              </li>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex px-3">
                    <div class="my-auto">
                      <i class="dropdown-icon  mdi mdi-cog me-3"></i>
                      <span class="text-lg">Settings</span>
                    </div>
                    
                  </div>
                </a>
              </li>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex px-3">
                    <div class="my-auto">
                      <i class="dropdown-icon mdi  mdi-message-outline me-3"></i>
                      <span class="text-lg">Inbox</span>
                    </div>
                    
                  </div>
                </a>
              </li>
             
            
            
            <hr>
             <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex px-3">
                    <div class="my-auto">
                      <i class="dropdown-icon mdi mdi-compass-outline me-3"></i>
                      <span class="text-lg">Need Help</span>
                    </div>
                    
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="px-3 d-flex">
                    <a
              @click="logout"
              class="px-0  font-weight-bold text-dark"
              style="cursor:pointer"
            >
              <i
                class="fa fa-sign-out me-3"
                :class="'me-sm-2'"
              ></i>
              
           
              <span  class="text-lg">Log Out</span>
            </a>
                    
                  </div>
                </a>
              </li>
            
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="py-4 container-fluid">
      <div class="row" v-if="searchStr">
      
        <div class="col-lg-12">
           
            <div class="row">
              <div class="col-lg-3 mb-3"  v-for="movie in searchedMovies" :key="movie">
                <div class="card card-custom">
                  <div class="rate">
                  <i class="fa fa-star me-2" style="color:#FFFF00"></i><span class="text-white">{{movie.vote_average}}</span>
                  </div>
                 
                   <img class="image" :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' +movie.poster_path" alt="movie.title">
									
                </div>
              </div>
              
            </div>
          </div>
         
        </div>
    <div class="row" v-else>
      <div class="col-lg-12">
      
        <div class="row">
          <div class="col-lg-8 col-12 mb-3">
            <div class="card" style="height: 300px;" v-for="movie in nowPlaying.slice(0,1)" :key="movie"
            >
								 <img class="image" :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' +movie.poster_path" alt="movie.title">
										
                	<div class="foots">
										<div class="float-lg-end">
                      <div class="d-flex">
                       <div class="me-2">
                        <button class="btn custom-btn text-white">
                          <i class="fa fa-play me-2"></i>Play</button>
                        </div>
                        <div>
                          <button class="btn custom-btn text-white">
                            <i class="fa fa-info me-2"></i>More Info</button>
                          </div> 
                      </div>
                      </div>
									</div>
								</div>
           
          </div>
           <div class="col-lg-4  col-12 mb-3">
            <div class="d-flex justify-content-between">
              <div>
             <h5 class="text-lg text-bold text-white">Categories</h5>
              </div>
              <div>
               <p>Uncheck all</p>
              </div>
            </div>
            
             <div class="card" style="background: #212121;">
									<div class="card-body">
							   <div class="row">
                  <div class="col-md-6" v-for="genre in genres" :key="genre">
                       <label class="text-white me-3">{{ genre.name }}</label>
                    <input type="checkbox"  checked>
                  </div>
                 </div>
									
									</div>
								</div>
          
          </div>
         
         
          
        </div>

        <div class="row">
          <div class="col-lg-8">
             <div class="d-flex justify-content-between">
              <div>
             <h5 class="text-lg text-bold text-white">Trending</h5>
              </div>
              <div>
               <p>See All</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 mb-3"  v-for="movie in movies.slice(0,4)" :key="movie">
                <div class="card card-custom">
                  <div class="rate">
                  <i class="fa fa-star me-2" style="color:#FFFF00"></i><span class="text-white">{{movie.vote_average}}</span>
                  </div>
                  <!-- <p class="ms-8" style="float:right !important">hello</p> -->
                   <img class="image" :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' +movie.poster_path" alt="movie.title">
									
                </div>
              </div>
              
            </div>
          </div>
          <div class="col-lg-4">
             <div class="d-flex justify-content-between">
              <div>
             <h5 class="text-lg text-bold text-white">Services</h5>
              </div>
              <div>
               <p>Uncheck all</p>
              </div>
            </div>
            
             <div class="card" style="background: #212121;">
									<div class="card-body">
									
									
									</div>
								</div>
          </div>
        </div>
       <div class="row">
          <div class="col-lg-8">
             <div class="d-flex justify-content-between">
              <div>
             <h5 class="text-lg text-bold text-white">Up Coming</h5>
              </div>
              <div>
               <p>See All</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 mb-3"  v-for="movie in upcomings.slice(0,4)" :key="movie">
                <div class="card card-custom">
                  <div class="rate">
                  <i class="fa fa-star me-2" style="color:#FFFF00"></i><span class="text-white">{{movie.vote_average}}</span>
                  </div>
                  <!-- <p class="ms-8" style="float:right !important">hello</p> -->
                   <img class="image" :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' +movie.poster_path" alt="movie.title">
									
                </div>
              </div>
              
            </div>
          </div>
          <div class="col-lg-4">
             <div class="d-flex justify-content-between">
              <div>
             <h5 class="text-lg text-bold text-white">Filters</h5>
              </div>
              <div>
               <p>Uncheck all</p>
              </div>
            </div>
            
             <div class="card" style="background: #212121;">
									<div class="card-body">
									
									
									</div>
								</div>
          </div>
        </div>
      </div>
      
    </div>
    <!-- row --> 
   

					
       
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: "dashboard-default",
   
   
    created(){
  
    this.getMovies(1);
     this.getNowPlaying(1);
     this.getUpcomingMovies(1);
     this.getGenre();
  },
  data() {
   
    return {
     
    
      loading:true,
       movies:[],
       upcomings:[],
      nowPlaying:[],
      genres:[],
      searchStr:'',
      searchedMovies:[]
     
    };
  },
 
   methods:{
  
     getMovies(page){
                axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c3612c0718ad5a9e707c01215bac2e37&page= ${page}&language=en-US&region=US`,
       
     
        )
        .then(({data}) => {
          this.movies=data.results
          this.loading=false
        }).catch(() => {
          
        });
        },
        searchMovies(){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c3612c0718ad5a9e707c01215bac2e37&query=`
     +this.searchStr,
       
     
        )
        .then(({data}) => {
          this.searchedMovies=data.results
          this.loading=false
        }).catch(() => {
          
        });
        },
     getUpcomingMovies(page){
                axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c3612c0718ad5a9e707c01215bac2e37&page= ${page}&language=en-US&region=US`,
       
     
        )
        .then(({data}) => {
          this.upcomings=data.results
          this.loading=false
        }).catch(() => {
          
        });
        },
     getNowPlaying(page){
      
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c3612c0718ad5a9e707c01215bac2e37&page= ${page}&language=en-US&region=US`,
       
     
        )
        .then(({data}) => {
          this.nowPlaying=data.results
          
          this.loading=false
        }).catch(() => {
          
        });
        },
     getGenre(){
      
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=c3612c0718ad5a9e707c01215bac2e37&language=en-US&region=US`,
       
     
        )
        .then(({data}) => {
          this.genres=data.genres
          
          this.loading=false
        }).catch(() => {
          
        });
        },
     
    
   },
 
};
</script>
<style scoped>
.card{
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 20px;
}
.custom-btn{
background: rgba(232, 232, 232, 0.1);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(2.5px);
border-radius: 15px;
}
.card-custom{
width: 200px;
height: 300px;
}
.image{
      width: 100%;
      object-fit: fill;
      height: 300px;
      border-radius: 0.8rem;
  }
  .foots{
     color: #fff;
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 6px;
      position: absolute;
      right: 40px;
      bottom: 20px;
  }
  .rate{
position: absolute;
width: 68px;
height: 28px;
left: 135px;
top: 5px;

  }
</style>
