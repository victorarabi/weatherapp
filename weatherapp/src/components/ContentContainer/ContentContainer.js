import './ContentContainer.scss';

//container component to define margin
export default function ContentContainer({ children, background }) {
  //verifies if container is defined for header/footer or main.
  if (background === 'hf') {
    return (
      <div className="content-container content-container--hf">{children}</div>
    );
  } else if (background === 'main') {
    return (
      <div className="content-container content-container--main">
        {children}
      </div>
    );
  }
}
