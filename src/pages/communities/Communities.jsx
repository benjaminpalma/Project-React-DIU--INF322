import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '/communities/Marketing/1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/communities/Marketing' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/profile/Michael-Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'test',
    href: '/communities/Marketing/2',
    description:
      'Lorem ipsum',
    date: 'Mar 16, 2024',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '/communities/Marketing' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/profile/Michael-Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];

// Individual card for post
const PostCard = ({ post }) => {
  return (
    <article
      onClick={() => window.location.href = post.href} // Redirección al hacer clic
      className="flex flex-col w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      {/* Info */}
      <div className="flex items-center gap-x-4 text-xs">
        <img alt={post.author.name} src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm">
          <p className="font-semibold text-gray-900">{post.author.name}</p>
          <p className="text-gray-600">{post.author.role}</p>
        </div>
        <time dateTime={post.datetime} className="text-gray-500">
          {post.date}
        </time>
        <a
          href={post.category.href}
          onClick={(e) => e.stopPropagation()} // Prevenir redirección cuando se clickea el enlace de categoría
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {post.category.title}
        </a>
      </div>

      {/* Conent */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{post.description}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
            <FontAwesomeIcon icon="fa-solid fa-heart" /> <span>Like</span>
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-red-600">
            <FontAwesomeIcon icon="fa-solid fa-heart-crack" /> <span>Dislike</span>
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-green-600">
            <FontAwesomeIcon icon="fa-solid fa-comment" /> <span>Comentarios</span>
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-yellow-500">
            <FontAwesomeIcon icon="fa-solid fa-medal" /> <span>Galardonar</span>
          </button>
        </div>
        <button className="text-gray-600 hover:text-blue-600"><FontAwesomeIcon icon="fa-solid fa-share" /> Compartir</button>
      </div>
    </article>
  );
};

// Page 
const Communities = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Barra superior anclada */}
      <div className="fixed top-16 left-0 right-0 z-10 flex items-center justify-between bg-white shadow px-6 py-4 border-b border-gray-200">
        <button hred='/communities/addcommunitie' className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Agregar Comunidad
        </button>
        
        <input
          type="text"
          placeholder="Busca comunidades"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Espacio para compensar la barra anclada */}
      <div className="mt-20 mx-auto grid max-w-2xl grid-cols-1 gap-y-8 border-t border-gray-200 pt-10 sm:mt-24 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Communities;