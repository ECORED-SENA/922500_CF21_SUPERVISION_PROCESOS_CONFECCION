<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Prestaciones sociales

    .row
      .col-lg-9.col-md-9.mb-4(data-aos="fade-right")
        p Cuando se tiene un contrato de trabajo, indiferente de su forma, ya existe una relación laboral, la cual tiene unas obligaciones y derechos tanto del empleador como del empleado; por lo que las prestaciones sociales son una obligación del empleador y un derecho para el empleado.
        p Las prestaciones sociales son un pago que se hace, adicional, al empleado ya sea en dinero, en especie u otros, que estén contemplados en el contrato de trabajo o en el reglamento interno de trabajo estipulado por la alta dirección o el departamento de gestión humana de la organización. Las prestaciones sociales están estipuladas en el CST el cual regula toda la relación laboral existente en el territorio colombiano.
        p Dentro de las relaciones laborales, las prestaciones sociales hacen referencia a lo que se conoce como:
        .fondo-t4.p-4
          .row 
            .col-md-3
              .tarjeta.bg-6.text-center.p-3.h-100
                img.mx-auto.mb-3(src='@/assets/curso/temas/t4/ico1.svg' alt='' style="width: 100px;")
                h5 Prima
            .col-md-3
              .tarjeta.bg-6.text-center.p-3.h-100
                img.mx-auto.mb-3(src='@/assets/curso/temas/t4/ico2.svg' alt='' style="width: 100px;")
                h5 Auxilio de cesantías
            .col-md-3
              .tarjeta.bg-6.text-center.p-3.h-100
                img.mx-auto.mb-3(src='@/assets/curso/temas/t4/ico3.svg' alt='' style="width: 100px;")
                h5 Intereses de las cesantías
            .col-md-3
              .tarjeta.bg-6.text-center.p-3.h-100
                img.mx-auto.mb-3(src='@/assets/curso/temas/t4/ico4.svg' alt='' style="width: 100px;")
                h5 Dotación
      .col-lg-3.col-md-3.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/img.png' alt='')

    
    p.mb-4(data-aos="fade") Estas prestaciones sociales son de carácter irrenunciables, lo que quiere decir que, por ninguna circunstancia, el empleador va a decir al empleado que no pagará dicha prestación social; adicionalmente el empleador nunca deberá cancelar estas prestaciones sociales por debajo de lo estipulado por la Ley.

    .row.justify-content-center.mb-4.mb-md-54(data-aos="fade-down")
      .col-md-10
        .bg-4.tarjeta.p-4
          .row.align-items-center
            .col-md-1.col-3.px-md-2
              img(src='@/assets/curso/temas/t5/nota.svg' alt='')
            .col-md-11
              p.mb-0 Para liquidar las prestaciones sociales de un empleado se debe tener en cuenta todo lo que constituya salario: 
                b comisiones, horas extras y recargos nocturnos, dominicales y festivos.

    p.mb-4(data-aos="fade") Hay que tener en cuenta lo que dice el Código Sustantivo de Trabajo en su artículo 128 sobre lo que NO constituye salario: 
      b “No constituyen salario las sumas que ocasionalmente y por mera liberalidad recibe el trabajador del empleador, como primas, bonificaciones o gratificaciones ocasionales, participación de utilidades, excedente de las empresas de economía solidaria y lo que recibe en dinero o en especie no para su beneficio, ni para enriquecer su patrimonio, sino para desempeñar a cabalidad sus funciones, como gastos de representación, medios de transporte, elementos de trabajo y otros semejantes…”

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .row.bg-5.tarjeta.p-4.align-items-center
          .col-md-1.col-3.px-md-2
            img(src='@/assets/curso/temas/t4/alert.svg' alt='')
          .col-md-11
            p.mb-0 Para las prestaciones sociales como la prima y el auxilio de las cesantías, se debe tener en cuenta el auxilio de transporte siempre y cuando el empleado gane menos de dos (2) salarios mínimos legales vigentes.


    Separador        
    
    #t_4_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.1 Prima de servicios
    
    .row.mb-2
      .col-lg-3.col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/img2.png' alt='')
      .col-lg-9.col-md-9.mb-4(data-aos="fade-left")
        p El Código Sustantivo de Trabajo en su artículo 306 nos dice: 
          b “El empleador está obligado a pagar a su empleado o empleados, la prestación social denominada prima de servicios que corresponderá a 30 días de salario por año, el cual se reconocerá en dos pagos, así: la mitad máximo el 30 de junio y la otra mitad a más tardar los primeros veinte días de diciembre. Su reconocimiento se hará por todo el semestre trabajado o proporcionalmente al tiempo trabajado”.
        p Dentro de todo el proceso de nómina, prestaciones sociales, contabilidad, sistema de seguridad social; el año está estipulado en 360 días y el mes en 30 días, sin importar que tengan 31 días algunos meses o en el caso de febrero 28 o 29, todos los meses se toman con 30 días y de esta manera se puede calcular las prestaciones sociales.
        p La fórmula para liquidar la prestación social de prima es:
        img(src='@/assets/curso/temas/t4/form.svg' alt='' style="width: 500px;")
    
    p.mb-4(data-aos="fade") Para afianzar más y mejor sobre la prima de servicios, analice el siguiente ejemplo de cuando un empleado tiene contrato vigente y se le debe de liquidar la prestación social de prima:
        
    .tarjeta.fondo-slider.p-4.pt-5.mb-5
      SlyderA(tipo="b" data-aos="fade-down")
        .row.justify-content-center
          .col-md-6
            h5 Caso ejemplo
            p Federico García ingresó a la empresa Confecciones Modernas el día 15 de diciembre del año 2020 como auxiliar de producción, con un salario mínimo legal vigente, por lo que se debe liquidar la prestación social de la prima correspondiente al primer semestre del año 2021. ¿Por qué vamos a liquidar el primer semestre del año 2021? Porque se sobre entiende que a más tardar el 20 de diciembre del año 2020 se le pagó la prima de servicio por esos 16 días.
          .col-md-5
            img(src='@/assets/curso/temas/t4/slide1.png' alt='')
        .row.justify-content-center
          .col-md-6
            h5 Identificación de base salarial
            p Como primer paso debemos identificar la base salarial, en este ejemplo, esta base está compuesta por el salario y el auxilio de transporte legal para el año 2021, este último porque el empleado tiene una remuneración inferior a dos salarios mínimos legales vigentes.
            p.mb-0 - Salario Base $908.526 
            p - Auxilio de Transporte $106.454
            p Para un total de $1.014.918. Este es el valor por el cual se va a calcular la prima de servicios.
          .col-md-5
            img(src='@/assets/curso/temas/t4/slide2.png' alt='')
        .row.justify-content-center
          .col-md-6
            h5 Días por liquidar
            p Como segundo paso es definir el número de días que van a liquidar la prestación social. Para este ejemplo como nos habla del primer semestre del año 2021 que corresponde a los meses de enero a junio, lo que corresponde a 6 meses; multiplicamos el número de meses por 30 que son los días que componen un mes y nos da el número de días a liquidar.
            img.mb-4(src='@/assets/curso/temas/t4/form2.svg' alt='' style="width: 90 %;")
            p
              b 180 días para liquidar la Prima de servicios.
          .col-md-5
            img(src='@/assets/curso/temas/t4/slide3.png' alt='')
        .row.justify-content-center
          .col-md-6
            h5 Fórmula de prima de servicios
            p Cuando estos datos ya estén identificados procedemos a aplicar la fórmula:
            img.mb-3(src='@/assets/curso/temas/t4/form3.svg' alt='')
            .row 
              .col-md-6.mb-4
                img(src='@/assets/curso/temas/t4/form4.svg' alt='')
              .col-md-6.mb-4
                img(src='@/assets/curso/temas/t4/form5.svg' alt='')
            p 𝑃𝑟𝑖𝑚𝑎 = 
              b 507,459 es la prima para liquidar en el mes de junio.
          .col-md-5
            img(src='@/assets/curso/temas/t4/slide4.png' alt='')
        .row.justify-content-center
          .col-md-6
            h5 Nota importante
            p Recordemos que, si Federico hubiera tenido horas extras o recargos en su jornada laboral, estos también se tendrían en cuenta para liquidar dicha prestación.
          .col-md-5
            img(src='@/assets/curso/temas/t4/slide5.png' alt='')


    Separador        
    
    #t_4_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.2. Auxilio de cesantías e intereses de las cesantías

    .row.mb-2
      .col-lg-3.col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/img3.png' alt='')
      .col-lg-9.col-md-9.mb-4(data-aos="fade-left")
        p El CST en su artículo 249 dice: 
          b “Todo empleador está obligado a pagar a sus trabajadores, y a las demás personas que se indican en el Capítulo VII del CST: al terminar el contrato de trabajo, como auxilio de cesantía, un mes de salario por cada año de servicios y proporcionalmente por fracción de año”. 
          | Por lo que se dice que el auxilio de las cesantías es un ahorro obligatorio, que tiene como finalidad solventar los días que el empleado se encuentra cesante o sin empleo.
        p Cuando en el CST dice que por un año laborado es un mes de salario el que corresponde, quiere decir que, si se trabajó desde el 1 de enero hasta el 31 de diciembre de ese año, lo que corresponde a 12 meses o 360 días, el empleador deberá pagar un salario incluyendo las comisiones, horas extras, recargos nocturnos si en el último salario tuvo alguna de estas novedades de nómina o el auxilio de transporte cuando gane menos de dos (2) salarios mínimos legales vigentes.
        p Algunos aspectos generales de las cesantías son:

    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t4/tarj-ico1.svg' alt='')
        .tarjeta.bg-2.color-hover
          .text-center.p-4
            p Para el pago de las cesantías se tiene en cuenta el último salario base mensual que tuvo el empleado, si este empleado tiene un sueldo variable se debe realizar la ponderación de todos los salarios del último año o fracción de tiempo que corresponda para el pago del auxilio de las cesantías.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t4/tarj-ico2.svg' alt='')
        .tarjeta.bg-2.color-hover
          .text-center.p-4
            p Para calcular las cesantías se tiene en cuenta todo lo que constituye salario, comisiones, horas extras, recargos nocturnos, dominicales o festivos; de igual manera se debe tener en cuenta para el cálculo de las cesantías el auxilio de transporte siempre y cuando gane menos de dos (2) salarios mínimos legales vigentes.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t4/tarj-ico3.svg' alt='')
        .tarjeta.bg-2.color-hover
          .text-center.p-4
            p Las cesantías corresponden a un mes de salario por un año laborado o se calcula lo que corresponda por fracción de año laborado.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t4/tarj-ico4.svg' alt='')
        .tarjeta.bg-2.color-hover
          .text-center.p-4
            p El empleador está obligado a consignar las cesantías de sus empleados a más tardar el 14 de febrero del año siguiente.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t4/tarj-ico5.svg' alt='')
        .tarjeta.bg-2.color-hover
          .text-center.p-4
            p Cuando el contrato se termina en el transcurso del año el empleador debe liquidar las cesantías correspondientes al periodo laborado en la liquidación de contrato.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t4/tarj-ico6.svg' alt='')
        .tarjeta.bg-2.color-hover
          .text-center.p-4
            p Los empleadores que no consignen las cesantías de sus empleados en los tiempos establecidos por la norma serán acreedores de una sanción monetaria, la cual es:
            h5 pagar un día de salario por cada día de retraso en la consignación o pago de las cesantías.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t4/tarj-ico7.svg' alt='')
        .tarjeta.bg-2.color-hover
          .text-center.p-4
            p Las cesantías cuando se cuenta con un contrato vigente se pueden retirar única y exclusivamente para compra, mejora o construcción de vivienda, educación de ciclo profesional ya sea propia, del cónyuge o hijos menores de 25 años que dependan económicamente del empleado.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t4/tarj-ico8.svg' alt='')
        .tarjeta.bg-2.color-hover
          .text-center.p-4
            p Los intereses de las cesantías es la utilidad de las cesantías acumuladas al 31 de diciembre y corresponde al 12 %, o sea, el 1 % mensual.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t4/tarj-ico9.svg' alt='')
        .tarjeta.bg-2.color-hover
          .text-center.p-4
            p Los intereses de las cesantías son diferentes a la rentabilidad entregada por el fondo de cesantías al momento de retirarlas.
            p.mb-0 Los intereses de las cesantías se calculan sobre las cesantías del periodo definido, por la base salarial por el 12 % dividido 360 días del año (cesantías causadas * base salarial * 12 %) /360


    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t4/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ejemplos de cesantías e intereses de cesantías
                  p.text-small.mb-0 Consulte el Anexo_1_EjemplosDeCesantiasEInteresesDeCesantías y amplíe su comprensión sobre este punto.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1_EjemplosDeCesantiasEInteresesDeCesantias.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador        
    
    #t_4_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.3. Dotación

    .row.mb-2
      .col-lg-3.col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/img4.png' alt='')
      .col-lg-9.col-md-9.mb-4(data-aos="fade-left")   
        p La dotación es una prestación social la cual está respaldada en el Código Sustantivo de Trabajo en el artículo 230 
          b “Todo empleador que habitualmente ocupe uno (1) o más trabajadores permanentes, deberá suministrar cada cuatro (4) meses, en forma gratuita, un (1) par de zapatos y un (1) vestido de labor al trabajador, cuya remuneración mensual sea hasta dos (2) meses el salario mínimo más alto vigente. Tiene derecho a esta prestación el trabajador que en las fechas de entrega de calzado y vestido haya cumplido más de tres (3) meses al servicio del empleador”.
        p Para clarificar un poco más todo lo relacionado con la dotación como prestación social, se profundizará en algunas características importantes para tener en cuenta:  

    .fondo-t3.mb-4(data-aos="fade-down")
      .row.justify-content-evenly.p-4
        .col-lg-2.col-md-2.col-4.mb-4.mb-md-0.pe-md-0
          img.mx-auto(src='@/assets/curso/temas/t4/ico6.svg' alt='' style="width: 110px;")
        .col-lg-10.col-md-9.ps-md-0
          ul.lista-ul--color.color-azul.fa-ul
            li.mb-0
              i.fas.fa-circle
              | La dotación es una prestación social que entrega el empleador al empleado cuando existe una relación laboral (contrato). Es una prestación social en especie, nunca es en dinero.
            li.mb-0
              i.fas.fa-circle
              | Tienen derecho a la dotación los empleados que devenguen menos de dos (2) salarios mínimos legales vigentes y que hayan cumplido más de tres (3) meses al servicio del empleador.
            li.mb-0
              i.fas.fa-circle
              | Tienen derecho a la dotación todos los empleados de la organización: administrativos, operarios, vendedores, entre otros, y la dotación debe tener coherencia con el cargo a desempeñar. Para tener derecho a esta prestación, los cargos de la empresa deben cumplir con los requisitos planteados en el punto anterior.
            li.mb-0
              i.fas.fa-circle
              | La dotación según el Código Sustantivo de Trabajo está compuesta por un par de zapatos y un vestido de labor, y no enfatizan sobre la calidad, ni marcas, ni modelos que deben de utilizar las empresas para sus dotaciones; por lo que el empleador no está obligado a cumplir con unas especificaciones de prendas o marcas.
            li.mb-0
              i.fas.fa-circle
              | La dotación como prestación social es diferente a los elementos de seguridad y protección industrial, esta última está reglamentada desde las normas de Seguridad y Salud Laboral en Colombia y la ley 100, adicionalmente es obligación para todos los trabajadores de las empresas sin importar la base salarial que devenguen mensualmente.
            li.mb-0
              i.fas.fa-circle
              | Según la norma, la dotación debe entregarse tres (3) veces al año o sea cada cuatro meses y se encuentran estipuladas así: el 30 de abril debe realizarse la primera (1) entrega; el 31 de agosto la segunda (2) entrega y el 20 de diciembre la tercera (3) entrega.
            li.mb-0
              i.fas.fa-circle
              | El empleado está obligado a utilizar la dotación entregada por la empresa; ya que, si no la maneja, el empleado pierde el derecho a recibir la dotación en el periodo siguiente. Esto lo dice el artículo 233 del Código Sustantivo de Trabajo “El trabajador queda obligado a destinar a su uso en las labores contratadas el calzado y vestido que le suministre el {empleador}, y en el caso de que así no lo hiciere este quedara eximido de hacerle el suministro en el período siguiente.”
            li.mb-0
              i.fas.fa-circle
              | La dotación, como es una prestación social, el empleado no tiene que devolverla cuando finaliza el contrato. Hay algunas excepciones como son: las empresas de vigilancia entregan los uniformes por razones de seguridad ciudadana y cuando estos tienen logos de las empresas para el cuidado de la imagen corporativa y mitigar los riesgos de fraudes que comprometan la empresa.
            li.mb-0
              i.fas.fa-circle
              | La ley no tiene claridad sobre qué pasa si el empleador no entrega la dotación, por lo que el empleado puede reclamar este derecho instaurando una demanda laboral. 

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t4/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Liquidación de prestaciones sociales
                  p.text-small.mb-0 Para ampliar la información, observe con atención el video “Liquidación de prestaciones sociales”, el cual se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=fLryIw1GBn8')" target="_blank")
                    span Ver video
                    i.fas.fa-video






</template>

<script>
export default {
  name: 'Tema4',
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
