import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className="max-w-xlg bg-white  rounded shadow-md  dark:bg-slate-600">
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
