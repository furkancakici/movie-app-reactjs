import './footer.scss';

const Footer = () => {
   let getYear = new Date();
   return (
      <div className='footer'>
         <div className=''>Movie App</div>
         <div>© {getYear.getFullYear()}, Movie App Inc.</div>
      </div>
   );
};

export default Footer;
