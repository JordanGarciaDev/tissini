<template>
    <div class="hello">
        <div data-v-27ba1b60="" class="v-card v-card--flat v-sheet theme--light">
            <div data-v-27ba1b60="" class="v-card__title mt-5">
                <div data-v-27ba1b60="" class="text-xs-center mt-5">
                    <img data-v-27ba1b60="" width="60%" src="../../static/img/logo.c752bf8f.png" class="animated fadeIn mt-5">
                    <h3 data-v-27ba1b60="" class="mt-3" style="color: white;">
                        Ingresa el número de teléfono
                        <br data-v-27ba1b60="">de tu asesora independiente.
                    </h3>
                    <br>
                </div>
            </div>
            <div data-v-27ba1b60="" class="v-card__text">
                <form action="https://viser.app/api/v1/login/client?" method="post" novalidate="novalidate" class="v-form">
                    <div data-v-27ba1b60=""
                         class="v-input v-text-field v-text-field--enclosed v-text-field--outline theme--light">
                        <div class="v-input__control">
                            <div class="v-input__slot">
                                <div class="v-text-field__slot">
                                    <label aria-hidden="true" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">Telefono</label>
                                    <input aria-label="Telefono" type="tel" name="mobilephone" id="mobilephone" onkeypress="txtkeypress();" maxlength="12">
                                </div>
                            </div>
                            <div class="v-text-field__details">
                                <div class="v-messages theme--light">
                                    <div class="v-messages__wrapper"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-v-27ba1b60="" class="v-card__actions">
                        <div data-v-27ba1b60="" class="layout align-center">
                            <div data-v-27ba1b60="" class="flex xs12 sm12 text-xs-center">
                                <button data-v-27ba1b60="" type="submit" id="enviar_datos" name="enviar_datos"
                                        class="white--text v-btn v-btn--block v-btn--large v-btn--outline v-btn--depressed theme--dark white--text animated bounce">
                                    <div class="v-btn__content">VER CATALOGO</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Bienvenida'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
