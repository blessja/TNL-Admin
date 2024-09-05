const BookAFreeDemoButton = (text : any) => {
    return (
      <button className="self-stretch h-[53px] flex-col justify-start items-start scale-75 2xl:scale-100 gap-2.5 flex">
        <div className="h-[58px] shadow-md hover:shadow-xl transition duration-300 px-8 py-3.5 hover:bg-white text-white  border hover:text-teal-600 hover:border-teal-600 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="w-[215px] h-[30px] text-center text-2xl font-medium ">
            {text.text}
          </div>
        </div>
      </button>
    );
  };
  
  export default BookAFreeDemoButton;
  