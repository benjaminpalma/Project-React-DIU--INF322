import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from './PostCard';
import posts from './PostData';
import { Link } from 'react-router-dom';

const initialComments = [
  {
    id: 1,
    author: 'Usuario1',
    text: '¡Gran post! Me encanta cómo explicas los conceptos.',
    date: '2024-11-05'
  },
  {
    id: 2,
    author: 'Usuario2',
    text: 'Muy informativo. Gracias por compartir esta información.',
    date: '2024-11-04'
  },
  {
    id: 3,
    author: 'Usuario3',
    text: 'Estoy de acuerdo, sería genial ver más contenido como este.',
    date: '2024-11-03'
  },
  {
    id: 4,
    author: 'Usuario4',
    text: '¿Alguien tiene más recursos sobre este tema?',
    date: '2024-11-02'
  },
  {
    id: 5,
    author: 'Usuario5',
    text: 'Interesante perspectiva, me ha hecho reflexionar.',
    date: '2024-11-01'
  }
];

const ThreadPage = () => {
  const { postId } = useParams();
  const { category } = useParams();
  const post = posts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div>El post no fue encontrado.</div>;
  }

  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, { id: comments.length + 1, author: 'UsuarioX', text: newComment, date: new Date().toISOString().split('T')[0] }]);
      setNewComment('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100">
      {/* Botón de Volver */}
      <Link to="/communities" className="flex items-center mb-4 text-blue-600 hover:text-blue-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m9 9L5 12l9-9" />
        </svg>
        Volver a Comunidades
      </Link>

      <PostCard post={post} />
      <div className="ml-8 mt-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Comentarios</h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <p key={comment.id}><strong>{comment.author}:</strong> {comment.text} <span className="text-gray-500 text-sm">({comment.date})</span></p>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Escribe tu comentario..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Agregar Comentario
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThreadPage;