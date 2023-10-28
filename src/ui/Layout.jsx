import PropTypes from 'prop-types';
import Footer from '../features/setup/ui/Footer';

export default function Layout({ children, customClass }) {
  return (
    <div className={`${customClass} max-w-xlg`}>
      <div className="bg-white rounded-lg shadow-md">{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  customClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  customClass: '',
};
