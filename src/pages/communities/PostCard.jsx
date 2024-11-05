import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [galardonado, setGalardonado] = useState(false);
  const [medalType, setMedalType] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const userProfileLink = `/profile/${post.author.name.replace(/\s+/g, '-').toLowerCase()}`;

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  const handleMedalSelection = (type) => {
    setMedalType(type);
    setGalardonado(true);
    setIsDropdownOpen(false);
  };

  const handleNavigateToThread = () => {
    navigate(`/communities/${post.category}/${post.id}`); // Redirige a la página del hilo usando el ID del post
  };

  const shareToSocial = (platform) => {
    const shareUrl = `https://www.example.com`;
    let url = '';

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, '_blank');
    setIsShareOpen(false); // Cierra el menú de compartir
  };

  return (
    <article
      onClick={handleNavigateToThread} // Redirección al hacer clic en toda la tarjeta
      className="flex flex-col w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      {/* Info */}
      <div className="flex items-center gap-x-4 text-xs">
        <Link 
          to={userProfileLink}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center z-5">
          <img
            alt={post.author.name}
            src={post.author.imageUrl}
            className="h-10 w-10 rounded-full bg-gray-50 cursor-pointer"
          />
        </Link>
        <Link
        to={userProfileLink}
        onClick={(e) => e.stopPropagation()}
        className="text-sm z-5">
          <p className="font-semibold text-gray-900">{post.author.name}</p>
          <p className="text-gray-600">{post.author.role}</p>
        </Link>
        <time dateTime={post.datetime} className="text-gray-500">
          {post.date}
        </time>
        <Link
          to={`/communities/${post.category}`}  // Asegúrate de que post.category tenga el valor correcto
          onClick={(e) => e.stopPropagation()} // Este evita que el evento de clic se propague
          className="relative z-5 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {/* Aquí puedes agregar el texto que quieres que aparezca en el enlace */}
          {post.category} {/* Asegúrate de que `name` sea una propiedad de la categoría */}
        </Link>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{post.description}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLike();
            }}
            className={`flex items-center gap-1 ${liked ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
          >
            <FontAwesomeIcon icon="fa-solid fa-heart" /> <span>Like</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDislike();
            }}
            className={`flex items-center gap-1 ${disliked ? 'text-red-600' : 'text-gray-600'} hover:text-red-600`}
          >
            <FontAwesomeIcon icon="fa-solid fa-heart-crack" /> <span>Dislike</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNavigateToThread();
            }}
            className="flex items-center gap-1 text-gray-600 hover:text-green-600"
          >
            <FontAwesomeIcon icon="fa-solid fa-comment" /> <span>Comentarios</span>
          </button>

          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className={`flex items-center gap-1 ${
                medalType === 'bronce' ? 'text-yellow-600' : medalType === 'plata' ? 'text-gray-400' : medalType === 'oro' ? 'text-yellow-500' : 'text-gray-600'
              } hover:text-yellow-500`}
            >
              <FontAwesomeIcon icon="fa-solid fa-medal" /> <span>{medalType ? `Galardón (${medalType})` : 'Galardonar'}</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMedalSelection('bronce');
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                >
                  🥉 Bronce
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMedalSelection('plata');
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                >
                  🥈 Plata
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMedalSelection('oro');
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                >
                  🥇 Oro
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsShareOpen(!isShareOpen);
            }}
            className="text-gray-600 hover:text-blue-600"
          >
            <FontAwesomeIcon icon="fa-solid fa-share" /> Compartir
          </button>

          {isShareOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  shareToSocial('facebook');
                }}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  shareToSocial('twitter');
                }}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> X/Twitter
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  shareToSocial('linkedin');
                }}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" /> LinkedIn
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  shareToSocial('whatsapp');
                }}
                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;