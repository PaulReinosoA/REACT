import { PropTypes } from 'prop-types';

export const GifGfridItem = ({ url, title }) => (
  <div className="card">
    <img src={url} alt={title} />
    <p>{title}</p>
  </div>
);

GifGfridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
