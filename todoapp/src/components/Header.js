function Header(){
  return <>
   <div
        style={{ position:"sticky", backgroundColor:"skyblue",top: 0 ,zIndex:2}}
        className="p-3 d-flex justify-content-center"
      >
        <span
          style={{
            color: "antiquewhite",
            fontFamily: "cursive",
            fontSize: "33px",

            fontWeight: "bold",
          }}
        >
          To Do App
        </span>
      </div>
  </>
}
export default Header;