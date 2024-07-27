const Footer = () => {
  let houer = new Date().getHours();
  const open = 8;
  const close = 21;
  let isOpen = houer >= open && houer <= close;
  // if (houer >= open && houer <= close) alert("We are currently open");
  // else alert("We are close");
  return (
    <div className="Footer">
      <footer>{new Date().toLocaleTimeString()} We are currently open.</footer>
    </div>
  );
};

export default Footer;
