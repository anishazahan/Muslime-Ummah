const SingleGallary = ({ imgInfo }) => {
  // console.log(img);
  return (
    <div className="w-[350px] m-2 rounded-md gellery-shadow">
      <img className="w-full p-1.5 rounded-md" src={imgInfo.url} alt="" />
    </div>
  );
};

export default SingleGallary;
