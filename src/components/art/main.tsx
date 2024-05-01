import Image from "next/image";
import "./style.css";

const Art = () => {
  return (
    <div className="art-container">
      <h1>Art</h1>
      <div className="art-content">
        <div className="art-column">
          <p>
            I&apos;m a big fan of art. I like to work on music, short films,
            photography, and videogames.
          </p>
          <p>
            There&apos;s a lot to show but here are some relevant links to my
            work:
          </p>
          <ul>
            <li>
              <h3 style={{ marginBottom: "0.5rem" }}>
                <a href="https://www.youtube.com/thefredo1000">
                  YouTube Channel
                </a>
              </h3>
              <ul>
                <li>
                  Here I have posted a bunch of my life since I was a kid. Here
                  you can find my music, short films, and some other stuff.
                </li>
              </ul>
            </li>
            <li>
              <h3 style={{ marginBottom: "0.5rem" }}>
                <a href="https://www.instagram.com/rodrigoca.sale/">
                  Photography Account
                </a>
              </h3>
              <ul>
                <li>I like to take pictures of people and stuff :D</li>
              </ul>
            </li>
            <li>
              <h3 style={{ marginBottom: "0.5rem" }}>
                <a href="https://soundcloud.com/casalecasalecasale">
                  Soundcloud
                </a>
              </h3>
              <ul>
                <li>More music!</li>
              </ul>
            </li>
            <li>
              <h3 style={{ marginBottom: "0.5rem" }}>
                <a href="https://github.com/thefredo1000/casino-poker-advance/releases/tag/Alpha">
                  Casino Hold&apos;em Advance
                </a>
              </h3>
              <ul>
                <li>
                  GameBoy Advance videogame made by me! This is an abandoned
                  project but it works as a cool MVP. More games coming soon!
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="art-column images-container">
          {[0, 1, 2, 3].map((number) => (
            <div
              key={number}
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src={"/images/img" + number + ".jpg"}
                alt="Me and friends"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Art;
