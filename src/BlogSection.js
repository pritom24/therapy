import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './blogcection.css'

// axios.get('https://www.sadia.primex-bd.com/api/all-slider').then((res)=>{

// console.log(res);
// }).catch(function (error) {
    
//     console.log(error);
//   })

function BlogSection({heading, peragraphOne, reverse, image}) {
	const [allBlog, setAllBlog] = useState([]);
   

	useEffect(() => {
   axios.get('https://www.sadia.primex-bd.com/api/all-blogs').then(res=>{
	  setAllBlog(res.data.data)
	  console.log(res.data.data);
   }).catch(err=>{
	  console.log(err);
   })
	}, []);
    return (
      <>
	 
  <div className="myrow-uneven">
	<div className="mycol-left">
		{
			allBlog.map(value=>{
				return <div className="myrow">
				<div className="mycol">
					<header className="blog-header">
						<h2>
							{value.title}
						</h2>
						<p>Created at<span className="date">&nbsp;{value.created_at}</span></p>
					</header>
					<img className='style-img' src={`https://www.sadia.primex-bd.com/assets/images/blogs/${value.photo}`}/>
					<p><strong>In this post</strong>  {value.details}</p>
					<div className="post-btm-bar">
						<button className="likes"><i className="fas fa-thumbs-up"></i> Like</button>
						<button className="replies">Replies <span className="count">42</span></button>
					</div>
				</div>
			</div>
			})
		}
		</div>

	{/* <!-- SIDEBAR --> */}
	<div className="mycol-right">
		<section className="profile">
			<div className="myrow author">
				<div className="mycol author">
					<img className='style-img' src={`https://www.sadia.primex-bd.com/assets/images/blogs/1656583989image-1.jpg`}/>
					<div className="abt">
						<h3 className="profile-title">Latest Post</h3>
						<p>চিকিৎসকদের মানসিক চাপ দিয়ে সেবা আদায় করা যায় না</p>
					</div>
				</div>
			</div>
		</section>

		<section className="popular-posts">
			<header className="sidebar-header">
				<h2>Popular Posts</h2>
			</header>
			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1454329001438-1752daa90420?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=becd834394b89fc2fccb45a7bc3f525a&auto=format&fit=crop&w=2250&q=80"/>
					</div>
					<div className="p-text">
						<h5>Adventures</h5>
						<p>Sed mattis nunct...</p>
					</div>
				</div>
			</div>

			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1453814235491-3cfac3999928?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f05da4077424625439e156f87d204797&auto=format&fit=crop&w=2250&q=80"/>
					</div>
					<div className="p-text">
						<h5>Art Walks</h5>
						<p>Sed mattis nunc...</p>
					</div>
				</div>
			</div>
			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1519822356-4853be4346a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bdeea149c483827d9e839a10e87403c5&auto=format&fit=crop&w=2251&q=80"/>
					</div>
					<div className="p-text">
						<h5>Conventions</h5>
						<p>Sed mattis nunc...</p>
					</div>
				</div>
			</div>
			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1469073082817-a29a4270b679?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=abb145dace8683d154f8e0eced31eda7&auto=format&fit=crop&w=2250&q=80"/>
					</div>
					<div className="p-text">
						<h5>New School</h5>
						<p>Sed mattis nunc...</p>
					</div>
				</div>
			</div>
			<div className="myrow">
				<div className="mycol p-posts">
					<div className="p-img">
						<img src="https://images.unsplash.com/photo-1479767574301-a01c78234a0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f32e2e491210be1d4ad5132b9a0c0bb4&auto=format&fit=crop&w=2250&q=80"/>
					</div>
					<div className="p-text">
						<h5>Traditional</h5>
						<p>Sed mattis nunc...</p>
					</div>
				</div>
			</div>
		</section>

		<section className="tag-cloud">
			<header className="sidebar-header">
				<h2>Tags</h2>
			</header>
			<div className="myrow">
				<div className="mycol">
					<span className="tag">Medicine</span>
					<span className="tag">Doctor</span>
					<span className="tag">medical</span>
					<span className="tag">health Care</span>
					<span className="tag">hypnosis</span>
					<span className="tag">hypnotherapy</span>
					<span className="tag">Healing</span>
					<span className="tag">Motivation</span>
					<span className="tag">Confusion</span>
					
				</div>
			</div>
		</section>

		<section className="follow">
			<header className="sidebar-header">
				<h2>Follow me</h2>
			</header>
			<div className="myrow">
				<div className="mycol my-2 ">
					<a href="#"><i className="fab fa-facebook-f"></i></a>
					<a href="#"><i className="fab fa-twitter"></i></a>
					<a href="#"><i className="fab fa-pinterest"></i></a>
					<a href="#"><i className="fab fa-instagram"></i></a>
					<a href="#"><i className="fab fa-snapchat"></i></a>
					<a href="#"><i className="fab fa-linkedin-in"></i></a>
				</div>
			</div>
		</section>

		<section className="subscribe">
			<header className="sidebar-header">
				<h2>Subscribe</h2>
			</header>
			<div className="myrow">
				<div className="mycol">
					<p>Enter your e-mail below and get notified on the latest blog posts.</p>
					<form>
						<input type="email" name="email" value="E-mail"/>
						<input type="submit"/>
					</form>
				</div>
			</div>

		</section>

	</div>
</div>


		</>
    
    );
}

export default BlogSection;