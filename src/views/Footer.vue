<template>
  <footer class="text-center text-lg-start bg-light text-muted">

    <section class="p-2">
      <div class="container text-center text-md-start mt-3">
        <div class="row mt-3">

          <!-- Contact & Social Media -->
          <div class="col-6 ">
            <h6 class="text-uppercase fw-bold text-gold">
              Contact
            </h6>
            <p>
              <i class="fas fa-envelope me-3"></i>
              <font-awesome-icon icon="envelope" /> fabledeck@gmail.com
            </p>
            <!--
            <div>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
              </a>
            </div>
            -->
          </div>

          <div class="col-6 ">
            <h6 class="text-uppercase fw-bold text-gold">
              Donate
            </h6>
            <div class="left-margin" style="font-size: 14px">
              <p>
                <b >BTC:</b> <code>bc1qstd8re32lcvmnwlu6cl2ac42kp42z2a75utnue</code>
                <br />
                <b>ETH:</b> <code>0x2a7D2c548A473274978D457d55461ceD46583DF4</code>
                <br />
                <b>ADA:</b> <code>Ae2tdPwUPEZ65cQZgEojjkpKeSAVMyFmj1sznkvTaJeEV88YBjnuF2EK7mD</code>
                <br />
                <b>XRP:</b> <code>rHkh4eoSmboLzjnvMTAf65tsjZnHWEDn39</code>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
code {
  color: inherit !important;
}
.left-margin {
  margin-left: 1rem;
}
</style>
