import { NavLink } from "react-router-dom";

const linkStyle = ({isActive}) => ({
    marginRight:8,
    textDecoration:"none",
    padding:"6px 10px",
    borderRadius:6,
    border: "1px solid #ddd",
    backgroud: isActive ? "#fff" : "#111"
})

export default function Navbar(){
    return(
        <nav style={{
            display:"flex",
            alignItems:"center",
            gap:8,
            padding:12,
            borderBottom:"1px solid #eee"
        }}>
            <NavLink to={"/"} style={linkStyle}>Home</NavLink>
            <NavLink to={"/sobre"} style={linkStyle}>Sobre</NavLink>
            <NavLink to={"/post/12"} style={linkStyle}>Post 12</NavLink>
        </nav>
    )
}