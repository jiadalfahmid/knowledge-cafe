import profile from '../../assets/images/profile.png'
const Header = () => {
   return (
      <div className="container mx-auto pt-10 flex justify-between items-center border-b-4 pb-6 mb-6">
         <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
         <img src={profile} alt="profile" />
      </div>
   );
};

export default Header;