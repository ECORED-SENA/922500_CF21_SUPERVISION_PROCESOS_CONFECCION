<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Nómina


    .row.mb-2
      .col-lg-4.col-md-12.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t7/img.png' alt='')
      .col-lg-8.col-md-12.mb-4(data-aos="fade-left")
        p Se identifica por nómina todos los pagos mensuales, quincenales o en el periodo establecido para la remuneración, dentro del contrato de trabajo. En estos pagos se debe incluir todo lo causado en las fechas establecidas de pago como es: salario, comisiones, horas extras, recargos nocturnos, festivos o dominicales.
        p De igual manera, hay que realizar las deducciones correspondientes por salud, pensiones exigidas por la ley, que ya fueron explicadas.

    p.mb-4(data-aos="fade") Estos son algunos aspectos para tener en cuenta en la liquidación de la nómina:
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-4
        .bg-2.text-center.h-100.tarjeta
          img(src='@/assets/curso/temas/t7/tarj1.png' alt='')
          .p-4  
            h5 Auxilios de transporte
            p En la nómina se le debe consignar al trabajador el auxilio de transporte; si este tiene un salario inferior a dos salarios mínimos legales vigentes. La empresa podrá definir el periodo de pago.
      .col-lg-4.col-md-6.mb-4
        .bg-2.text-center.h-100.tarjeta
          img(src='@/assets/curso/temas/t7/tarj2.png' alt='')
          .p-4
            h5 Deducciones
            p En la nómina se deben de hacer las deducciones de ley que son: el 4% de aportes a salud; el 4% de aportes a pensión; cuando el trabajador devengue más de cuatro SMLV se le descuenta el 1% para el fondo de solidaridad pensional; si el trabajador tiene embargos judiciales; cuotas de sindicatos; créditos donde autoriza hacer descuento de la cuota mensual por nómina.
      .col-lg-4.col-md-6.mb-4
        .bg-2.text-center.h-100.tarjeta
          img(src='@/assets/curso/temas/t7/tarj3.png' alt='')
          .p-4
            h5 Adicionales o complementarios
            p Para el pago de la nómina ya sea quincenal, mensual, semanal, según se haya pactado en el contrato laboral, se debe evaluar si el trabajador tuvo horas extras, recargos nocturnos, dominicales o festivos, comisiones. En algunos periodos en la nómina se le sumarán el valor de algunas prestaciones sociales como prima, intereses de las cesantías, vacaciones.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t4/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Liquidación de nómina
                  p.text-small.mb-0 Consulte el Anexo_3_LiquidacionDeNomina y amplíe su comprensión sobre este punto
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_3_LiquidacionDeNomina.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
          .linea-punteada.my-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t4/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Cómo liquidar la nómina paso a paso
                  p.text-small.mb-0 Adicionalmente, observe con atención el video “Cómo liquidar la nómina paso a paso”, que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=gQEQwhm6v0M')" target="_blank")
                    span Ver video
                    i.fas.fa-video


</template>

<script>
export default {
  name: 'Tema7',
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
