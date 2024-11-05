import React from 'react';
import { useParams } from 'react-router-dom';
import PostCard from './PostCard';
import posts from './PostData';

const ThreadPage = () => {
  const { postId } = useParams(); // Suponiendo que el parámetro de URL es "postId"
  
  // Buscar el post que coincide con el ID
  const post = posts.find((p) => p.id === parseInt(postId));

  // Si el post no se encuentra, mostrar un mensaje de error
  if (!post) {
    return <div>El post no fue encontrado.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100">
      {/* Post en la parte superior */}
      <PostCard post={post} />

      {/* Sección de Comentarios */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Comentarios</h2>
        {/* Aquí puedes cargar los comentarios del hilo usando una lista, componente o función de estado */}
        <div className="space-y-4">
          <p>Comentario 1: ¡Gran post!</p>
          <p>Comentario 2: ¡Muy informativo!</p>
          <p>Comentario 3: Gracias por compartir.</p>
          {/* Aquí irían más comentarios reales */}
        </div>
      </div>
    </div>
  );
};

export default ThreadPage;