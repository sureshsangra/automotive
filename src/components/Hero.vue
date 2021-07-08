<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Buy all Automotive Parts
                </h1>
                <p>
                  Using your own car gives you an independence from external circumstances and the opportunity to plan your day exactly how you want. No rush to miss urban transport and even be late for work, because of outside factors. With an own car, you feel free, have the ability to address business and pleasure travel, as you want.
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Explore</button>
                    <button class="btn custom-btn btn-outline-secondary">Products</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img class="img-fluid" src="/img/svg/graphic.svg" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }
  
</style>