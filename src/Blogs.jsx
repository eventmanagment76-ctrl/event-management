import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import j7 from "./assets/j7.jpeg";
import d6 from "./assets/d6.jpeg";
import h2 from "./assets/h2.jpeg";
import i9 from "./assets/i9.jpeg";
import j6 from "./assets/j6.jpeg";
import l7 from "./assets/l7.jpeg";
import k10 from "./assets/k10.jpeg";
import te5 from "./assets/te5.jpg";
import i8 from "./assets/i8.jpeg";










const blogs = [
{
img:j7,
title:"Corporate Event Trends Every Brand Should Know",
desc:"Explore the latest corporate event trends that help businesses engage audiences, build stronger brand identity....",
link:"/blog1"
},

{
img:d6,
title:"Creative Wedding Event Ideas for Modern Couples",
desc:"Discover elegant wedding event concepts, stylish decor ideas, and memorable experiences that make wedding celebrations truly magical....",
link:"/blog2"
},

{
img:h2,
title:"Exhibition Booth Design Ideas to Attract Visitors",
desc:"Learn how smart exhibition booth designs can attract attention, increase visitor interaction, and enhance your brand visibility....",
link:"/blog3"
},

{
img:i9,
title:"Artists and Entertainment Ideas for Live Events",
desc:"From live bands and DJs to celebrity performers and dancers, entertainment plays a key role in making events energetic and memorable....",
link:"/blog4"
},

{
img:j6,
title:"Conference Event Planning Guide for Businesses",
desc:"Plan successful conferences with engaging speakers, interactive sessions, and seamless event management strategies....",
link:"/blog5"
},

{
img:l7,
title:"How Product Launch Events Build Brand Excitement",
desc:"Product launch events create excitement, media buzz, and customer interest while introducing innovative products to the market....",
link:"/blog6"
},

{
img:k10,
title:"Experiential Marketing Events That Engage Customers",
desc:"Experiential marketing allows brands to create immersive experiences that connect emotionally with customers and increase brand loyalty....",
link:"/blog7"
},

{
img:te5,
title:"Team Building Activities for Corporate Success",
desc:"Interactive team building activities help employees collaborate better, improve communication, and create a positive ....",
link:"/blog8"
},

{
img:i8,
title:"Technology Innovations Transforming Event Management",
desc:"Discover how technology like AR, VR, and digital engagement tools are transforming the future of event management....",
link:"/blog9"
}
];

function BlogSection(){

return(

<section className="blog-section">

<div className="blog-header">

<p className="sub">WE PROVIDE AWESOME INSIGHTS</p>

<h2>RECENT <span>BLOG</span></h2>

<p className="tagline">
Ideas, tips & inspiration — we share what matters in events.
</p>

</div>

<div className="blog-grid">

{blogs.map((blog,index)=>(

<div className="blog-card" key={index}>

<img src={blog.img} alt="blog"/>

<div className="blog-content">

<h3>{blog.title}</h3>

<p>{blog.desc}</p>

<Link to={blog.link}>
<button className="read-btn">Read More</button>
</Link>

</div>

</div>

))}

</div>



</section>


)

}

export default BlogSection;