export default {
  global: {
    componenteFormativo: 'Liquidación laboral de personal de confecciones',
    descripcionCurso:
      'Este componente tiene como objetivo promover el conocimiento de las relaciones laborales en Colombia y los aspectos más importantes de contratación; estableciendo criterios y especificaciones técnicas que permitirán aplicar la legislación laboral vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Legislación laboral',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El salario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La jornada laboral en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Prestaciones sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Prima de servicios',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Auxilio de cesantías e intereses de las cesantías',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Dotación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Vacaciones e indemnizaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Sistema de seguridad social en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Nómina',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Legislación laboral',
      referencia:
        'Decreto 2663 de 1950. [Presidencia de la República] Por el cual se expide Código Sustantivo del Trabajo decretos 2663 y 3743 de 1950. 05 Agosto de 1950. ',
      tipo: 'Decreto - Biblioteca SENA',
      link:
        'https://sena-globallex-info.bdigital.sena.edu.co/normativa/detalle/decreto-2663-de-1950-1410/txt',
    },
    {
      tema: 'El salario',
      referencia:
        'Ley 2101 de 2021. Por medio de la cual se reduce la jornada laboral semanal de manera gradual, sin disminuir el salario de los trabajadores y se dictan otras disposiciones. Julio 15 de 2021. N° 51736.',
      tipo: 'Ley - Biblioteca SENA',
      link:
        'https://sena-globallex-info.bdigital.sena.edu.co/normativa/detalle/ley-2101-de-2021-69334/txt',
    },
    {
      tema: 'Prestaciones sociales',
      referencia:
        'Repase Tu Clase. (2020). <em>Liquidación de Prestaciones sociales</em>. [Video] YouTube. ',
      tipo: 'Video Youtube ',
      link: 'https://www.youtube.com/watch?v=fLryIw1GBn8',
    },
    {
      tema: 'Vacaciones e indemnizaciones',
      referencia:
        'Tu Abogado Laborista, (2019). Indemnización por Despido sin Justa Causa / Indemnización Contrato de Trabajo. [Video] YouTube. ',
      tipo: 'Video Youtube ',
      link: 'https://youtu.be/-F9qvBrBRtw',
    },
    {
      tema: 'Sistema de seguridad social en Colombia',
      referencia:
        'Ministerio de Salud. (2014). <em>Aseguramiento al Sistema de Seguridad Social en Salud</em>. Obtenido de Ministerio de Salud.',
      tipo: 'PDF ',
      descarga:
        '/downloads/cartillas-de-aseguramiento-al-sistema-general-de-seguridad-social-en-salu.pdf',
    },
    {
      tema: 'Sistema de seguridad social en Colombia',
      referencia:
        'Ministerio del Trabajo. (2021) sdf . <em>Cartilla Mintrabajo Preguntas Frecuentes Sistema General de Pensiones, sus Regímenes y los Requisitos de Acceso a las Prestaciones</em>. ',
      tipo: 'PDF ',
      descarga:
        '/downloads/00-Cartilla-Pensiones-Mintrabajo-OISS-Final-13052022.pdf',
    },
    {
      tema: 'Nómina',
      referencia:
        'Marquez, (2019) Cómo Liquidar la Nómina Paso a Paso. [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/gQEQwhm6v0M',
    },
  ],
  glosario: [
    {
      termino: 'Contrato de trabajo',
      significado:
        'es un acuerdo por virtud del cual una persona natural se obliga a prestar un servicio personal a otra (natural o jurídica), bajo continua subordinación, cumpliendo órdenes e instrucciones y recibiendo por su labor una remuneración.',
    },
    {
      termino: 'Contrato verbal',
      significado:
        'por simple acuerdo expresado oralmente, las partes convienen con en la índole de trabajo y el sitio en donde ha de realizarse la cuantía y la forma de remuneración, así como los periodos que regulen su pago.',
    },
    {
      termino: 'Contrato escrito',
      significado:
        'debe constar de un documento firmado por las partes y contener cuando menos cláusulas sobre estos puntos identificación y domicilio de las partes lugar y fecha de celebración lugar donde se vaya a prestar el servicio, naturaleza de trabajo cuantía de la remuneración forma y periodos de pago estimación del valor en caso de que haya suministro de habitación o alimentación como parte del salario, duración del contrato y terminación.',
    },
    {
      termino: 'Descanso dominical remunerado',
      significado:
        'es obligatorio conceder al trabajador descanso remunerado en domingo, siempre y cuando el empleado haya laborado toda la semana a los cuales se comprometió.',
    },
    {
      termino: 'El sistema General de Pensiones',
      significado:
        'garantizar el amparo contra la invalidez, vejez y muerte, mediante el reconocimiento de pensiones y prestaciones económicas determinadas por la ley.',
    },
    {
      termino: 'Horas extra',
      significado:
        'el trabajo que se desarrolla más allá de la jornada ordinaria o de la máxima legal en el evento de trabajadores amparados por esta, se conoce como trabajador suplementario o de horas extras y debe remunerarse en forma especial. En ningún caso las horas extras de trabajo, diurnas o nocturnas podrán exceder de dos (2) horas diarias y doce (12) a la semana.',
    },
    {
      termino: 'Obligaciones del empleador',
      significado:
        'corresponde obligaciones de protección y seguridad y a los trabajadores el cumplimiento de las instrucciones que les impartan y la disposición para su labor.',
    },
    {
      termino: 'Obligaciones generales de las partes',
      significado:
        'las partes que invierten en el contrato de trabajo tienen reciprocas obligaciones, de cuyo cumplimiento y observancia se deriva el normal desarrollo de sus relaciones. Así mismo tiene restricciones y prohibiciones orientadas a amparar derechos laborales.',
    },
    {
      termino: 'Periodo de prueba',
      significado:
        'es la etapa inicial de algunos contratos de trabajo. Tiene por objeto que los contratantes establezcan un periodo de ensayo para saber si las condiciones de trabajo se acomodan a las aspiraciones de las partes.',
    },
    {
      termino: 'Prestaciones Sociales',
      significado:
        'las prestaciones sociales tienen su origen y causa en la relación de trabajo y constituyen una contraprestación a cargo de los empleadores.',
    },
    {
      termino: 'Sistema de Seguridad social en salud',
      significado:
        'el régimen de seguridad social está conformado por las entidades promotoras de salud y por las instituciones prestadoras de los servicios de salud y tiene por objeto crear las condiciones que posibiliten el acceso de la población afiliada a todos los niveles de atención para cubrir las contingencias por enfermedad general y maternidad.',
    },
    {
      termino: 'Sistema de riesgos profesionales',
      significado:
        'el régimen de riesgos profesionales tiene por objeto prevenir proteger y atender a los trabajadores de los efectos de las enfermedades y los accidentes que puedan ocurrirles con ocasión o como consecuencia del trabajo que desarrollan.',
    },
    {
      termino: 'Trabajo nocturno dominical o festivo',
      significado:
        'se remunera con un recargo del 35% más del salario que le corresponde al trabajador por laborar en dominical o festivo en forma habitual.',
    },
  ],
  referencias: [
    {
      referencia:
        'Marquez, A. (2019). <em>Cómo Liquidar la Nómina Paso a Paso.</em> [Video] YouTube.  ',
      link: 'https://www.youtube.com/watch?v=gQEQwhm6v0M',
    },
    {
      referencia:
        '<em>Ley 100 de 1993</em>. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones Ministerio de Salud. Diciembre 23 de 1993.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1635955',
    },
    {
      referencia:
        'Ministerio de Salud. (2014). <em>Aseguramiento al Sistema General de Seguridad Social en Salud</em>. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/DOA/RL/cartillas-de-aseguramiento-al-sistema-general-de-seguridad-social-en-salud.pdf',
    },
    {
      referencia:
        'Ministerio de Trabajo. (2018). <em>Cartilla Riesgos Laborales</em>. ',
      link:
        'http://199.89.55.129/scorecolombia/documents_co/herramientas/M5/Material_tecnico_apoyo/SGSST_2015/1.%20SGSST/1.%20Cartillas_Publicidad/Cartilla__Riesgos__Laborales_MT.pdf',
    },
    {
      referencia:
        'Ley 3743 de 1950. <em>Código Sustantivo del Trabajo</em>. Ministerio del Trabajo. 7 de junio de 1951.   No 27.622. ',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?id=30019323#ver_30187823',
    },
    {
      referencia:
        'Ley 2101. Por medio de la cual se reduce la jornada laboral semanal de manera gradual, sin disminuir el salario de los trabajadores y se dictan otras disposiciones.  15 de julio de 2021. ',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/LEY%202101%20DEL%2015%20DE%20JULIO%20DE%202021.pdf',
    },
    {
      referencia:
        'Repase Tu Clase. (2020). <em>Liquidación de Prestaciones Sociales</em>. [Video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=fLryIw1GBn8',
    },
    {
      referencia:
        'Tu Abogado Laborista. (2019). <em>Indemnización despido sin Justa Causa / Indemnización Contrato de Trabajo</em>. [Video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=-F9qvBrBRtw',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Witer Calle Valencia',
          cargo: 'Instructora Red Gestión Administrativa',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquía',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Asesora metodóloga Diseño y desarrollo curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí - Regional Antioquía',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
