const Footer = () => {
  let houer = new Date().getHours();
  const open = 8;
  const close = 21;
  let isOpen = houer >= open && houer <= close;
  // if (houer >= open && houer <= close) alert("We are currently open");
  // else alert("We are close");
  return (
    <div className="Footer">
      <footer>
        {isOpen ? (
          <div className="container" id="footer_text">
            <p>
              We're open until to {close}:00 come visit us and order online.
            </p>
            <button className="btn btn-outline-warning order">Order</button>
          </div>
        ) : (
          <p>
            {" "}
            Please come between {open}:00 and {close}:00 houre
          </p>
        )}
      </footer>
    </div>
  );
};

export default Footer;
