<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El salario


    .row.mb-4
      .col-lg-7.col-md-12.mb-4(data-aos="fade-right")
        p El salario es el pago en dinero o en especie que recibe un empleado por prestar un servicio personal a un empleador.
        p Según el CST en su artículo 127: 
          b “Constituye salario no sólo la remuneración ordinaria, fija o variable, sino todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, sea cualquiera la forma o denominación que se adopte, como primas, sobresueldos, bonificaciones habituales, valor del trabajo suplementario o de las horas extras, valor del trabajo en días de descanso obligatorio, porcentajes sobre ventas y comisiones”.
        p Esto lleva a desglosar algunos conceptos que se mencionan dentro de esta definición de la norma:
      .col-lg-5.col-md-12.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img.png' alt='')
    
    .row.mb-2
      .col-lg-3.col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img2.png' alt='')
      .col-lg-9.col-md-9.mb-4(data-aos="fade-left")
        TabsA.color-primario
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Prima")
            p Esta prima es diferente a la que esta reglamentada con las prestaciones sociales, esta es un pago voluntario que da el empleador al empleado al finalizar el año, ejemplo la prima de navidad que pagan algunas empresas a sus empleados.
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Salario fijo")
            p Cuando las partes definen un valor estable que se pagará durante los periodos pactados en el contrato de trabajo.
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Salario variable")
            p Aquel salario que, cuando el empleador de acuerdo con su actividad como ventas, productividad o eficiencia en la ejecución y/o cumplimiento de objetivos, puede cambiar su salario por cada periodo.
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Sobresueldos")
            p Es un pago que realiza el empleador al trabajador como una recompensa por un trabajo bien hecho o por un logro de una meta. Suele entregarse muchas veces en bonos. Estos sobresueldos entran a ser parte de la base para liquidar las prestaciones sociales cuando esté manifestado en el contrato de trabajo o cuando es habitual, es decir, mes a mes, en la cancelación del pago del empleado.
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Salario suplementario")
            p Es el pago que da el empleador al empleado por un trabajo adicional después de haber terminado la jornada de trabajo. Cuando hablamos de jornada ordinaria, se entiende una jornada laboral de 8 horas diarias y 48 horas semanales. En Colombia existen ya unos porcentajes que indican los valores a pagar por parte del empleador cuando se presenta trabajo suplementario u horas extras.

    p.mb-4(data-aos="fade") Los datos que van a estar registrados, como ejemplo, en la tabla que se muestra enseguida, corresponden al salario mínimo legal vigente del año 2021 que fue de $908.526.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Salario mínimo legal vigente del año 2021
        .tabla-a.color-acento-contenido
          table.text-center
            thead
              tr
                th Base salarial
                th Hora extra
                th Porcentaje correspondiente
                th Valor hora extra
            tbody    
              tr
                td.fw-bold(rowspan="4") $908.526
                td Hora Extra Diurna
                td 25%
                td $4.732
              tr
                td Hora Extra Nocturna
                td 75%
                td $6.625
              tr
                td Hora Extra Diurna <br>Dominical / Festivo
                td 100%
                td $7.571
              tr
                td Hora Extra Nocturna <br>Dominical / Festivo
                td 150%
                td $9.464

    p.mb-4(data-aos="fade") En el mes de julio del año 2021, el presidente de la República aprueba la ley 2101, donde se dio reducción de la jornada laboral de 48 horas a 42 horas, la cual se implementará de forma gradual, es decir, en el año 2023 se realizará la reducción de una (1) hora de la jornada laboral; en el año 2024 se reducirá otra hora quedando la jornada en este año en 46 horas; en el año 2025 se reducirán dos (2) horas quedando así la jornada laboral de 44 horas semanales; y para el año 2026 la jornada máxima legal será de 42 horas.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ley 2101 de 2021
                  p.text-small.mb-0 Lea con atención la Ley 2101 de 2021, la cual puede encontrar en el material complementario, y comprenda con mayor amplitud las generalidades que, sobre el salario y la jornada laboral, se han estipulado.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://sena-globallex-info.bdigital.sena.edu.co/normativa/detalle/ley-2101-de-2021-69334/txt')" target="_blank")
                    span Ver enlace
                    i.fas.fa-external-link-alt
    
    h3.t-red(data-aos="fade") Salario en especie
    p(data-aos="fade") El Código Sustantivo de Trabajo en su artículo 129 lo define como: 
      b “toda aquella parte de la remuneración binaria y permanente que reciba el trabajador como contraprestación directa del servicio, tales como la alimentación, habitación o vestuario que el empleador suministra al trabajador o a su familia”.
    p.mb-4(data-aos="fade") Sobre el salario en especie tenga en cuenta:

    .row.mb-5
      .col-md-6.mb-4
        .tarjeta.bg-2.h-100.p-3.px-md-4.text-center
          img.mx-auto.mb-4(src="@/assets/curso/temas/t2/ico.svg" style="width:65px;")
          h5 Un trabajador que gane más de un salario mínimo legal vigente
          p Dice la norma, que su salario en especie puede ser hasta el 50% de su salario, eso quiere decir que si una persona su salario es de $1.000.000, el empleador puede cancelar $500.000 en especie puede ser por vivienda y servicios y el monto restante en dinero.
      .col-md-6.mb-4
        .tarjeta.bg-2.h-100.p-3.px-md-4.text-center
          img.mx-auto.mb-4(src="@/assets/curso/temas/t2/ico.svg" style="width:65px;")
          h5 Un trabajador que gane un (1) salario mínimo legal vigente
          p Dice la norma que el salario en especie no puede ser superior al 30%, eso quiere decir que una persona con salario de $908.526, salario mínimo en el año 2021, su salario en especie debe de ser de $272.557,8 y el salario en dinero será de $635.968.
      .col-md-12
        .bg-4.text-center.p-3
          h5.mb-0 El salario en especie siempre suma para el cálculo de las prestaciones sociales correspondientes.


    h3.t-red(data-aos="fade") Salario integral
    p(data-aos="fade") Sobre el salario integral el CST en el artículo 132 dice 
      b “En ningún caso el salario integral podrá ser inferior al monto de diez (10) salarios mínimos legales mensuales, más el factor prestacional correspondiente a la empresa que no podrá ser inferior al treinta por ciento (30%) de dicha cuantía. El monto del factor prestacional quedará exento del pago de retención en la fuente y de impuestos. Este salario no estará exento de las cotizaciones a la seguridad social, ni los aportes al SENA, ICBF, y Cajas de Compensación Familiar, pero en caso de estas tres últimas entidades, los aportes se disminuirán en un treinta por ciento (30%). El trabajador que desee acogerse a esta estipulación recibirá la liquidación definitiva de su auxilio de cesantía y demás prestaciones sociales causadas hasta esa fecha, sin que por ello se entienda terminado su contrato de trabajo”.
    p.mb-4(data-aos="fade") Ampliando sobre este concepto, el salario integral contempla aspectos como:

    .row
      .col-lg-9.col-md-9.mb-4(data-aos="fade-right")
        TabsA.color-primario
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Composición")
            p Un salario integral como su nombre lo indica; está compuesto por la base salarial (sueldo); prestaciones sociales (prima, cesantías e intereses de las cesantías); primas extralegales (prima de navidad que la empresa voluntariamente da a sus empleados); horas extras (horas de trabajo fura de la jornada ordinaria de acuerdo a la norma y si el cargo lo requiere); recargos (trabajo en la jornada ordinaria ya sea nocturnos, dominicales o festivos) u otras que se tengan en cuenta en el momento del contrato.
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Vacaciones y despidos")
            p El Salario Integral NO incluye las vacaciones, las cuales el empleador debe de pagar al trabajador este derecho en cuando haya cumplido un año de labor continua en la empresa o si se termina contrato proporcional al tiempo trabajado. Si el trabajador es despedido sin justa causa se realizará la indemnización correspondiente.
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Prestaciones sociales")
            p Si la norma dice que el salario integral corresponde a diez (10) salarios mínimos legales vigentes, tomando el año 2021 como referencia, correspondió a $908.526 por diez (10), eso equivale a $9.085.260; pero a este valor de manera obligatoria hay que sumarle el 30% como factor prestacional (prestaciones sociales), eso corresponde a $2.725.578. Lo que indica que el salario integral en Colombia para el año 2021 no puede ser inferior a $11.810.838.
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Factor prestacional")
            p El salario integral en Colombia está dado por los diez (10) salarios mínimos legales vigentes más el 30% del factor prestacional lo que indica que el salario integral en Colombia no puede ser inferior a los 13 salarios mínimos legales vigentes.
          .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Receptores principales")
            p Este tipo de salario se da con mayor frecuencia en cargos directivos, de toma de decisiones dentro de las organizaciones. Las prestaciones sociales no se toman en cuenta para el pago del sistema general de salud por lo que el ingreso base de liquidación (valor por el cual se cotiza a salud, pensión y ARL); será lo que corresponda al 70% del total del salario integral, tomando en cuenta la tabla entonces podemos decir que corresponde a $8.267.586. y de ese valor será descontado el 8% correspondiente al 4% por salud y el 4% de pensiones.
      .col-lg-3.col-md-3.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img3.png' alt='')







</template>

<script>
export default {
  name: 'Tema2',
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
