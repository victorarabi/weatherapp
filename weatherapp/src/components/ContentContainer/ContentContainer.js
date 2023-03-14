import './ContentContainer.scss';

//container component to define margin
export default function ContentContainer({ children, background }) {
  //verifies if container is defined for header/footer or main.
  if (background === 'header') {
    return (
      <div className="content-container content-container--header">
        {children}
      </div>
    );
  } else if (background === 'main') {
    return (
      <div className="content-container content-container--main">
        {children}
      </div>
    );
  } else if (background === 'footer') {
    return (
      <div className="content-container content-container--footer">
        {children}
      </div>
    );
  }
}
