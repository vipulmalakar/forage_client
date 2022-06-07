import style from "./Card.module.css";
export default function Card(props) {
  return (
    <>
      <div className={style.card}>
        <img
          src="https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg"
          className={style.cardimgtop}
          alt="..."
        />
        <div className="cardbody">
          <p>Created at</p>
          <p>{props.title}</p>
          {
            props.type === 'ack' && (
            <div>
              {" "}
              <p>Accepted by</p>
              <p>{props.name}</p>
              {
                props.status && (
            <div>
              {" "}
                <a href="#" className="btn btn-primary">
                    Acknowlegment
                </a>
                </div>
                )
              }
            </div>
          )
          }
          {
              props.type === 'noack' && (
                  <div>
                  <p>Time left: </p>
                  {" "}
                <a href="#" className="btn btn-primary">
                    Cancel
                </a>  
                {" "}
                <a href="#" className="btn btn-primary">
                    View
                </a>
                  </div>
              )
          }
          {/* {
            props.type === 'save' && (
            <div>
              {" "}
              <p>Accepted by</p>
              <p>{props.name}</p>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
