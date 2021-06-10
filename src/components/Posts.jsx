import React from "react";

import AppCard from "./AppCard";

const postData = {
  "-MYqojsWP7dh2rTAPT1D": {
    content: "Excelente post!",
    creationDate: "14/04/2021",
    creationTime: "19:00",
    post: 1,
    replyId: 1,
    userId: 1,
  },
  "-MYqoldW0m-hVBKVo4px": {
    content: "Buen post!",
    creationDate: "14/04/2021",
    creationTime: "19:00",
    post: 1,
    replyId: 2,
    userId: 2,
  },
  "-MYqommktfjznme4oJQJ": {
    content: "Tengo dudas",
    creationDate: "14/04/2021",
    creationTime: "19:00",
    post: 2,
    replyId: 3,
    userId: 1,
  },
  "-MYqooAX_JglzyfVtQ9G": {
    content: "Puedes ayudarme, tengo duda acerca del tema",
    creationDate: "14/04/2021",
    creationTime: "19:00",
    post: 2,
    replyId: 4,
    userId: 3,
  },
  "-MYqopFl4xkIk25G9-bU": {
    content: "Hola, Excelente post!",
    creationDate: "06/04/2021",
    creationTime: "11:00",
    post: 3,
    replyId: 5,
    userId: 1,
  },
  "-MZ-K6DVqpmzWQwgcokP": {
    content: "jQuery is excelent!!!",
    creationDate: "4/23/2021",
    creationTime: "3:03 PM",
    post: 3,
    replyId: 1619208204272,
    userId: 3,
  },
  "-MZ-KlbQ96-yWT14-tKW": {
    content: "jQuery is fantastic!!!",
    creationDate: "4/23/2021",
    creationTime: "3:06 PM",
    post: 3,
    replyId: 1619208377896,
    userId: 1619139224200,
  },
  "-MZ-L_x1Ox0xjck52cNt": {
    content: "Great job!!!",
    creationDate: "4/23/2021",
    creationTime: "3:09 PM",
    post: 9,
    replyId: 1619208592271,
    userId: 3,
  },
  "-MZ-SfU9EIZHnXpqUMXa": {
    content: "first comment, great job ",
    creationDate: "4/23/2021",
    creationTime: "3:40 PM",
    replyId: 1619210449934,
    userId: 3,
  },
  "-MZ-VYrNRk8rzHdtnMJV": {
    content: "First comment, congratulations!!!",
    creationDate: "4/23/2021",
    creationTime: "3:53 PM",
    post: 4,
    replyId: 1619211205022,
    userId: 3,
  },
  "-MZ01d7FOfJyt4XH7mLT": {
    content: "comment new",
    creationDate: "4/23/2021",
    creationTime: "6:22 PM",
    post: 2,
    replyId: 1619220139549,
    userId: 3,
  },
  "-MZ0Sgr1gzo2bAeLTd5u": {
    content: "WOOOOOOOOW Joanna!!!",
    creationDate: "4/23/2021",
    creationTime: "8:19 PM",
    post: 2,
    replyId: 1619227180908,
    userId: 1619162437282,
  },
  "-MZ0bkHOPI2Lg-gCrHLq": {
    content: "Buen post",
    creationDate: "4/23/2021",
    creationTime: "9:03 PM",
    post: 2,
    replyId: 1619229816388,
    userId: 1619162437282,
  },
  "-MZ0cJ06P_rXVpK198m2": {
    content: "Buen post desde mobile",
    creationDate: "4/23/2021",
    creationTime: "9:06 PM",
    post: 2,
    replyId: 1619229962735,
    userId: 1619162437282,
  },
  "-MZ0cVwCn1qjdLBkHbQy": {
    content: "Buen post 2",
    creationDate: "4/23/2021",
    creationTime: "9:06 PM",
    post: 6,
    replyId: 1619230015667,
    userId: 1619162437282,
  },
  "-MZFFapYcCiVlDcAOonV": {
    content: "good Post!! ",
    creationDate: "4/26/2021",
    creationTime: "5:17 PM",
    post: 11,
    replyId: 1619475459134,
    userId: 1619475403839,
  },
};

class Posts extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.props = props;
  }
  render() {
    const image = this.props.className ? this.props.className : "";

    return (
      <main>
        <AppCard>
          <img
            className="card-img-top"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--F2RRta4a--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thevaluable.dev/images/2021/02_vim_advanced/vim-advanced.jpg"
            alt="Card image cap"
          />
          <h5 className="card-title">
            How to send Email with node js for free
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </AppCard>
        <AppCard>
          <h5 className="card-title">
            How to send Email with node js for free
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </AppCard>
        <AppCard>
          <h5 className="card-title">
            How to send Email with node js for free
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </AppCard>
      </main>
    );
  }
}

export default Posts;
