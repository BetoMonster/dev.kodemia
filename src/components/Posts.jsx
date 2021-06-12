import React from "react";

import { useHistory } from "react-router";

import AppCard from "./AppCard";

export default function Posts(props) {
  const history = useHistory();

  const buildLI = ([key, { title, description, image }]) => {
    return (
      <div className="card my-2" key={key}>
        <div className="card-body">
          <img className="card-img-top" src={image} alt="Card image cap" />
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            onClick={() => history.push(`/posts/${key}`)}
            className="btn btn-primary"
          >
            Detail
          </button>
        </div>
      </div>
    );
  };

  return (
    <ul className="d-flex flex-column">{props.data.reverse().map(buildLI)}</ul>
  );
}

/*const postsUI = () => {
      for (const key in postsData) {
        {
          postsData[key].map(({ content, post }, index) => {
            console.log(post);
            return (
              <div className="card my-2" key={key}>
                <div className="card-body">
                  <img
                    className="card-img-top"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--F2RRta4a--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thevaluable.dev/images/2021/02_vim_advanced/vim-advanced.jpg"
                    alt="Card image cap"
                  />
                  <h5 className="card-title">{content}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            );
          });
        }
      }
    };*/
