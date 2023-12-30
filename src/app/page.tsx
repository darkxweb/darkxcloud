
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/darkxcloud.png"
              alt="Khijendra Dighore Profile"
              className="shadow-dark"
            />
            <h1>Khijendra Dighore</h1>
            <p>Ui UX Designer</p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/darkxweb" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/_.darksun._12" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/khijendra-dighore-98153526a" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
