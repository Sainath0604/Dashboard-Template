import PropTypes from "prop-types";

function ProgressBar({ percentage }) {
  return (
    <div>
      <div className="w-350 h-5 rounded-lg bg-gray-300">
        <div
          className="h-full bg-indigo-600 rounded-lg"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
