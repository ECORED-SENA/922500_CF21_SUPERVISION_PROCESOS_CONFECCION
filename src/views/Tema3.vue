<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La jornada laboral en Colombia


    .row.mb-4
      .col-lg-5.col-md-12.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/img.png' alt='')
      .col-lg-7.col-md-12.mb-4(data-aos="fade-left")
        p El CST en su artículo 158 define: 
          b “La jornada ordinaria de trabajo es la que convengan a las partes o, a falta de convenio, la máxima legal”.
        p La jornada laboral no es más que el tiempo en que se deben desarrollar las actividades laborales dentro de la organización. La norma indica que la jornada laboral es de ocho (8) horas diarias y cuarenta y ocho (48) semanales. Después de transcurrido este tiempo, se contará como horas extras.

    .fondo-t3(data-aos="fade-down")
      .row.justify-content-evenly.p-4
        .col-lg-2.col-md-2.col-4.mb-4.mb-md-0.pe-md-0
          img.mx-auto(src='@/assets/curso/temas/t3/ico.svg' alt='' style="width: 110px;")
        .col-lg-10.col-md-9.ps-md-0
          p A continuación, se mencionan varias características o aspectos para tener en cuenta en la jornada laboral:
          ul.lista-ul--color.color-azul.fa-ul
            li.mb-2
              i.fas.fa-circle
              | La jornada laboral diurna esta estipulada según el Código Sustantivo de Trabajo en su artículo 160, desde las 6.00 a. m. hasta las 9.00 p. m.
            li.mb-2
              i.fas.fa-circle
              | La jornada laboral nocturna según el Código Sustantivo de Trabajo en su artículo 160, la establece desde las 9.00 p. m. hasta las 6.00 a. m.
            li.mb-2
              i.fas.fa-circle
              | El empleado y el empleador pueden llegar a acuerdos en los cuales le permita ejecutar sus labores durante diez (10) horas diarias, de aquí que el empleado no puede alegar horas extras, siempre y cuando estas no excedan las cuarenta y ocho (48) horas semanales.
            li.mb-2
              i.fas.fa-circle
              | La norma tiene algunas excepciones o casos especiales como son:
            ol.lista-ol.ps-md-3
              li.mb-1 
                span.text-bold -
                | Las personas que tienen cargos directivos o personal de confianza.
              li.mb-1 
                span.text-bold -
                | Los choferes o mecánicos que presten sus servicios en empresas de transporte.
              li
                span.text-bold -
                | Los servicios domésticos.
            li.mb-2
              i.fas.fa-circle
              | Las horas extras o trabajo suplementario no puede exceder las dos horas diarias y las 12 horas semanales.
            li.mb-2
              i.fas.fa-circle
              | Los menores de edad deben de tener una jornada donde: los menores entre los 15 y 17 años no pueden ser superior a seis (6) horas diarias, 36 horas semanales; los jóvenes entre los 17 y 18 años su jornada será entre ocho (8) horas diarias y 40 semanales.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
