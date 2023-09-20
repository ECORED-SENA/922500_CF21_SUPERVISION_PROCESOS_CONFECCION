<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-md-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Sistema de Seguridad Social en Colombia
    
    .row.mb-4
      .col-lg-8.col-md-9.mb-4(data-aos="fade-right")
        p El sistema de Seguridad Social en Colombia está comprendido en la ley 100 de 1993 tiene como objeto: 
          b “…garantizar los derechos irrenunciables de la persona y la comunidad para obtener la calidad de vida acorde con la dignidad humana, mediante la protección de las contingencias que la afecten. El sistema comprende las obligaciones del Estado y la sociedad, las instituciones y los recursos destinados a garantizar la cobertura de las prestaciones de carácter económico, de salud y servicios complementarios, materia de esta ley, u otras que se incorporen normativamente en el futuro”.
        p El sistema de seguridad social en Colombia busca que toda la población esté protegida en todo lo referente a la salud, incapacidades laborales, desempleo, vejez y muerte de los trabajadores.
        p Estos aspectos están reunidos en diferentes sistemas como son:
        .bg-4
          .row.p-3.text-center
            .col-md-4
              .tarjeta.bg-2.h-100.p-4.d-flex.align-items-center
                h5.mb-0 Sistema General en Salud
            .col-md-4 
              .tarjeta.bg-2.h-100.p-4.d-flex.align-items-center
                h5.mb-0 Sistema General de Pensiones
            .col-md-4
              .tarjeta.bg-2.h-100.p-4.d-flex.align-items-center
                h5.mb-0 Sistema de Riesgos Labores y de Subsidio Familiar
      .col-lg-4.col-md-3.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t6/img.png' alt='')


    h3.t-red(data-aos="fade") Sistema general en salud
    p(data-aos="fade") El sistema general de salud dice que todos los habitantes deben estar afiliados para la atención en salud, ya sea en el régimen contributivo o en el régimen subsidiado; el primero corresponde cuando existe una relación laboral y el empleador está en la obligación de afiliar a los empleados y sus beneficiarios a salud. El segundo: el régimen subsidiado es la prestación de atención en salud para los colombianos que no tienen una relación laboral o generan ingresos que les permita pagar la afiliación.
    p(data-aos="fade") El régimen subsidiado está dado para la población más vulnerable, como son los desplazados o las personas que, de acuerdo con las encuestas generadas por el SISBEN, indiquen que no cuentan con la protección en Salud.
    p.mb-4(data-aos="fade") El siguiente video desglosa cada uno de estos regímenes; obsérvelo con suma atención y procure llevar registro de lo más destacado en su libreta personal de apuntes.

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BBCvcTlDNds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Sistema general en salud en Colombia para los regímenes contributivo y subsidiado


    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Aseguramiento al sistema general de seguridad social en salud
                  p.text-small.mb-0 Refuerce sus saberes y lea con atención la cartilla “Aseguramiento al sistema general de seguridad social en salud”, que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/cartillas-de-aseguramiento-al-sistema-general-de-seguridad-social-en-salu.pdf')" target="_blank")
                    span Ver enlace
                    i.fas.fa-external-link-alt


    h3.t-red(data-aos="fade") Sistema general en pensiones
    p(data-aos="fade") Este sistema tiene como objetivo velar el amparo de la población en aspectos como: pensión de vejez, pensión por invalidez, sustitución pensional, entre otros, pero se profundizará en este componente en los nombrados.
    p.mb-4(data-aos="fade") Se puede definir pensión como una prestación económica que recibe mensualmente un trabajador o independientes, siempre y cuando cumplan con los requisitos para adquirir el derecho a dicha pensión.

    .fondo-t3.mb-5(data-aos="fade-down")
      .row.justify-content-evenly.p-4
        .col-lg-2.col-md-2.col-4.mb-4.mb-md-0.pe-md-0
          img.mx-auto(src='@/assets/curso/temas/t6/ico.svg' alt='' style="width: 110px;")
        .col-lg-10.col-md-9.ps-md-0
          p En relación con el sistema general de pensiones, tenga en cuenta algunas generalidades como las que se enuncian enseguida:
          ul.lista-ul--color.color-azul.fa-ul
            li.mb-1
              i.fas.fa-circle
              | Toda persona con un contrato laboral e independientes y comerciantes con capacidad de pago y que estén afiliados al sistema general de salud están obligados a pagar al sistema general de pensiones.
            li.mb-1
              i.fas.fa-circle
              | El fondo pensional lo puede elegir el empleado.
            li.mb-1
              i.fas.fa-circle
              | El porcentaje de cotización es el 16 % sobre el salario mensual del trabajador donde el empleador paga el 12 % correspondiente y el 4 % se le descuenta mes a mes al empleado.
            li.mb-0
              i.fas.fa-circle
              | Cuando el trabajador tiene un salario superior a cuatro (4) salarios mínimos legales vigentes se le descuenta el 1 % adicional, este dinero va destinado al fondo de solidaridad pensional.

    p.mb-4(data-aos="fade") Los siguientes, son aspectos clave que integran el sistema de pensiones:
    
    TabsA.color-primario.mb-4(data-aos="fade-down")
      .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Pensión de vejez")
        p Es el ingreso que se tiene de manera mensual cuando una persona cumple con la edad y las semanas cotizadas requeridas para obtener la pensión. Esta pensión de vejez es para que las personas puedan disfrutar del descanso y cubran todas las necesidades básicas. Los requisitos para obtener esta pensión son: 
          b tener 57 años la mujer o 62 años el hombre y reunir 1300 semanas de cotización.
      .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Consideraciones sobre la pensión de vejez")
        p Según la regla general del sistema de pensiones nos dice que el monto mensual de la pensión de vejez estará entre el 65 % y el 80 % del ingreso base de liquidación, así:
        ul.lista-ul--color.color-azul.fa-ul
          li.mb-1
            i.fas.fa-circle
            | Si el afiliado cotizó 1300 semanas, el porcentaje de la pensión será del 65 % del ingreso base de liquidación.
          li.mb-1
            i.fas.fa-circle
            | Si el afiliado cotizó más de 1300 semanas, por cada 50 semanas cotizadas de forma adicional, el porcentaje de la pensión será incrementado en un 1.5 % del ingreso base de liquidación.
          li.mb-1
            i.fas.fa-circle
            | El monto de la pensión no puede ser mayor al 80 % del ingreso base de liquidación.
          li.mb-1
            i.fas.fa-circle
            | El valor de la mesada pensional no puede ser menor al salario mínimo legal mensual vigente ni superior a 25 salarios mínimos legales mensuales vigentes.
      .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Pensión por invalidez")
        p La pensión de invalidez es cuando un empleado ha perdido el 50 % o más de su capacidad laboral en razón a una enfermedad o patología que no corresponda al desarrollo de las actividades de su puesto de trabajo. Esta incapacidad debe de estar aprobada por una institución autorizada para esto.
      .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Consideraciones sobre la pensión por invalidez")
        p Para obtener este tipo de pensión debe:
        ul.lista-ul--color.color-azul.fa-ul
          li.mb-1
            i.fas.fa-circle
            | Ser calificado con una pérdida de capacidad laboral igual o superior al 50 %
          li.mb-1
            i.fas.fa-circle
            | Tener 50 semanas cotizadas en los 3 años inmediatamente anteriores a la fecha de estructuración de la invalidez o al acaecimiento de la causa invalidante.
          li.mb-1
            i.fas.fa-circle
            | En ningún caso, la pensión de invalidez puede ser superior al 75 % del IBL.
      .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Situación pensional")
        p Es una prestación donde, por el fallecimiento de un pensionado, por invalidez o vejez, esta pensión pasa a uno de sus beneficiarios como lo establece la ley
      .div.border-bottom-orange.bg-3.p-4.p-4(titulo="Consideraciones sobre la situación pensional")
        p Los beneficiarios pueden ser:
        ul.lista-ul--color.color-azul.fa-ul
          li.mb-1
            i.fas.fa-circle
            | El cónyuge o compañero/a permanente. 
          li.mb-1
            i.fas.fa-circle
            | Los padres, solo si el cónyuge no ha dejado cónyuge o compañero permanente. 
          li.mb-1
            i.fas.fa-circle
            | Los hijos cuando son menores de edad. 
          li.mb-1
            i.fas.fa-circle
            | Los hijos mayores de edad hasta los 25 que años que dependan económicamente del afiliado y este estudiando tiempo completo.
          li.mb-1
            i.fas.fa-circle
            | Hijos inválidos que dependieran económicamente del afiliado.
          li.mb-1
            i.fas.fa-circle
            | Hermanos inválidos siempre y cuando demuestren que dependían económicamente del afiliado.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Sistema general de Pensiones
                  p.text-small.mb-0 Refuerce sus saberes y lea con atención la cartilla “Sistema general de Pensiones”, que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/00-Cartilla-Pensiones-Mintrabajo-OISS-Final-13052022.pdf')" target="_blank")
                    span Ver enlace
                    i.fas.fa-external-link-alt

    
    h3.t-red(data-aos="fade") Sistema general de riesgos profesionales
    p(data-aos="fade") El Ministerio de Trabajo define el sistema de riesgos laborales como el 
      b “conjunto de entidades públicas y privadas, normas y procedimientos, destinados a prevenir, proteger y atender a los trabajadores de los efectos de las enfermedades y los accidentes que puedan ocurrir con ocasión o como consecuencia del trabajo”.
    p.mb-4(data-aos="fade") Sobre el sistema general de riesgos profesionales, se pueden detallar algunas características, como:

    .bg-7.p-4.px-md-5.mb-5(data-aos="fade-down")
      ul.lista-ul--color.color-azul.fa-ul
        li.mb-1
          i.fas.fa-circle
          | Dentro de la norma se tiene establecido todo lo relacionado con los riesgos laborales, los cuales corresponden a todos los accidentes o enfermedades que ocurren por el desarrollo de las actividades laborales.
        li.mb-1
          i.fas.fa-circle
          | Ley 100 de 1993 estableció el Sistema General de Riesgos Profesionales que desde entonces ha tenido actualizaciones, la última, en la Ley 1562 del 11 de julio de 2012, que modificó el Sistema, hacia los Riesgos Laborales.
        li.mb-1
          i.fas.fa-circle
          | El sistema general de riesgos laborales se aplica para todas las empresas públicas y privadas del territorio colombiano.
        li.mb-1
          i.fas.fa-circle
          | Los trabajadores independientes están obligados afiliarse al sistema general de riesgos profesionales, siempre y cuando estén afiliados al sistema general de salud.
        li.mb-1
          i.fas.fa-circle
          | Los empleadores seleccionan la aseguradora de riesgos laborales que crea más pertinente y paga mes a mes a dicha entidad el porcentaje correspondiente al nivel de riesgo en que se encuentra el empleado; es de aclarar que en este pago no se le hace descuento al trabajador.
        li.mb-1
          i.fas.fa-circle
          | El empleador debe de velar por el cumplimiento de las normas de seguridad industrial, el funcionamiento del comité paritario de salud y la utilización de los elementos de protección exigidos para el desarrollo de las actividades diarias.
        li.mb-1
          i.fas.fa-circle
          | Diseñar y mantener vigente el reglamento de higiene y seguridad industrial.
        li.mb-1
          i.fas.fa-circle
          | Notificar a la ARL de acuerdo con lo estipulado en la norma sobre los accidentes laborales.
        li.mb-1
          i.fas.fa-circle
          | Las ARL no podrán rechazar a las empresas ni a sus trabajadores.
        li.mb-1
          i.fas.fa-circle
          | Las ARL, por delegación del Estado, ejercen la vigilancia y el control de la prevención de los riesgos laborales de las empresas que tengan afiliados, a los cuales deberán asesorar en el diseño del Sistema de Gestión en Seguridad y Salud en el Trabajo.
        li.mb-1
          i.fas.fa-circle
          | La calificación del origen de un accidente de trabajo o una enfermedad laboral será ejecutada en primera oportunidad, por la Administradora Colombiana de Pensiones -COLPENSIONES-, las ARL y las Compañías de Seguros que asuman el riesgo de invalidez y muerte, al igual que las Entidades Promotoras de Salud –EPS.


    .row.fondo-curuba.align-items-center.py-5 
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          p.mb-4(data-aos="fade") Los riesgos laborales están divididos en:

          .row.justify-content-center
            .col-md-6.col-lg-4.mb-4  
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t6/1.svg' alt='')
                .tarjeta.bg-6.color-hover
                  .text-center.p-4
                    h4 Clase I, de Riesgo Mínimo
                    p Ejemplo: la mayoría de las actividades comerciales y financieras, trabajos de oficina, centros educativos y restaurantes.
            .col-md-6.col-lg-4.mb-4   
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t6/2.svg' alt='')
                .tarjeta.bg-6.color-hover
                  .text-center.p-4
                    h4 Clase II, de Riesgo Bajo
                    p Ejemplo: algunos procesos manufactureros como la fabricación de tapetes, tejidos, confecciones y flores artificiales; almacenes por departamentos y algunas labores agrícolas.
            .col-md-6.col-lg-4.mb-4   
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t6/3.svg' alt='')
                .tarjeta.bg-6.color-hover
                  .text-center.p-4
                    h4 Clase III, de Riesgo Medio
                    p Ejemplo: procesos manufactureros como fabricación de agujas, alcoholes, alimentos, automotores y artículos de cuero.
            .col-md-6.col-lg-4.mb-4   
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t6/4.svg' alt='')
                .tarjeta.bg-6.color-hover
                  .text-center.p-4
                    h4 Clase IV, de Riesgo Alto
                    p Ejemplo: procesos manufactureros como aceites, cervezas y vidrios; procesos de galvanización, transporte aéreo o terrestre.
            .col-md-6.col-lg-4.mb-4   
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t6/5.svg' alt='')
                .tarjeta.bg-6.color-hover
                  .text-center.p-4
                    h4 Clase V, de Riesgo Máximo
                    p Ejemplo: areneras, manejo de asbestos, bomberos, manejo de explosivos, construcción, explotación petrolera y minera, entre otros.


</template>

<script>
export default {
  name: 'Tema6',
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
