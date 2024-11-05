const posts = [
    {
      id: 1,
      title: '5 Tips para Cuidar tus Plantas de Interior',
      description: 'Consejos prácticos para mantener tus plantas de interior saludables y vibrantes. Aprende los cuidados básicos y trucos avanzados.',
      date: 'Feb 2, 2023',
      datetime: '2023-02-02',
      category: 'Plantas',
      author: {
        name: 'Lucía Martínez',
        role: 'Botánica',
        imageUrl: 'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Especialista en plantas de interior, con más de 10 años dedicados a enseñar cuidados y decoración de espacios verdes en el hogar.'
      }
    },
    {
      id: 2,
      title: 'Marketing Digital: Estrategias para el 2024',
      description: 'Descubre las tendencias clave en marketing digital y cómo aplicarlas para maximizar tu alcance y mejorar conversiones.',
      date: 'Jan 12, 2024',
      datetime: '2024-01-12',
      category: 'Marketing',
      author: {
        name: 'Carlos Gómez',
        role: 'Estratega de Marketing',
        imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Estratega digital enfocado en desarrollo de marcas y tendencias emergentes en plataformas sociales y marketing de contenido.'
      }
    },
    {
      id: 3,
      title: 'Las 10 Mejores Canciones del 2023',
      description: 'Una selección de las canciones más populares del año que tienes que escuchar. ¡Descubre tus nuevas canciones favoritas!',
      date: 'Dec 25, 2023',
      datetime: '2023-12-25',
      category: 'Música',
      author: {
        name: 'Ana Pérez',
        role: 'Musicóloga',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Musicóloga apasionada por la cultura musical, con experiencia en análisis de tendencias y recomendaciones en música popular.'
      }
    },
    {
      id: 4,
      title: 'Cómo Pintar Paisajes con Acuarelas',
      description: 'Una guía para principiantes en el arte de pintar paisajes en acuarela. Aprende técnicas y descubre inspiración.',
      date: 'Nov 30, 2023',
      datetime: '2023-11-30',
      category: 'Pinturas',
      author: {
        name: 'Roberto Díaz',
        role: 'Artista Visual',
        imageUrl: 'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Artista visual especializado en acuarelas, con pasión por la naturaleza y las técnicas de pintura creativa para principiantes.'
      }
    },
    {
      id: 5,
      title: 'El Rol del Delantero en el Fútbol Moderno',
      description: 'Exploramos cómo ha cambiado la función del delantero y su impacto en el juego actual.',
      date: 'Mar 14, 2024',
      datetime: '2024-03-14',
      category: 'Fútbol',
      author: {
        name: 'Diego Hernández',
        role: 'Analista Deportivo',
        imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Analista de fútbol con experiencia en tácticas y estrategias, enfocado en la evolución del rol ofensivo en el fútbol moderno.'
      }
    },
    {
      id: 6,
      title: 'Cómo Propagar Suculentas en Casa',
      description: 'Aprende el proceso sencillo para propagar tus suculentas y crear un jardín vibrante con facilidad.',
      date: 'May 22, 2023',
      datetime: '2023-05-22',
      category: 'Plantas',
      author: {
        name: 'María López',
        role: 'Horticultora',
        imageUrl: 'https://images.unsplash.com/photo-1551227472-9a17b36c5a8a?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Horticultora experta en plantas suculentas, dedicada a enseñar técnicas de cultivo y propagación en el hogar.'
      }
    },
    {
      id: 7,
      title: 'Los 5 Mejores Canales de Música Indie en YouTube',
      description: 'Descubre canales de música indie que están marcando tendencia y ampliando el espectro musical.',
      date: 'Jul 10, 2023',
      datetime: '2023-07-10',
      category: 'Música',
      author: {
        name: 'Juan Herrera',
        role: 'Crítico Musical',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Crítico musical especializado en indie, con un ojo para descubrir nuevos talentos y recomendar música alternativa.'
      }
    },
    {
      id: 8,
      title: 'Cómo Crear una Marca Personal en Redes Sociales',
      description: 'Consejos y estrategias para desarrollar una marca personal efectiva en plataformas sociales.',
      date: 'Apr 18, 2024',
      datetime: '2024-04-18',
      category: 'Marketing',
      author: {
        name: 'Laura Méndez',
        role: 'Consultora de Marketing',
        imageUrl: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Consultora de marketing enfocada en desarrollo de marca personal y estrategias para redes sociales.'
      }
    },
    {
      id: 9,
      title: 'Pintando Retratos en Óleo: Técnicas Clave',
      description: 'Descubre técnicas para capturar detalles realistas en tus retratos de óleo.',
      date: 'Oct 10, 2023',
      datetime: '2023-10-10',
      category: 'Pinturas',
      author: {
        name: 'Sofía Sánchez',
        role: 'Pintora',
        imageUrl: 'https://images.unsplash.com/photo-1591845512059-c52c70111e01?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Pintora con un estilo clásico, enfocada en técnicas al óleo para retratos y estudios de figura humana.'
      }
    },
    {
      id: 10,
      title: 'Preparación Física en Fútbol para Jóvenes Jugadores',
      description: 'Un enfoque en el entrenamiento físico para futbolistas en desarrollo y su impacto en el rendimiento.',
      date: 'Aug 1, 2024',
      datetime: '2024-08-01',
      category: 'Fútbol',
      author: {
        name: 'Pablo Reyes',
        role: 'Preparador Físico',
        imageUrl: 'https://images.unsplash.com/photo-1520966871756-65871d879b07?auto=format&fit=facearea&w=256&h=256&q=80',
        description: 'Preparador físico especializado en el desarrollo de jóvenes atletas, con énfasis en entrenamiento de resistencia y agilidad.'
      }
    }
  ];

export default posts;