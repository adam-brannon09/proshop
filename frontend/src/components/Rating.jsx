// Import the React icons for stars
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// Define a React function component called `Rating` that takes a value and text prop
// The props are imported from the Product component
function Rating({ value, text }) {
    // Return a `div` element with the CSS class `rating`
    return (
        <div className='rating'>
            {/* Render a star icon if the value is greater than or equal to 1 */}
            <span>
                {value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            {/* Render a star icon if the value is greater than or equal to 2 */}
            <span>
                {value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            {/* Render a star icon if the value is greater than or equal to 3 */}
            <span>
                {value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            {/* Render a star icon if the value is greater than or equal to 4 */}
            <span>
                {value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            {/* Render a star icon if the value is greater than or equal to 5 */}
            <span>
                {value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            {/* Render the text prop after the star icons, but only if the text prop is not null or empty */}
            <span className="rating-text">{text && text}</span>

        </div>
    );
}

// Export the `Rating` component
export default Rating;
