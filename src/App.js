import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "./Product.js";
import Contact from "./Contact.js";
import Login from "./Login.js";
import Service from "./sevice.js";
import GetAccess from "./getaccess.js";
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header backgroundimage">
          <div style={{ display: "flex" }}>
            <div className="headertext">team supra ®</div>
            <div className="links">
              <Link id="products" to="/product">
                Products
              </Link>
              <br></br>
              <Link id="service" to="/service">
                Services
              </Link>
              <br></br>
              <Link id="contact" to="/contact">
                Contact
              </Link>
              <br></br>
              <Link id="login" to="/login">
                Login
              </Link>
              <br></br>
              <Link id="earlyaccess" to="/getacesss">
                EarlyAccess
              </Link>
              <br></br>
            </div>
          </div>

          <div className="w-100 split">
            <div className="w-50 leftside">
              <div>
                <div className="column entertaiments">
                  <div className="news">
                    Instant collaborations for remote teams
                  </div>
                  <div className="sponsor">
                    All in one for your remote team chats, collaboration and
                    track projects
                  </div>
                  <div className="earlyaccess row">
                    <input id="emailinput" placeholder="Email"></input>
                    <button id="earlyaccessbutton">Get Early Access</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-50 rigthside">
            </div>
          </div>
        </div>
        <div className="page2">
          <div className="div">
            <div className="hoosonzai"></div>
            <div className="text">
              <h1>Your Hub For Team Work</h1>
              <br></br>
              <div className="lext">
              Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.
              </div>
            </div>
            <div className="pic">
              <img src="https://s3-alpha-sig.figma.com/img/6fb8/1a3b/5e68005b7f9de2809e692de01f802b3f?Expires=1668384000&Signature=S7laXp7bRXRr~J6982ISKFuxFXW7U-sQlXpwEwIUTZsdIxLkQdRc9Ir~kf~kkCqaKfvki9Z6TpDfH2ZdiS3QjdUqsYDJA7~DZZSRFHiLbbQoSdJoBIO1tcM8smLxTi-jrZ5-yiIgEgWaCZsBGqdITe5EEgLWTIws8rfPC30pniX~RfEe0dt~j-PmYSaIf68NSIUMxOnkR4nFqi4ZNBFqj9TDGzWidC~ocJ-lIoCWu69YQnNrUY3c51RoUZOxz1F7ZFy0LTv4MfE~EU5IksK9GcGSJkIphdopJg5ksYBLkNf3jR2Yp6oNgh6btccORCR7ph~eG8g9hx~utj1PpiSojg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            </div>
          </div>
        </div>
        <div className="page3">
            <img className="png" src="https://s3-alpha-sig.figma.com/img/967e/b14e/6fc29dfe6ee46cdd918b8c8b106d5e66?Expires=1668384000&Signature=Moi3Nl5aFZibz1BCdDNVXNJCsUqFI2BW2C8heA5SJrdLlv19b3NG37cnaGouGtoGtxDmV-~MZvgxg0UEwNlUwCBDlwCxle0LhYZFsE4E40b5OjmTWyk~IJymXlYt37q6-n-HpeTz33uC2zfA9Zw44VSKCMkfCyhQVCWO7F8orUxE-epZDh5cj8cHhMXOr5a63bos2MPOQlYsUIY~pxfDhffONvourJ7WBsymdU028wk0iJeGAYqPTXm6aCiMa9vBaSkUNVXzXSFPQxXirGFYExP~jQIhiStY4n0m1xsGobxJDs~AwGzrVwUSLHky0S8sWu2tmni-cChdrjDr5iyOMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            <div className="simple">
            <h1>Simple Task Managment</h1>
            <br></br>
            <div className="les">Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.
          </div>
          </div>
        </div>
        <div className="empty"></div>
        <div className="page4">
          <img className="spoky" src="https://s3-alpha-sig.figma.com/img/9b79/b9cf/49bac0ef10dfa8c6bf50bec13d962a3b?Expires=1668384000&Signature=TGAWpVOJGqQsn~85Tu6EDEUqwbbBLxyqL17Uns8C6sZSms9LGxJxWNNjhB3RvO~Q9U0gRIKkxIaEA7gg7DxzwSOwowEJXDbIYC3SVPHXlGJ8C3Eyy9vU0XPDHQVUpLqIqPkPEPzMnNdOcpEyoeZriWOq4M1SfDIgd3D4IWJOuMFURP8wyU9~9WjDCV06qWXMW3lehaFw9O3mwe4XfzjQzmkuh1kIFP2oHeanmPRXxgWvqDlIEpMlfS15I4e5hCllDoe73OAL6J54JA5hPWddgyfBQlJZcGREWzc9SSZWHuJUYEOGTp8~W1XrJrig6hY2ElxvySaaXq76AUDrB0WefQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
          <div className="write">
          <h1>Scheduling that actually works</h1>
          <br></br>
          Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
        </div>
        <div class="ø"></div>
        <div className="aboutus">
            <div className="aboutuscontainer">
              <div className="w-20">What people say about us</div>
              <div className="w-80">
                <Avatar
                  name="Amy Klassen"
                  text="          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place."
                />
                <Avatar
                  name="Amy Klassen"
                  text="          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place."
                />
                <Avatar
                  name="Amy Klassen"
                  text="          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place."
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footercontainer">
              <div className="support">
                <div className="specialwords">team.</div>
                <div>instagram</div>
                <div>facebook</div>
                <div>twitter</div>
                <div>instagram</div>
                <div>facebook</div>
                <div>twitter</div>
              </div>
              <div className="cases">
                <div className="specialwords">Use Cases</div>
                <div>UI Design</div>
                <div>UX Design</div>
                <div>Prototyping</div>
                <div>UI Design</div>
                <div>UX Design</div>
                <div>Prototyping</div>
              </div>
              <div className="explore">
                <div className="specialwords">Explore</div>
                <div>Figma</div>
                <div>Customers</div>
                <div>Why I Love Figma</div>
                <div>Figma</div>
                <div>Costumers</div>
                <div>Why I Love Figma</div>
              </div>
              <div className="resources">
                <div className="specialwords">Resources</div>
                <div>Community Resources Hub</div>
                <div>Support</div>
                <div>Education</div>
                <div>Community Resources Hub</div>
                <div>Support</div>
                <div>Education</div>
              </div>
              <div className="subscribe">
                <div>Subscribe to our newsletter</div>
                <div className="footerinputdiv">
                  <input className="footerinput" placeholder="Email"></input>
                  <button className="footerbutton">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </BrowserRouter>
  );
}
const Avatar = ({ name, text }) => {
  return (
    <div className="compile">
      <div className="margin">
        <div>
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
        </div>
        <div className="description">{text}</div>
        <div className="personname">{name}</div>
      </div>
    </div>
  );
};

export default App;
