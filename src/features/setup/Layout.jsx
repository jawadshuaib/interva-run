import PropTypes from 'prop-types';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="max-w-xlg ">
      <div className="bg-white  rounded shadow-md  dark:bg-slate-600">
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
